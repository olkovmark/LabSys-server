import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import mongoose from 'mongoose';
import { patientChema } from './chemas/patient.chema';
import { error } from 'console';
import { PatientDb } from './patient.db';

@Injectable()
export class dbService {
  constructor(private configService: ConfigService) {
    this.connect();
  }
  patientDB = new PatientDb(mongoose);

  async connect() {
    await mongoose.connect(this.configService.get('DATABASE'));
    console.log('MongoConnect');
  }
}
