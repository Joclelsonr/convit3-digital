import { Injectable } from '@nestjs/common';
import { Event, Guest } from 'core';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class EventPrisma {
  constructor(readonly prisma: PrismaProvider) {}

  async saveEvent(event: Event) {
    return await this.prisma.event.create({
      data: {
        ...event,
        guests: { create: event.guests },
      },
    });
  }

  async saveGuest(event: Event, guest: Guest) {
    return await this.prisma.guest.create({
      data: {
        ...guest,
        qtdCompanion: +(guest.qtdCompanion ?? 0),
        event: { connect: { id: event.id } },
      },
    });
  }

  async getAll(): Promise<Event[]> {
    return (await this.prisma.event.findMany()) as any;
  }

  async getById(id: string, full: boolean = true): Promise<Event> {
    return await this.prisma.event.findUnique({
      where: { id },
      include: { guests: full },
    });
  }

  async getByAlias(alias: string, full: boolean = false): Promise<Event> {
    return await this.prisma.event.findUnique({
      select: {
        id: true,
        name: true,
        description: true,
        date: true,
        location: true,
        image: true,
        imageBackground: true,
        alias: true,
        password: full,
        guests: full,
        expectedGuests: full,
      },
      where: { alias },
    });
  }
}
