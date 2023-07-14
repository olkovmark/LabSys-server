import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import mongoose from 'mongoose';

import { PatientDb } from './patient.db';
import { AnalyseDb } from './analyse.db';

@Injectable()
export class dbService {
  constructor(private configService: ConfigService) {
    this.connect();
  }

  async connect() {
    await mongoose.connect(this.configService.get('DATABASE'));
    console.log('MongoConnect');
  }

  patientDB = new PatientDb(mongoose);
  analyseDB = new AnalyseDb(mongoose);
}
