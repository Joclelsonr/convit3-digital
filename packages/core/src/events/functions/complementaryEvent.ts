import Id from "../../shared/Id";
import Event from "../model/Event";
import validateEvent from "./validateEvent";
import Password from "../../shared/Password";

export default function complementaryEvent(
  partialEvent: Partial<Event>
): Event {
  const errors = validateEvent(partialEvent);

  if (errors.length) {
    throw new Error(errors.join("\n"));
  }

  const event: Event = {
    ...partialEvent,
    id: partialEvent.id ?? Id.new(),
    password: partialEvent.password ?? Password.create(),
    expectedGuests: +(partialEvent.expectedGuests ?? 1),
  } as Event;

  return event;
}
