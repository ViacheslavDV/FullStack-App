import { Controller, Get, Query } from '@nestjs/common';
import { MusicService } from './music.service';
import { AllMusicDto } from './dto/all-music.dto';

@Controller('music')
export class MusicController {
  constructor(private readonly musicService: MusicService) {}

  @Get()
  async getAllMusic(@Query() queryDto: AllMusicDto) {
    return this.musicService.getAllMusic(queryDto);
  }

  @Get('popular')
  async getPopularMusic() {
    return this.musicService.getPopularMusic();
  }

  @Get('new')
  async getNewMusic() {
    return this.musicService.getNewMusic();
  }
}
