import { PrismaClient } from '@prisma/client';
import { authors } from '../data/authors';

const prisma = new PrismaClient();

export async function seedAuthors() {
  for (const authorData of authors) {
    const { songs, ...author } = authorData;

    const createdAuthor = await prisma.author.create({
      data: {
        ...author,
      },
    });

    const createdSongs = [];

    for (const song of songs) {
      const createdSong = await prisma.song.create({
        data: {
          ...song,
          authorId: createdAuthor.id,
        },
      });

      createdSongs.push(createdSong);
    }

    authorData.songs = createdSongs;

    console.log(`Created author with id: ${createdAuthor.id}`);
    console.log(
      `Created author has songs: ${JSON.stringify(authorData.songs)}`,
    );
    console.log('Created songs:', authorData.songs);
  }

  console.log('Seed completed successfully.');
}
