import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.userService.findByLogin(username);

    if (!user) throw new UnauthorizedException();

    if (!(await bcrypt.compare(pass, user.password))) {
      throw new UnauthorizedException();
    }

    const { login, fullName } = user;

    return {
      login,
      fullName,
      acces_token: await this.jwtService.signAsync({ login, fullName }),
    };
  }
}
