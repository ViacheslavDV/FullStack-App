import { Tokens } from './tokens.type';
import { Song } from '@prisma/client';

export interface UserWithTokens extends Tokens {
  user: {
    id: number;
    createdAt: Date;
    updatedAt: Date;

    email: string;
    name: string;
    hashedPassword?: string;

    isAdmin: boolean;
    avatarPath?: string;
    favorites?: Song | null;
  };
}
