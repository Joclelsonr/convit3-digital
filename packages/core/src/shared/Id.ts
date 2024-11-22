import { v4 as uuidv, validate } from "uuid";

export default class Id {
  static new(): string {
    return uuidv();
  }

  static validate(id: string): boolean {
    return validate(id);
  }
}
