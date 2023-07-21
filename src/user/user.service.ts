import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  // get user profile
  async getProfile(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        favorites: true,
      },
    });

    if (!user) throw new BadRequestException('User not found');

    return user;
  }

  // update user profile
  async updateProfile(id: number, dto: UserDto) {
    const isSameUser = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (isSameUser && id !== isSameUser.id)
      throw new BadRequestException('Email already in use');

    const user = await this.getProfile(id);

    return this.prisma.user.update({
      where: {
        id,
      },
      data: {
        email: dto.email,
        name: dto.name,
        avatarPath: dto.avatarPath,
      },
    });
  }

  // change favorite songs
  async changeFavorites(songId: number, id: number) {
    const user = await this.getProfile(id);

    if (!user) throw new BadRequestException('User not found');

    const isSongExists = user.favorites.some((song) => song.id === songId);

    await this.prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        favorites: {
          [isSongExists ? 'disconnect' : 'connect']: {
            id: songId,
          },
        },
      },
    });

    return 'Update was successful';
  }
}
