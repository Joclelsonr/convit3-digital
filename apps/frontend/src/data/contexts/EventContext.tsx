"use client";

import { createContext, useCallback, useEffect, useState } from "react";
import {
  createEmptyEvent,
  createEmptyguest,
  DateFormatter,
  Event,
  Guest,
} from "core";
import useApi from "../hooks/useApi";
import { useRouter } from "next/navigation";

export interface EventContextProps {
  event: Partial<Event>;
  guest: Partial<Guest>;
  aliasValid: boolean;

  changeEvent(event: Partial<Event>): void;
  changeGuest(guest: Partial<Guest>): void;
  loadEvent(id: string): Promise<void>;
  saveEvent(): Promise<void>;
  addGuest(): void;
}

const EventContext = createContext<EventContextProps>({} as any);

export function EventContexProvider(props: any) {
  const { httpGet, httpPost } = useApi();
  const router = useRouter();
  const [aliasValid, setAliasValid] = useState(true);
  const [event, setEvent] = useState<Partial<Event>>(createEmptyEvent());
  const [guest, setGuest] = useState<Partial<Guest>>(createEmptyguest());

  const saveEvent = useCallback(async () => {
    try {
      const createEvent = await httpPost("/events", event);
      router.push("/event/success");
      setEvent({
        ...createEvent,
        data: DateFormatter.unformat(createEvent.date),
      });
    } catch (error) {
      console.log(error);
    }
  }, [event, httpPost, router]);

  const loadEvent = useCallback(
    async (id: string) => {
      if (!id) return;
      try {
        const event = await httpGet(`/events/${id}`);
        setEvent({
          ...event,
          date: DateFormatter.unformat(event.date),
        });
      } catch (error) {
        console.log(error);
      }
    },
    [httpGet, setEvent]
  );

  const addGuest = useCallback(async () => {
    try {
      await httpPost(`/events/${event.alias}/guest`, guest);
      router.push("/invitation/success");
    } catch (error) {
      console.log(error);
    }
  }, [httpPost, event, guest, router]);

  const validAlias = useCallback(async () => {
    try {
      const { valid } = await httpGet(
        `/events/validate/${event.alias}/${event.id}`
      );
      setAliasValid(valid);
    } catch (error) {
      console.log(error);
    }
  }, [httpGet, event]);

  useEffect(() => {
    if (event.alias) validAlias();
  }, [event.alias, validAlias]);

  return (
    <EventContext.Provider
      value={{
        event,
        guest,
        aliasValid,
        changeEvent: setEvent,
        changeGuest: setGuest,
        saveEvent,
        loadEvent,
        addGuest,
      }}
    >
      {props.children}
    </EventContext.Provider>
  );
}

export default EventContext;
