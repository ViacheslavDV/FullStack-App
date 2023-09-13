import { Module } from '@nestjs/common';
import { MusicService } from './music.service';
import { MusicController } from './music.controller';
import { PrismaService } from 'src/prisma.service';
import { PaginationService } from 'src/pagination/pagination.service';

@Module({
  controllers: [MusicController],
  providers: [MusicService, PrismaService, PaginationService],
})
export class MusicModule {}
