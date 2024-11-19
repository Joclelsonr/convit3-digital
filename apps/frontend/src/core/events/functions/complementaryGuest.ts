import Guest from "../model/Guest";
import validateguest from "./validateGuest";

export default function complementaryGuest(guest: Partial<Guest>): Guest {
  const errors = validateguest(guest);

  if (errors.length) {
    throw new Error(errors.join("\n"));
  }

  const haveCompanions = guest.hasCompanion && guest.confirmed;

  const updatedGuest = {
    ...guest,
    qtdCompanion: haveCompanions ? Number(guest.qtdCompanion) : 0,
    hasCompanion: haveCompanions,
  };

  return updatedGuest as Guest;
}
