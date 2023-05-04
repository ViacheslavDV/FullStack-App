import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MusicService {
  constructor(private prisma: PrismaService) {}

  async getAllMusic() {
    const music = await this.prisma.song.findMany({});
    return music;
  }

  async getPopularMusic() {
    const music = await this.prisma.song.findMany({
      orderBy: {
        listeners: 'desc',
      },
    });
    return music;
  }

  async getNewMusic() {
    const music = await this.prisma.song.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return music;
  }
}
