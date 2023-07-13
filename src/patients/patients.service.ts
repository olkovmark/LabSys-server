import { Injectable } from '@nestjs/common';
import { Patient } from './patient.intrface';
import { dbService } from 'src/db/db.service';

@Injectable()
export class PatientsService {
  constructor(private dbService: dbService) {}

  async add(obj: any) {
    try {
      return await this.dbService.post(obj);
    } catch (error) {
      return error.message;
    }
  }

  async getAll(): Promise<Patient[]> {
    return await this.dbService.get();
  }
}
