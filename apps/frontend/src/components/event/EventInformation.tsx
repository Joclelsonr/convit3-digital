import { Event } from "core";
import Information from "../shared/Information";

export interface EventInformationProps {
  event: Event;
  className?: string;
  isHiddenName?: boolean;
}

export default function EventInformation({
  event,
  className,
  isHiddenName = false,
}: EventInformationProps) {
  return (
    <div className={`flex flex-col gap-2 ${className ?? ""}`}>
      {isHiddenName ? null : (
        <div className="flex-1 flex items-center gap-4 border border-zinc-800 py-3 px-6 rounded-lg">
          <span className="text-2xl font-black">{event.alias}:</span>
          <span className="text-xl text-zinc-300">{event.name}</span>
        </div>
      )}
      <div className="flex gap-2">
        <Information label="Data:">
          <span>
            {new Date(event.date).toLocaleDateString()}
            {" as "}
            {new Date(event.date).toLocaleTimeString()}
          </span>
        </Information>
        <Information label="Local:">{event.location}</Information>
      </div>
      <Information label="Descrição:">{event.description}</Information>
    </div>
  );
}
