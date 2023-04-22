import { ConfigService } from '@nestjs/config';
import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AuthDto } from './dto/auth.dto';
import { hash, verify } from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { RefreshTokenDto } from './dto/refreshToken.dto';
import { UserWithTokens } from './types/user_with_tokens.type';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private configService: ConfigService,
  ) {}

  // register
  async register(dto: AuthDto): Promise<UserWithTokens> {
    const existUser = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (existUser) throw new BadRequestException('User already exists');

    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        name: dto.name,
        hashedPassword: await hash(dto.password),
      },
    });

    const tokens = await this.generateTokens(user.id, user.email);
    await this.updateRefTokenHash(user.id, tokens.refreshToken);

    return {
      user,
      ...tokens,
    };
  }

  // login
  async login(dto: LoginDto): Promise<UserWithTokens> {
    const user = await this.validateUser(dto);
    const tokens = await this.generateTokens(user.id, user.email);

    await this.updateRefTokenHash(user.id, tokens.refreshToken);
    return {
      user,
      ...tokens,
    };
  }

  // logout
  async logout(userId: number): Promise<string> {
    await this.prisma.user.updateMany({
      where: {
        id: userId,
        hashedRefreshToken: {
          not: null,
        },
      },
      data: {
        hashedRefreshToken: null,
      },
    });
    return 'Logout successful';
  }

  // refresh tokens
  async getNewTokens(dto: RefreshTokenDto) {
    const verifyToken = await this.jwt.verifyAsync(dto.refreshToken);
    if (!verifyToken) throw new UnauthorizedException('Invalid refresh token');

    const user = await this.prisma.user.findUnique({
      where: {
        id: verifyToken.id,
      },
    });

    const tokens = await this.generateTokens(user.id, user.email);

    return {
      user,
      ...tokens,
    };
  }

  // update refresh hash
  async updateRefTokenHash(
    userId: number,
    refreshToken: string,
  ): Promise<void> {
    await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        hashedRefreshToken: await hash(refreshToken),
      },
    });
  }

  // validate user
  private async validateUser(dto: AuthDto | LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (!user) throw new NotFoundException('User not found');

    const isValidPassword = await verify(user.hashedPassword, dto.password);

    if (!isValidPassword) throw new UnauthorizedException('Invalid password');

    return user;
  }

  // generate tokens
  private async generateTokens(userId: number, email: string) {
    const data = { id: userId, email: email };

    const accessToken = this.jwt.sign(data, {
      expiresIn: '15m',
      secret: this.configService.get<string>('JWT_SECRET'),
    });

    const refreshToken = this.jwt.sign(data, {
      expiresIn: '7d',
      secret: this.configService.get<string>('JWT_SECRET'),
    });

    return { accessToken, refreshToken };
  }
}
