import { Injectable } from '@nestjs/common';
import { Patient } from './patient.interface';
import { dbService } from 'src/db/db.service';

@Injectable()
export class PatientsService {
  constructor(private dbService: dbService) {}

  db = this.dbService.patientDB;

  async add(obj: any) {
    try {
      return await this.db.add(obj);
    } catch (error) {
      return error;
    }
  }

  async getAll(): Promise<Patient[]> {
    return await this.db.get();
  }

  async deleteAll() {}
}
