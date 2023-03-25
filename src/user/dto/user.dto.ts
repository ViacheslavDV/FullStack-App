import { IsEmail, IsOptional, IsString } from "class-validator";


export class UserDto {
    @IsEmail()
    email: string

    @IsString()
    name: string

    @IsOptional()
    @IsString()
    password: string

    @IsOptional()
    @IsString()
    avatarPath: string
}