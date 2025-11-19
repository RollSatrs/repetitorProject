import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator"
import { Education, Role } from "generated/prisma"





export class RegisterDTO{
    @IsString()
    @IsNotEmpty()
    firstName: string

    @IsString()
    @IsNotEmpty()    
    lastName: string

    @IsEmail()
    email: string

    @IsString()
    @IsNotEmpty()    
    city: string

    @IsString()
    @IsNotEmpty()           
    phone: string

    @IsString()
    @MinLength(8)
    password: string

    @IsOptional()
    @IsString()
    avatarUrl?: string


    @IsEnum(Role)
    role: Role

    @IsOptional()
    @IsEnum(Education)
    typeEducation?: Education

    @IsString()
    @IsOptional()
    educationName?: string

    @IsOptional()
    educationCourse?: string

    

    @IsOptional()
    @IsString()
    schoolName?: string

    @IsOptional()
    @IsString()
    schoolClass?: string

    @IsOptional()
    @IsString()
    languageLevel?: string
}



