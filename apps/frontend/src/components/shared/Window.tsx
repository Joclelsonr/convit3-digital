import Image from "next/image";
import React from "react";

export interface WindowProps {
  label: string;
  title: string;
  image: string;
  background: string;
  children: React.ReactNode;
}

export const Window = (props: WindowProps) => {
  return (
    <div className="relative rounded-xl overflow-hidden border border-zinc-800">
      <Image
        src={
          props.background
            ? props.background
            : "https://media.licdn.com/dms/image/C4D12AQEYFQhs1fmF4A/article-cover_image-shrink_720_1280/0/1540484075431?e=2147483647&v=beta&t=QDG332OlruOVaJua2y29ypLtyjWyYZVD5TG1cWsXR7s"
        }
        alt="Imagem de background"
        className="-z-30 object-cover"
        fill
      />
      <div className="bg-black/80">
        <div className="flex gap-7 items-center p-6">
          <div className="w-28 h-28 relative">
            <Image
              src={
                props.image
                  ? props.image
                  : "https://d3jdy5kagtp3z4.cloudfront.net/files/eventos/170/18bc34ea92e424db9fad19091dacfcae.png"
              }
              alt="Imagem do evento"
              className="rounded-full object-cover"
              fill
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-zinc-300">
              {props.label ?? "Detalhes do Evento:"}
            </span>
            <span className="text-4xl font-bold text-white">
              {props.title ?? "Título do Evento"}
            </span>
          </div>
          <div className="flex-1"></div>
          <Image src="/elements.png" alt="Elementos" width={140} height={140} />
        </div>
        <div className="bg-black/70 border-t-4 border-zinc-800 rounded-b-xl p-7">
          {props.children}
        </div>
      </div>
    </div>
  );
};
