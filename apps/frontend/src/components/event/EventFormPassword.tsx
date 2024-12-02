import { InputField } from "../shared/InputField";

export interface EventFormPasswordProps {
  password: string;
  setPassword: (password: string) => void;
  accessEvent: () => void;
}

export default function EventFormPassword(props: EventFormPasswordProps) {
  return (
    <div className="w-96 flex flex-col items-center gap-4 border border-zinc-700 bg-zinc-900 p-8 rounded-xl shadow-lg">
      <h1 className="text-3xl font-black ">Bem-vindo(a)</h1>
      <h2 className="text-lg font-semibold -mt-3">Administrador</h2>
      <p className="text-sm text-zinc-400">
        Digite a senha para acessar o evento:
      </p>
      <InputField
        value={props.password}
        onChange={(e) => props.setPassword(e.target.value)}
        placeholder="Digite sua senha"
        type="password"
        className="w-full"
      />
      <button
        className="w-3/4 py-2 px-2 mt-2 bg-blue-500 rounded-xl"
        onClick={props.accessEvent}
      >
        Acessar Evento
      </button>
    </div>
  );
}
