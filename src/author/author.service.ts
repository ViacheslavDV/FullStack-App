import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AuthorService {
  constructor(private prisma: PrismaService) {}

  async getAllAuthors() {
    const authors = await this.prisma.author.findMany();
    return authors;
  }

  async getPopularAuthors() {
    const authors = await this.prisma.author.findMany({
      orderBy: {
        listeners: 'desc',
      },
    });
    return authors;
  }

  async getNewAuthors() {
    const authors = this.prisma.author.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return authors;
  }

  async getAuthorById(id: number) {
    return this.prisma.author.findUnique({
      where: { id },
    });
  }
}
