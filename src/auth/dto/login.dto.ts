import { IsEmail, IsString, MinLength } from "class-validator";

export class loginDTO{

    @IsEmail()
    email: string

    @IsString()
    @MinLength(8)
    password: string 
       
}