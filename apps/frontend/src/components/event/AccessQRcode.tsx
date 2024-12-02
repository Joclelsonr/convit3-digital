import { Event } from "core";
import QRCode from "react-qr-code";

export interface AccessQRcodeProps {
  event: Event;
}

export default function AccessQRcode({ event }: AccessQRcodeProps) {
  return (
    <div className="flex flex-col justify-center items-center border rounded-lg border-zinc-800 p-4">
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
