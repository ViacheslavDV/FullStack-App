import { Controller, Get, Param } from '@nestjs/common';
import { GenreService } from './genre.service';
import { GenreDto } from './dto/genre.dto';

@Controller('genre')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Get('all')
  async getGenres() {
    return this.genreService.getGenres();
  }

  @Get(':tag')
  async getSongsByGenre(@Param() param: GenreDto) {
    return this.genreService.getSongsByGenre(param);
  }
}
