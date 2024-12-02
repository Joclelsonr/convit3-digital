import {
  Event,
  DateFormatter,
  Id,
  Guest,
  complementaryEvent,
  complementaryGuest,
} from 'core';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { EventPrisma } from './event.prisma';

@Controller('events')
export class EventsController {
  constructor(readonly eventPrisma: EventPrisma) {}

  @Get()
  async getEvents() {
    const events = await this.eventPrisma.getAll();
    return events.map(this.serializeDate);
  }

  @Get(':id')
  async getEvent(@Param('id') id: string) {
    let event: Event;
    if (Id.validate(id)) {
      event = await this.eventPrisma.getById(id, true);
    }
    event = await this.eventPrisma.getByAlias(id, true);
    return this.serializeDate(event);
  }

  @Get('validate/:alias/:id')
  async validateAlias(@Param('alias') alias: string, @Param('id') id: string) {
    const event = await this.eventPrisma.getByAlias(alias);
    return { valid: !event || event.id === id };
  }

  @Post('access')
  async accessEvent(@Body() data: { id: string; password: string }) {
    const event = await this.eventPrisma.getById(data.id);
    if (!event) {
      throw new Error('Event not found');
    }
    if (event.password !== data.password) {
      throw new Error('Password does not match event');
    }
    return this.serializeDate(event);
  }

  @Post()
  async saveEvent(@Body() event: Event) {
    const findEvent = await this.eventPrisma.getByAlias(event.alias);
    if (findEvent && findEvent.id !== event.id) {
      throw new Error('Event already exists');
    }

    const fullEvent = complementaryEvent(this.deserializeDate(event));
    await this.eventPrisma.saveEvent(fullEvent);
    return this.serializeDate(fullEvent);
  }

  @Post(':alias/guest')
  async saveGuest(@Param('alias') alias: string, @Body() guest: Guest) {
    const event = await this.eventPrisma.getByAlias(alias);
    if (!event) {
      throw new Error('Event not found');
    }
    const fullGuest = complementaryGuest(guest);
    await this.eventPrisma.saveGuest(event, fullGuest);
  }

  private serializeDate(events: Event) {
    return {
      ...events,
      date: DateFormatter.format(events.date),
    };
  }

  private deserializeDate(events: any) {
    return {
      ...events,
      date: DateFormatter.unformat(events.date),
    };
  }
}
