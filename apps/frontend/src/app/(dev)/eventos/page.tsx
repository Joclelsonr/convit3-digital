import events from "@/core/constants/events";
import Image from "next/image";
import Link from "next/link";
import QRCode from "react-qr-code";

export default function EventsPage() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {events.map((event) => (
        <div
          key={event.id}
          className="flex flex-col w-full bg-zinc-800 rounded-lg overflow-hidden"
        >
          <div className=" relative w-full h-44">
            <Image
              src={event.image}
              alt={event.name}
              className="object-cover"
              fill
            />
          </div>
          <div className=" flex flex-col items-center flex-1 p-4 gap-2">
            <h1 className="text-lg font-black">{event.name}</h1>
            <p className="flex-1 text-sm text-zinc-400 text-center">
              {event.description}
            </p>
            <QRCode
              value={JSON.stringify({ id: event.id, pass: event.password })}
              size={150}
            />
            <div className="flex w-full gap-4">
              <Link
                href={`/event/admin/${event.id}/${event.password}`}
                className="flex justify-center flex-1 py-2 rounded-md bg-red-500"
              >
                Admin
              </Link>
              <Link
                href={`/invitation/${event.alias}`}
                className="flex justify-center flex-1 py-2 rounded-md bg-green-500"
              >
                Invitation
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
