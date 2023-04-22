import {
  Controller,
  Get,
  Put,
  Patch,
  UsePipes,
  ValidationPipe,
  Body,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('profile')
  @Auth()
  async getProfile(@CurrentUser('id') id: number) {
    return this.userService.getProfile(id);
  }

  @UsePipes(new ValidationPipe())
  @Auth()
  @Put('profile')
  async updateProfile(@CurrentUser('id') id: number, @Body() dto: UserDto) {
    return this.userService.updateProfile(id, dto);
  }

  @Auth()
  @Patch('profile/favorites/songId')
  async changeFavorites(
    @Param('songId') songId: number,
    @CurrentUser('id') id: number,
  ) {
    return this.userService.changeFavorites(songId, id);
  }
}
