"use client";

import FormEvent from "@/components/event/FormEvent";
import { Window } from "@/components/shared/Window";
import useEvent from "@/data/hooks/useEvent";

export default function EventPage() {
  const { event } = useEvent();
  return (
    <div>
      <Window
        label="Qual evento vamos criar?"
        title={event?.name ? event.name : "Novo Evento"}
        image={event?.image ? event.image : ""}
        background={event?.imageBackground ? event.imageBackground : ""}
      >
        <FormEvent />
      </Window>
    </div>
  );
}
