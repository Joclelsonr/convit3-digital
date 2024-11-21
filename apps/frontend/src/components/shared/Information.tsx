export interface InformationProps {
  label: string;
  children: any;
}

export default function Information({ label, children }: InformationProps) {
  return (
    <div className="flex-1 flex flex-col items-start border border-zinc-800 px-6 py-3 rounded-lg">
      <span className="text-zinc-400 font-bold ">{label}</span>
      <div className="text-xl">{children}</div>
    </div>
  );
}