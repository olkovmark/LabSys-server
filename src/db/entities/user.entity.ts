import { UserI } from 'src/users/user.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', unique: true })
  login: string;
  @Column({ type: 'varchar' })
  password: string;
  @Column({ type: 'varchar' })
  fullName: string;

  static from(user: UserI) {
    const userEntity = new UserEntity();
    userEntity.fullName = user.fullName;
    userEntity.login = user.login;
    userEntity.password = user.password;

    return userEntity;
  }
}
