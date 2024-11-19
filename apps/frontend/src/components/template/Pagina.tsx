import Logo from "./Logo";

export interface PaginaProps {
  children: React.ReactNode;
  classname?: string;
}

const Pagina = ({ children, classname }: PaginaProps) => {
  return (
    <div className="flex flex-col items-center py-10 min-h-screen bg-[url('/background.png')] bg-cover">
      <Logo />
      <main
        className={`${classname} flex-1 flex flex-col justify-center py-10 container`}
      >
        {children}
      </main>
    </div>
  );
};

export default Pagina;
