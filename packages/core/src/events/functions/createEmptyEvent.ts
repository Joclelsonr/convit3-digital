import Id from "../../shared/Id";
import Event from "../model/Event";

export default function createEmptyEvent(): Partial<Event> {
  return {
    id: Id.new(),
    name: "",
    description: "",
    date: new Date(),
    location: "",
    expectedGuests: 1,
    image: "",
    imageBackground: "",
  };
}
