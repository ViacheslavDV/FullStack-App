import { PrismaClient } from '@prisma/client';
import { music } from '../data/music';

const prisma = new PrismaClient();

interface SongCreateInput {
  authorId: number;
  title: string;
  album?: string | null;
  artist: string;
  listeners?: number;
  image?: string | null;
  genre?: string[];
  file: string;
}

export async function seedMusic(authorId: number) {
  for (let songData of music) {
    const { author, ...song } = songData;
    const existingAuthor = await prisma.author.findFirst({
      where: { name: author },
    });

    if (existingAuthor) {
      const songInput: SongCreateInput = {
        ...song,
        authorId: authorId,
      };

      await prisma.song.create({
        data: songInput,
      });
    }
  }
}
