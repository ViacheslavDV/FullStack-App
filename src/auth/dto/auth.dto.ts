import { IsString, IsEmail, MinLength } from "class-validator";


export class AuthDto {
   
    @IsEmail()
    email: string

    @MinLength(3, {
        message: "Name must be at least 3 characters long"
    })
    @IsString()
    name: string

    @MinLength(6 , {
        message: "Password must be at least 6 characters long"
    })
    @IsString()
    password: string
}