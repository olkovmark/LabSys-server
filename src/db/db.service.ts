import { Injectable } from '@nestjs/common';
import mongoose from 'mongoose';

import { PatientDb } from './patient.db';
import { AnalysisDb } from './analysis.db';
import { ResearchDb } from './research.db';
import { UserDb } from './user.db';
import { ResearchResultDB } from './research-result.db';
import { PatientAnalysisDB } from './patient-analysis';

import { DataSource } from 'typeorm';

@Injectable()
export class dbService {
  constructor(private dataSource: DataSource) {
    this.userDb = new UserDb(this.dataSource);
    this.analysisDB = new AnalysisDb(this.dataSource);
    this.researchDB = new ResearchDb(this.dataSource);
  }

  userDb: UserDb;
  analysisDB: AnalysisDb;
  researchDB: ResearchDb;

  patientDB = new PatientDb(mongoose);

  researchResultDB = new ResearchResultDB(mongoose);
  patientAnalysisDB = new PatientAnalysisDB(mongoose);
}
