import { PrismaClient } from '@prisma/client';
import { genres } from '../data/genres';
import { authors } from '../data/authors';

const prisma = new PrismaClient();

export async function seedAuthorsAndGenres() {
  // Seed genres first
  const genresData = genres.map((tag) => ({ tag }));
  const createdGenres = await prisma.genre.createMany({
    data: genresData,
  });

  console.log(`Created genres: ${JSON.stringify(createdGenres)}`);

  // Seed authors
  for (const authorData of authors) {
    const { songs, ...author } = authorData;

    const createdAuthor = await prisma.author.create({
      data: {
        ...author,
      },
      include: {
        songs: true,
      },
    });

    console.log(`Created author with id: ${createdAuthor.id}`);

    // Pass the createdAuthor.id to the seedSongs function
    await seedSongs(createdAuthor.id, songs);
  }
}

export async function seedSongs(authorId, songsData) {
  for (const songData of songsData) {
    const genres = await prisma.genre.findMany({
      where: {
        tag: {
          in: songData.genre,
        },
      },
    });

    const createdSong = await prisma.song.create({
      data: {
        ...songData,
        author: {
          connect: {
            id: authorId,
          },
        },
        genre: {
          connect: genres.map((genre) => ({
            id: genre.id,
          })),
        },
      },
    });

    console.log(`Created song with id: ${createdSong.id}`);
  }
}
