"use client";

import { Event, Guest, events } from "core";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import EventDashboard from "@/components/event/EventDashboard";
import EventFormPassword from "@/components/event/EventFormPassword";

export default function AdminEventPage() {
  const { all }: any = useParams();

  const id = all[0];
  const [event, setEvent] = useState<Event | null>(null);
  const [password, setPassword] = useState<string | null>(all[1] ?? null);

  const confirmed = event?.guests.filter((c) => c.confirmed) ?? [];
  console.log("confirmados", confirmed);
  const absent = event?.guests.filter((c) => !c.confirmed) ?? [];
  const total = confirmed?.reduce((total: number, guest: Guest) => {
    return total + guest.qtdCompanion + 1;
  }, 0);

  function loadEvent() {
    const findEvent = events.find(
      (e) => e.id === id && e.password === password
    );
    setEvent(findEvent ?? null);
  }

  useEffect(() => {
    loadEvent();
  }, [id, password]);

  return (
    <div className="flex flex-col">
      {event ? (
        <EventDashboard
          event={event}
          confirmed={confirmed}
          absent={absent}
          total={Number(total)}
        />
      ) : (
        <EventFormPassword />
      )}
    </div>
  );
}
