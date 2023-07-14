import mongoose from 'mongoose';
import { User } from 'src/users/user.intrface';

export const userChema = new mongoose.Schema<User>({
  login: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: { type: String, required: true },
});
