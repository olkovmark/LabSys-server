import { Injectable } from '@nestjs/common';
import { dbService } from 'src/db/db.service';
import { User } from './user.intrface';

@Injectable()
export class UsersService {
  constructor(private db: dbService) {}
  userDB = this.db.userDB;

  async findOne(userId: string) {
    return this.userDB.get(userId);
  }

  async create(user: User) {
    return this.userDB.add(user);
  }
}
