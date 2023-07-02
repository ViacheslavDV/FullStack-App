import { ConfigService } from '@nestjs/config';
import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AuthDto } from './dto/auth.dto';
import { hash, verify } from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { RefreshTokenDto } from './dto/refreshToken.dto';
import { UserWithTokens } from './types/user_with_tokens.type';
import { LoginDto } from './dto/login.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private configService: ConfigService,
    private userService: UserService,
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

    return {
      user,
      ...tokens,
    };
  }

  // login
  async login(dto: LoginDto): Promise<UserWithTokens> {
    const user = await this.validateUser(dto);
    const tokens = await this.generateTokens(user.id, user.email);

    return {
      user,
      ...tokens,
    };
  }

  // refresh tokens
  async getNewTokens(dto: RefreshTokenDto) {
    const verifyToken = await this.jwt.verifyAsync(dto.refreshToken);
    if (!verifyToken) throw new UnauthorizedException('Invalid refresh token');

    const user = await this.prisma.user.findUnique({
      where: {
        id: verifyToken.id,
      },
      select: {
        isAdmin: true,
        id: true,
        email: true,
      },
    });

    const tokens = await this.generateTokens(user.id, user.email);

    return {
      user,
      ...tokens,
    };
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
