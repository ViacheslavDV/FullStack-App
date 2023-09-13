import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { GenreDto } from './dto/genre.dto';

@Injectable()
export class GenreService {
  constructor(private prisma: PrismaService) {}

  async getGenres() {
    return await this.prisma.genre.findMany();
  }

  async getSongsByGenre(dto: GenreDto) {
    const songs = await this.prisma.song.findMany({
      where: {
        genre: {
          some: {
            tag: dto.tag,
          },
        },
      },
    });

    return songs;
  }
}
