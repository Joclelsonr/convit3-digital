import Guest from "@/core/events/model/Guest";
import GuestItem from "./GuestItem";

export interface GuestListProps {
  guests: Guest[];
}

export default function GuestList({ guests }: GuestListProps) {
  return (
    <div className="">
      <ul className="flex flex-col gap-2">
        {guests.map((guest) => (
          <GuestItem key={guest.id} guest={guest} />
        ))}
      </ul>
    </div>
  );
}
