import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AllMusicDto, EMusicFilters } from './dto/all-music.dto';
import { PaginationService } from 'src/pagination/pagination.service';

@Injectable()
export class MusicService {
  constructor(
    private prisma: PrismaService,
    private paginationService: PaginationService,
  ) {}

  async getAllMusic(dto: AllMusicDto) {
    const { sort, search } = dto;

    const prismaSort = [];

    if (sort === EMusicFilters.LESS_POPULAR)
      prismaSort.push({ listeners: 'asc' });
    else if (sort === EMusicFilters.MOST_POPULAR)
      prismaSort.push({ listeners: 'desc' });
    else if (sort === EMusicFilters.OLDEST)
      prismaSort.push({ createdAt: 'asc' });
    else prismaSort.push({ createdAt: 'desc' });

    const prismaSearchFilter: any = search
      ? {
          OR: [
            {
              title: {
                contains: search,
                mode: 'insensitive',
              },
            },
            {
              artist: {
                contains: search,
                mode: 'insensitive',
              },
            },
          ],
        }
      : {};

    const { perPage, skip } = this.paginationService.getPagination(dto);

    const music = await this.prisma.song.findMany({
      where: prismaSearchFilter,
      orderBy: prismaSort,
      skip,
      take: perPage,
    });

    return {
      music,
      length: await this.prisma.song.count({
        where: prismaSearchFilter,
      }),
    };
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
