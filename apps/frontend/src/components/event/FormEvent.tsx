import Steps from "../shared/Step";
import useEvent from "@/data/hooks/useEvent";
import { InputField } from "../shared/InputField";
import { Alias, DateFormatter } from "core";

const FormEvent = () => {
  const { event, aliasValid, changeEvent, saveEvent } = useEvent();
  const labels = [
    "Identificação do Evento",
    "Local e Data",
    "Informações Finais",
  ];

  const allowNextStep: boolean[] = [
    !!event.alias && !!event.name && aliasValid,
    !!event.date && !!event.location,
    !!event.description &&
      (event.expectedGuests ?? 0) > 0 &&
      !!event.image &&
      !!event.imageBackground,
  ];

  return (
    <div>
      <Steps
        labels={labels}
        labelAction="Cadastrar"
        action={saveEvent}
        isNextStep={allowNextStep}
      >
        <div className="flex flex-col gap-5">
          <InputField
            label="Identificador"
            description="Identificador único e exclusivo para o evento (usado na URL)"
            error={aliasValid ? "" : "Alias já foi utilizado e outro evento"}
            value={Alias.format(event.alias ?? "")}
            onChange={(e) =>
              changeEvent({ ...event, alias: Alias.format(e.target.value) })
            }
          />
          <InputField
            label="Nome"
            description='Nome do evento (ex: "Festa do João")'
            value={event.name ?? ""}
            onChange={(e) => changeEvent({ ...event, name: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-5">
          <InputField
            label="Data"
            description="Data e hora do evento"
            value={DateFormatter.format(new Date(event.date ?? new Date()))}
            onChange={(e) =>
              changeEvent({
                ...event,
                date: DateFormatter.unformat(e.target.value),
              })
            }
            type="datetime-local"
          />
          <InputField
            label="Local"
            description="Local onde o evento será realizado"
            value={event.location ?? ""}
            onChange={(e) =>
              changeEvent({ ...event, location: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col gap-5">
          <InputField
            label="Descrição"
            description='Descrição do evento (ex: "Só entra se trouxerem cerveja")'
            value={event.description ?? ""}
            onChange={(e) =>
              changeEvent({ ...event, description: e.target.value })
            }
          />
          <InputField
            label="Imagem"
            description='URL da imagem que será exibida no convite (ex: "https://i.imgur.com/123456.jpg")'
            value={event.image ?? ""}
            onChange={(e) => changeEvent({ ...event, image: e.target.value })}
          />
          <InputField
            label="Background"
            description='URL da imagem que será exibida no background (ex: "https://i.imgur.com/123456.jpg")'
            value={event.imageBackground ?? ""}
            onChange={(e) =>
              changeEvent({ ...event, imageBackground: e.target.value })
            }
          />
          <InputField
            label="Público Esperado"
            description='Total de convidados e acompanhantes esperados (ex: "100 pessoas")'
            value={event.expectedGuests ?? 1}
            onChange={(e) =>
              changeEvent({ ...event, expectedGuests: Number(e.target.value) })
            }
            type="number"
            min={1}
          />
        </div>
      </Steps>
    </div>
  );
};

export default FormEvent;
