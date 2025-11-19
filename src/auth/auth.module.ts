import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Module({
  imports:[
    PassportModule,
    JwtModule.registerAsync({
      useFactory: async(configServices:ConfigService)=>({
        secret: configServices.get<string>('JWT_SECRET'),
        signOptions: {expiresIn: '7d'}
      })
    })
  ],
  providers: [AuthService, Jwt],
  controllers: [AuthController]
})
export class AuthModule {}
