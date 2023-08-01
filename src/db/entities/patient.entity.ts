import { Patient } from 'src/patients/patient.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Patients')
export class PatientEntity {
  constructor() {}

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  birthDay: string;
  @Column()
  gender: string;

  getNumber() {
    return this.firstName;
  }

  static from(req: Patient) {
    const entity = new PatientEntity();
    entity.firstName = req.firstName;
    entity.lastName = req.lastName;
    entity.birthDay = req.birthDay;
    entity.gender = req.gender;
    return entity;
  }
}
