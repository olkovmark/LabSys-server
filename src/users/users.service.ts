import { Injectable } from '@nestjs/common';
import { dbService } from 'src/db/db.service';
import { UserI } from './user.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private db: dbService) {}
  userDB = this.db.userDb;

  async find(filters?: object): Promise<UserI[]> {
    return await this.userDB.get(filters);
  }

  async findByLogin(login: string): Promise<UserI> {
    const user = await this.userDB.get({ login: login });
    return user[0];
  }

  async findById(userId: string) {
    return this.userDB.getById(userId);
  }

  async create(user: UserI) {
    user.password = await bcrypt.hash(user.password, 2);
    return this.userDB.add(user);
  }
}
