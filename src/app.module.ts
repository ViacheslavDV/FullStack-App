import { PrismaService } from './prisma.service';
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { MusicModule } from './music/music.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { path } from 'app-root-path';
import { AuthorModule } from './author/author.module';
import { GenreModule } from './genre/genre.module';
import { PaginationModule } from './pagination/pagination.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: `${path}/uploads`,
      serveRoot: '/uploads',
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    MusicModule,
    AuthorModule,
    GenreModule,
    PaginationModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
