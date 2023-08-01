import { UserI } from 'src/users/user.interface';
import { UserEntity } from './entities/user.entity';

export class UserDb {
  rep: any;
  constructor(db: any) {
    this.rep = db.getRepository(UserEntity);
  }

  async add(user: UserI) {
    try {
      const { password, ...res } = await this.rep.save(UserEntity.from(user));
      return res;
    } catch (err) {
      return { error: err.detail };
    }
  }

  async getById(id: number) {
    return this.rep.findOneBy({ id });
  }

  async getByLogin(login: string) {
    return this.rep.findOneBy({ login });
  }

  async get(filter: any) {
    return this.rep.find({ select: { id: true, login: true, fullName: true } });
  }

  async delete(obj?: string) {}
}
