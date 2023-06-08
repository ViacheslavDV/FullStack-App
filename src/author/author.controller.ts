import { Controller, Get, Param } from '@nestjs/common';
import { AuthorService } from './author.service';

@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Get('all')
  async getAllAuthors() {
    return this.authorService.getAllAuthors();
  }

  @Get('popular')
  async getPopularAuthors() {
    return this.authorService.getPopularAuthors();
  }

  @Get('new')
  async getNewAuthors() {
    return this.authorService.getNewAuthors();
  }

  @Get(':id')
  async getAuthorById(@Param('id') id: number) {
    return this.authorService.getAuthorById(+id);
  }
}
