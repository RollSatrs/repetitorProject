import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDTO } from './dto/register.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService ){}
    async register(dto: RegisterDTO){
        const existingUser = await this.prisma.user.findUnique({
            where: {email: dto.email}
        })

        if(existingUser){
            throw new BadRequestException('Аккаунт уже существует')
        }

        const hashPassword = await bcrypt.hash(dto.password, 10)

        const user = await this.prisma.user.create({
            data:{
                firstName: dto.firstName,
                lastName: dto.lastName,
                email: dto.email,
                city: dto.city,
                phone: dto.phone,
                password: hashPassword,
                role: dto.role
                // schoo
            }
        })

        if(dto.role === "schoolchildren"){
                await this.prisma.studentSchool.create({
                data:{
                    userId: user.id!,
                    schoolName: dto.schoolName!,
                    schoolClass: dto.schoolClass!

                }
            })
        }
    }
}
