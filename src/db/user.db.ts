import { Mongoose } from 'mongoose';

import { userChema } from './chemas/user.chema';
import { User } from 'src/users/user.intrface';

export class UserDb {
  constructor(private mongoose: Mongoose) {}
  UserModel = this.mongoose.model('Users', userChema);

  async add(user: User) {
    const userModel = new this.UserModel(user);
    try {
      const { login, fullName } = await userModel.save();

      return { login, fullName };
    } catch (error) {
      if (error.code == 11000)
        return { error: 'Dublicade key', key: { ...error.keyValue } };
      return error;
    }
  }

  async getById(id: string) {
    if (id) return await this.UserModel.findById(id);
    return await this.UserModel.find();
  }
  async get(filter: object) {
    return await this.UserModel.find(filter);
  }

  async delete(obj?: string) {
    return await this.UserModel.deleteMany();
  }
}
