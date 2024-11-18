import React from "react";

export interface PaginaProps {
  children: React.ReactNode;
  classname?: string;
}

const Pagina = ({ children, classname }: PaginaProps) => {
  return (
    <div className="flex flex-col items-center py-10 min-h-screen bg-[url('/background.png')] bg-cover">
      <main className={classname}>{children}</main>
    </div>
  );
};

export default Pagina;
