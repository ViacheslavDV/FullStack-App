import { PrismaClient } from '@prisma/client';

import { seedMusic } from './seed-music';
import { authors } from '../data/authors';

const prisma = new PrismaClient();

export async function seedAuthors() {
  let createdAuthor;
  for (let authorData of authors) {
    const { songs, ...author } = authorData;
    createdAuthor = await prisma.author.create({
      data: {
        ...author,
        songs: {
          create: songs,
        },
      },
      include: {
        songs: true,
      },
    });
  }
  await seedMusic(createdAuthor.id);
}
