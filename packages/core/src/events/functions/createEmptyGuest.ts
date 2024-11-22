import Id from "../../shared/Id";
import Guest from "../model/Guest";

export default function createEmptyguest(): Partial<Guest> {
  return {
    id: Id.new(),
    name: "",
    email: "",
    confirmed: true,
    hasCompanion: false,
    qtdCompanion: 0,
  };
}
