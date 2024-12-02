export interface InputToggleProps {
  label?: string;
  value: boolean;
  className?: string;
  onChange: (value: boolean) => void;
}

const InputToggle = (props: InputToggleProps) => {
  function renderToogle(value: boolean) {
    return (
      <span
        className={`flex-1 flex items-center justify-center rounded-md cursor-pointer ${props.value === value ? "bg-black font-bold" : "text-zinc-400"}`}
        onClick={() => props.onChange(value)}
      >
        {value ? "Sim" : "Não"}
      </span>
    );
  }

  return (
    <div className={`flex flex-col gap-2 ${props.className ?? ""}`}>
      {props.label && (
        <label className="text-lg font-black">{props.label}</label>
      )}
      <div className="w-56 flex justify-start h-10 rounded-md bg-zinc-900 p-1">
        {renderToogle(true)}
        {renderToogle(false)}
      </div>
    </div>
  );
};

export default InputToggle;
