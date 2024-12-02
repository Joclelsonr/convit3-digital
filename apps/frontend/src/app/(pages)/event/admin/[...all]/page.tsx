"use client";

import { Event, Guest, events } from "core";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import EventDashboard from "@/components/event/EventDashboard";
import EventFormPassword from "@/components/event/EventFormPassword";
import useApi from "@/data/hooks/useApi";

export default function AdminEventPage() {
  const { httpPost } = useApi();
  const { all }: any = useParams();

  const id = all[0];
  const [event, setEvent] = useState<Event | null>(null);
  const [password, setPassword] = useState<string>(all[1] ?? "");

  const confirmed = event?.guests?.filter((c) => c.confirmed) ?? [];
  const absent = event?.guests?.filter((c) => !c.confirmed) ?? [];
  const total = confirmed?.reduce((total: number, guest: Guest) => {
    return total + guest.qtdCompanion + 1;
  }, 0);

  function loadEvent() {
    const findEvent = events.find(
      (e) => e.id === id && e.password === password
    );
    setEvent(findEvent ?? null);
  }

  const accessEvent = useCallback(async () => {
    if (!id || !password) return;
    const event = await httpPost("events/access", {
      id,
      password,
    });
    setEvent(event);
  }, [id, password]);

  useEffect(() => {
    loadEvent();
  }, [id, password]);

  return (
    <div className="flex flex-col items-center">
      {event ? (
        <EventDashboard
          event={event}
          confirmed={confirmed}
          absent={absent}
          total={Number(total)}
          loadGuests={accessEvent}
        />
      ) : (
        <EventFormPassword
          accessEvent={accessEvent}
          password={password}
          setPassword={setPassword}
        />
      )}
    </div>
  );
}
