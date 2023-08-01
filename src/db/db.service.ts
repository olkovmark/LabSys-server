import { Injectable } from '@nestjs/common';

import { PatientDB } from './patient.db';
import { AnalysisDB } from './analysis.db';
import { ResearchDB } from './research.db';
import { UserDB } from './user.db';
import { ResearchResultDB } from './research-result.db';
import { PatientAnalysisDB } from './patient-analysis';

import { DataSource } from 'typeorm';

@Injectable()
export class dbService {
  constructor(private dataSource: DataSource) {
    this.userDB = new UserDB(this.dataSource);
    this.analysisDB = new AnalysisDB(this.dataSource);
    this.patientAnalysisDB = new PatientAnalysisDB(this.dataSource);
    this.patientDB = new PatientDB(this.dataSource);
    this.researchDB = new ResearchDB(this.dataSource);
    this.researchResultDB = new ResearchResultDB(this.dataSource);
  }

  userDB: UserDB;
  patientDB: PatientDB;
  patientAnalysisDB: PatientAnalysisDB;
  analysisDB: AnalysisDB;
  researchDB: ResearchDB;
  researchResultDB: ResearchResultDB;
}
