import { getJwtConfig } from './../config/jwt.config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from 'src/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { AccTokenStrategy } from './strategies/acc-token.strategy';
import { RefTokenStrategy } from './strategies/ref-token.strategy';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService, PrismaService, JwtStrategy, AccTokenStrategy, RefTokenStrategy
  ],
  imports: [
    ConfigModule.forRoot(),
    JwtModule.registerAsync({
      imports: [ConfigModule.forRoot()],
      inject: [ConfigService],
      useFactory: getJwtConfig
    })
  ]
})
export class AuthModule {}
