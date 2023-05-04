import { Controller, Get } from '@nestjs/common';
import { MusicService } from './music.service';

@Controller('music')
export class MusicController {
  constructor(private readonly musicService: MusicService) {}

  @Get('all')
  async getAllMusic() {
    return this.musicService.getAllMusic();
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
