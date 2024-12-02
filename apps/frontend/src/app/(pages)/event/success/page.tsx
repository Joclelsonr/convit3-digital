"use client";

import useEvent from "@/data/hooks/useEvent";
import EventInformation from "@/components/event/EventInformation";
import { Window } from "@/components/shared/Window";
import { Event } from "core";
import CopyClipboard from "@/components/shared/CopyClipboard";
import { IconFingerprint, IconLink } from "@tabler/icons-react";
import AccessQRcode from "@/components/event/AccessQRcode";
import { useEffect, useState } from "react";

const SuccessPage = () => {
  const { event } = useEvent();
  const [currentUrl, setCurrentUrl] = useState<string>("");

  useEffect(() => {
    setCurrentUrl(window.location.origin);
  }, []);

  return event ? (
    <Window
      label="Seu evento foi criado com sucesso!"
      title={event.name ?? ""}
      image={event.image ?? ""}
      background={event.imageBackground ?? ""}
    >
      <EventInformation event={event as Event} isHiddenName={true} />
      <div className="flex gap-5 items-center py-4">
        <div className="flex-1 flex flex-col gap-5">
          <CopyClipboard
            icon={IconLink}
            label="Link para convidar"
            text={`${currentUrl}/invitation/${event.alias}`}
          />
          <CopyClipboard
            icon={IconLink}
            label="Link Administrador"
            text={`${currentUrl}/event/admin/${event.id}`}
          />
          <CopyClipboard
            icon={IconFingerprint}
            label="Senha Administrador"
            text={event.password ?? ""}
            observation="Essa senha não será exibida novamente, então guarde-a com cuidado!"
          />
        </div>
        <AccessQRcode event={event as Event} />
      </div>
    </Window>
  ) : null;
};

export default SuccessPage;
