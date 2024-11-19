export default class Password {
  static create(size: number = 15): string {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = lowercase.toUpperCase();
    const numbers = "0123456789";
    const specials = "!@#$%¨&*";

    const groups = [lowercase, uppercase, numbers, specials];
    const password = [];

    for (let i = 0; i < size; i++) {
      const group = groups[Math.floor(Math.random() * groups.length)];
      const char = group[Math.floor(Math.random() * group.length)];
      password.push(char);
    }

    return password.join("");
  }
}
