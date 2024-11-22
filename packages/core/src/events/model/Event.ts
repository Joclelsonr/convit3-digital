import Guest from "./Guest";

export default interface Event {
  id: string;
  alias: string;
  password: string;
  name: string;
  date: Date;
  location: string;
  description: string;
  image: string;
  imageBackground: string;
  expectedGuests: number;
  guests: Guest[];
}
