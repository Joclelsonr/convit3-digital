interface Guest {
    id: string;
    name: string;
    email: string;
    confirmed: boolean;
    hasCompanion: boolean;
    qtdCompanion: number;
}

interface Event {
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

declare const events: Event[];

declare function complementaryGuest(guest: Partial<Guest>): Guest;

declare function complementaryEvent(partialEvent: Partial<Event>): Event;

declare function createEmptyguest(): Partial<Guest>;

declare function createEmptyEvent(): Partial<Event>;

declare class Alias {
    static format(value: string): string;
}

declare class Id {
    static new(): string;
    static validate(id: string): boolean;
}

declare class DateFormatter {
    static format(date: Date): string;
    static unformat(date: string): Date;
}

declare class Password {
    static create(size?: number): string;
}

export { Alias, DateFormatter as Date, type Event, type Guest, Id, Password, complementaryEvent, complementaryGuest, createEmptyEvent, createEmptyguest, events };
