import Guest from "../model/Guest";

export default function validateguest(guest: Partial<Guest>): string[] {
  const erros: string[] = [];

  if (!guest.name) {
    erros.push("Nome é obrigatório");
  }

  if (!guest.email) {
    erros.push("Email é obrigatório");
  }
  return erros;
}
