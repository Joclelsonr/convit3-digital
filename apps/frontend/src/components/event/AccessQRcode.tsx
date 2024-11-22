import { Event } from "core";
import QRCode from "react-qr-code";

export interface AccessQRcodeProps {
  event: Event;
}

export default function AccessQRcode({ event }: AccessQRcodeProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 border rounded-lg border-zinc-800 py-10">
      <span className="text-sm font-light text-zinc-400">
        Acesse via Mobile
      </span>
      <QRCode
        size={200}
        value={JSON.stringify({
          id: event.id,
          password: event.password,
        })}
        className="p-2"
      />
    </div>
  );
}
