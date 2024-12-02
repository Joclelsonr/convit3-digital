export default class DateFormatter {
  static format(date: Date): string {
    if (!(date instanceof Date)) {
      throw new TypeError("O argumento deve ser uma instância de Date.");
    }

    const pad = (number: number) => number.toString().padStart(2, "0");

    const currentDate = date ?? new Date();
    const year = currentDate.getFullYear();
    const month = pad(currentDate.getMonth() + 1);
    const day = pad(currentDate.getDate());
    const hours = pad(currentDate.getHours());
    const minutes = pad(currentDate.getMinutes());

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  static unformat(date: string): Date {
    const [year, month, day, hours, minutes] = date
      .split("T")[0]
      .split("-")
      .concat(date.split("T")[1].split(":"));
    return new Date(
      parseInt(year),
      parseInt(month) - 1,
      parseInt(day),
      parseInt(hours),
      parseInt(minutes)
    );
  }
}
