import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { IsEmail, IsEmpty, IsNotEmpty, isEmpty } from 'class-validator';
import { AuthGuard, IS_PUBLIC_KEY, Public } from './auth.guard';
class userDTO {
  @IsNotEmpty({ context: 'consadasd' })
  login: string;
  @IsNotEmpty()
  password: string;
}

@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @Public()
  @Get()
  auth(@Body() userd: userDTO) {
    console.log(userd.password);
    return this.service.signIn(userd.login, userd.password);
  }
}
