import { Mongoose } from 'mongoose';
import { patientChema } from './entities/patient.chema';
import { Patient } from 'src/patients/patient.interface';

export class PatientDb {
  constructor(private mongoose: Mongoose) {}
  model = this.mongoose.model('Patients', patientChema);
  async add(obj: object) {
    const result = new this.model(obj);
    return await result.save();
  }

  async get(obj?: Patient, projection?: Array<string>) {
    return await this.model.find(obj, projection);
  }

  async delete(obj?: Patient) {
    this.model.exists;
    return await this.model.deleteMany(obj);
  }
  async exists(_id: string) {
    return await this.model.exists({ _id });
  }
}
