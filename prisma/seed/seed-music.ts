import { PrismaClient } from '@prisma/client';
import { music } from './../data/music';

const prisma = new PrismaClient();

export async function seedMusic() {
  for (let songs of music) {
    await prisma.song.create({
      data: songs,
    });
  }
}
