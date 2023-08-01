import { Patient } from 'src/patients/patient.interface';
import { Repository } from 'typeorm';
import { PatientEntity } from './entities/patient.entity';

export class PatientDB {
  rep: Repository<PatientEntity>;
  constructor(db: any) {
    this.rep = db.getRepository(PatientEntity);
  }

  async add(user: Patient) {
    try {
      const res = await this.rep.save(PatientEntity.from(user));
      console.log(res.getNumber());
      return res;
    } catch (err) {
      return { error: err.detail };
    }
  }
  async get() {
    const res = await this.rep.find();

    res.map((v) => {
      let patient: Patient = {
        id: v.id,
        lastName: v.lastName,
        firstName: v.firstName,
        birthDay: v.birthDay,
        gender: v.gender,
      };
      return res;
    });

    return res;
  }

  async getById(id: number) {
    return this.rep.findOneBy({ id });
  }
}
