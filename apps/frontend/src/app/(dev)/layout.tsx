import { ReactNode } from "react";
import Pagina from "@/components/template/Pagina";

export default function Layout(props: { children: ReactNode }) {
  return <Pagina>{props.children}</Pagina>;
}
