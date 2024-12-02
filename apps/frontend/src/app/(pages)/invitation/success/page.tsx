import Image from "next/image";
import React from "react";

const InvitationSuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image src="/mascot.png" alt="Mascot" width={300} height={300} />
      <span className="text-3xl font-bold">Muito Obrigado!</span>
      <span className="text-zinc-400">
        Sua confirmação é muito importante para nós!
      </span>
    </div>
  );
};

export default InvitationSuccessPage;
