import { ReactNode } from "react";
import { EventContexProvider } from "@/data/contexts/EventContext";
import { MessageContextProvider } from "@/data/contexts/MessageContext";
import { Toaster } from "@/components/ui/toaster";
import Pagina from "@/components/template/Pagina";

export default function Layout(props: { children: ReactNode }) {
  return (
    <>
      <MessageContextProvider>
        <EventContexProvider>
          <Pagina>{props.children}</Pagina>;
          <Toaster />
        </EventContexProvider>
      </MessageContextProvider>
    </>
  );
}
