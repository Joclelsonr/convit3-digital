"use client";

import EventInformation from "@/components/event/EventInformation";
import Loading from "@/components/shared/Loading";
import useEvent from "@/data/hooks/useEvent";
import { Window } from "@/components/shared/Window";
import { Event } from "core";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import FormGuest from "@/components/event/FormGuest";

export default function InvitationPage(props: any) {
  const params: any = useParams();
  const { event, guest, addGuest, changeGuest, loadEvent } = useEvent();

  useEffect(() => {
    loadEvent(params.alias);
  }, [params.alias]);

  return event.alias ? (
    <div>
      <Window
        label="Você foi convidado para participar do evento"
        title={event.name ?? ""}
        image={event.image ?? ""}
        background={event.imageBackground ?? ""}
      >
        <EventInformation isHiddenName={true} event={event as Event} />
        <div className=" flex flex-col gap-4 pt-10">
          <span className="text-xl font-bold ">Insira seus dados</span>
          <div className="border-t border-zinc-800"></div>
          <FormGuest guest={guest} changeGuest={changeGuest} />
          <button
            className={`py-2 px-2 rounded-lg self-center ${guest.confirmed ? "bg-green-500" : "bg-red-500"}`}
            onClick={addGuest}
          >
            Confirmar {guest.confirmed ? "Presença" : "Ausência"}
          </button>
        </div>
      </Window>
    </div>
  ) : (
    <Loading />
  );
}
