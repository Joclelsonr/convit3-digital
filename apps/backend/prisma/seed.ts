import { PrismaClient } from '@prisma/client';
import events from './eventsData';

async function seed() {
  const prisma = new PrismaClient();

  const transactions = events.map(async (event) => {
    await prisma.event.create({
      data: {
        id: event.id,
        alias: event.alias,
        password: event.password,
        name: event.name,
        description: event.description,
        date: event.date,
        location: event.location,
        image: event.image,
        imageBackground: event.imageBackground,
        expectedGuests: event.expectedGuests,
        guests: {
          create: event.guests.map((guest) => ({
            id: guest.id,
            name: guest.name,
            email: guest.email,
            confirmed: guest.confirmed,
            hasCompanion: guest.hasCompanion,
            qtdCompanion: guest.qtdCompanion,
          })),
        },
      },
    });
  });

  await Promise.all(transactions);
}

seed();
