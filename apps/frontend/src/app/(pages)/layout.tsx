import { ReactNode } from "react";
import { EventContexProvider } from "@/data/contexts/EventContext";
import Pagina from "@/components/template/Pagina";

export default function Layout(props: { children: ReactNode }) {
  return (
    <>
      <EventContexProvider>
        <Pagina>{props.children}</Pagina>;
      </EventContexProvider>
    </>
  );
}
