import { HTMLProps } from "react";

export interface InputFieldProps extends HTMLProps<HTMLInputElement> {
  label?: string;
  value: string | number;
  onChange: (event: any) => void;
  description?: string;
  object?: any;
  error?: string;
}

export const InputField = (props: InputFieldProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col">
        {props.label && (
          <label className="text-lg font-black text-white">{props.label}</label>
        )}
        {props.description && (
          <p className="text-sm font-light text-zinc-400 -mt-1">
            {props.description}
          </p>
        )}
      </div>
      <input
        {...props}
        type={props.type ?? "text"}
        className="w-full px-3 py-2 border border-white/20 focus:border-white/50 rounded-md bg-black/50 "
      />
      {props.error && (
        <span className="pl-2 text-sm text-red-500">{props.error}</span>
      )}
      {!props.error && props.object && (
        <span className="pl-2 text-xs text-yellow-300">{props.object}</span>
      )}
    </div>
  );
};
