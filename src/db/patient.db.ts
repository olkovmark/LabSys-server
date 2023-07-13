import { Mongoose } from 'mongoose';
import { patientChema } from './chemas/patient.chema';
import { Patient } from 'src/patients/patient.intrface';
import { first } from 'rxjs';

export class PatientDb {
  constructor(private mongoose: Mongoose) {}
  PatientModel = this.mongoose.model('Patients', patientChema);

  async add(obj: object) {
    const patient = new this.PatientModel(obj);
    return await patient.save();
  }

  async get(obj?: Patient, projection?: Array<string>) {
    return await this.PatientModel.find(obj, projection);
  }

  async delete(obj?: Patient) {
    return await this.PatientModel.deleteMany(obj);
  }
}
