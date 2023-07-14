import { Body, Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { IsEmail, IsEmpty, IsNotEmpty, isEmpty } from 'class-validator';
class userDTO {
  @IsNotEmpty({ context: 'consadasd' })
  login: string;
  @IsNotEmpty()
  password: string;
}

@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @Get()
  auth(@Body() userd: userDTO) {
    console.log(userd.password);
    return this.service.signIn(userd.login, userd.password);
  }
}
