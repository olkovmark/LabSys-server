import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.userService.findByLogin(username);

    if (!user) throw new UnauthorizedException();

    if (!(await bcrypt.compare(pass, user.password))) {
      throw new UnauthorizedException();
    }

    const { login, fullName } = user;
    return { login, fullName };
  }
}
