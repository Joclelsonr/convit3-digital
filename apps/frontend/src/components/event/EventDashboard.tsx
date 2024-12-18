import { Event, Guest } from "core";
import EventInformation from "./EventInformation";
import AccessQRcode from "./AccessQRcode";
import Statistic from "../shared/Statistic";
import GuestList from "./GuestList";

export interface EventDashboardProps {
  event: Event;
  confirmed: Guest[];
  absent: Guest[];
  total: number;
  loadGuests: () => void;
}

export default function EventDashboard(props: EventDashboardProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 self-stretch">
        <EventInformation event={props.event} className="flex-1" />
        <AccessQRcode event={props.event} />
      </div>
      <div className="grid grid-cols-3 gap-6 mt-4">
        <Statistic
          text="Expectativa de convidados"
          value={props.event.expectedGuests}
          image="/icons/guests.svg"
        />
        <Statistic
          text="Confirmados"
          value={props.confirmed.length}
          image="/icons/confirmed.svg"
        />
        <Statistic
          text="Total de convidados"
          value={props.total}
          image="/icons/companions.svg"
        />
      </div>
      <button
        className="flex items-center justify-center gap-2 self-end bg-blue-500 rounded-lg py-2 px-4 mt-12"
        onClick={props.loadGuests}
      >
        <span>Atualizar lista</span>
      </button>
      <span className="flex py-2 text-xl font-bold text-white/80">
        Convidados que confirmaram PRESENÇA
      </span>
      <GuestList guests={props.confirmed} />
      <span className="flex py-2 text-xl font-bold text-white/80">
        Convidados que confirmaram AUSÊNCIA
      </span>
      <GuestList guests={props.absent} />
    </div>
  );
}
