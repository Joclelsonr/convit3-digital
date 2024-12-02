import { Guest } from "core";
import { InputField } from "../shared/InputField";
import InputToggle from "../shared/InputToggle";

export interface FormGuestProps {
  guest: Partial<Guest>;
  changeGuest: (guest: Partial<Guest>) => void;
}

export default function FormGuest(props: FormGuestProps) {
  return (
    <div className="flex flex-col gap-2">
      <InputField
        label="Nome"
        value={props.guest.name ?? ""}
        onChange={(e) =>
          props.changeGuest({ ...props.guest, name: e.target.value })
        }
      />
      <InputField
        label="E-mail"
        value={props.guest.email ?? ""}
        onChange={(e) =>
          props.changeGuest({ ...props.guest, email: e.target.value })
        }
      />
      <div className="flex gap-5">
        <InputToggle
          label="Confirmar Presença?"
          value={props.guest.confirmed ?? true}
          onChange={(value) => {
            props.changeGuest({ ...props.guest, confirmed: value });
          }}
          className="flex-1"
        />
        {props.guest.confirmed && (
          <div className="flex-1 flex gap-5">
            <InputToggle
              label="Possui Acompanhantes?"
              value={props.guest.hasCompanion ?? false}
              onChange={(value) => {
                props.changeGuest({
                  ...props.guest,
                  hasCompanion: value,
                  qtdCompanion: value ? 1 : 0,
                });
              }}
              className="flex-1"
            />
            {props.guest.hasCompanion && (
              <InputField
                label="Quantos Acompanhantes?"
                value={props.guest.qtdCompanion ?? 1}
                onChange={(e) =>
                  props.changeGuest({
                    ...props.guest,
                    qtdCompanion: Number(e.target.value),
                  })
                }
                min={1}
                type="number"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
