import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { IsNotEmpty } from 'class-validator';
import { Public } from './auth.guard';
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
  @Post()
  auth(@Body() userd: userDTO) {
    return this.service.signIn(userd.login, userd.password);
  }
}
