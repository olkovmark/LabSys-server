import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import mongoose from 'mongoose';

import { PatientDb } from './patient.db';
import { AnalysisDb } from './analysis.db';
import { ResearchDb } from './research.db';
import { UserDb } from './user.db';
import { ResearchResultDB } from './research-result.db';
import { PatientAnalysisDB } from './patient-analysis';

@Injectable()
export class dbService {
  constructor(private configService: ConfigService) {
    this.connect();
  }

  async connect() {
    await mongoose.connect(process.env.DATABASE);
    console.log('MongoConnect');
  }

  patientDB = new PatientDb(mongoose);
  analysisDB = new AnalysisDb(mongoose);
  researchDB = new ResearchDb(mongoose, this);
  userDB = new UserDb(mongoose);
  researchResultDB = new ResearchResultDB(mongoose);
  patientAnalysisDB = new PatientAnalysisDB(mongoose);
}
