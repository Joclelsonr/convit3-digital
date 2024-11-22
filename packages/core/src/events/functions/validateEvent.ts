import Event from "../model/Event";

export default function validateEvent(evento: Partial<Event>): string[] {
  const erros: string[] = [];

  if (!evento.alias) {
    erros.push("Alias é obrigatório");
  }

  if (!evento.name) {
    erros.push("Nome é obrigatório");
  }

  if (!evento.description) {
    erros.push("Descrição é obrigatória");
  }

  if (!evento.date) {
    erros.push("Data é obrigatória");
  }

  if (!evento.location) {
    erros.push("Local é obrigatório");
  }

  if (!evento.expectedGuests || evento.expectedGuests < 1) {
    erros.push("Público esperado é obrigatório");
  }

  if (!evento.image) {
    erros.push("Imagem é obrigatória");
  }

  if (!evento.imageBackground) {
    erros.push("Imagem de fundo é obrigatória");
  }

  return erros;
}
