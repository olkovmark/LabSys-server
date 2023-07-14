import { Injectable } from '@nestjs/common';
import { Patient } from './patient.interface';
import { dbService } from 'src/db/db.service';

@Injectable()
export class PatientsService {
  constructor(private dbService: dbService) {}

  patientBD = this.dbService.patientDB;

  async add(obj: any) {
    try {
      const res = await this.patientBD.get(obj, ['_id']);
      if (res.length > 0) throw { message: 'Patient was created', code: 101 };

      return await this.patientBD.add(obj);
    } catch (error) {
      return error;
    }
  }

  async getAll(): Promise<Patient[]> {
    return await this.patientBD.get();
  }

  async deleteAll() {
    return await this.patientBD.delete();
  }
}
