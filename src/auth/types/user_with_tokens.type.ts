import { Tokens } from "./tokens.type";

export interface UserWithTokens extends Tokens {
    user: {
        id: number,
        createdAt: Date,
        updatedAt: Date,
        email: string,
        name: string,
        hashedPassword?: string,
        hashedRefreshToken?: string,
        avatarPath?: string,
        role?: string
    }
}