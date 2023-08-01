import { Injectable } from '@nestjs/common';
import mongoose from 'mongoose';

import { PatientDb } from './patient.db';
import { AnalysisDb } from './analysis.db';
import { ResearchDb } from './research.db';
import { UserDb } from './user.db';
import { ResearchResultDB } from './research-result.db';
import { PatientAnalysisDB } from './patient-analysis';

import { UserEntity } from './entities/user.entity';
import { DataSource } from 'typeorm';
import { AnalysisEntity } from './entities/analysis.entity';

@Injectable()
export class dbService {
  constructor(private dataSource: DataSource) {
    this.userDb = new UserDb(this.dataSource.getRepository(UserEntity));
    this.analysisDB = new AnalysisDb(
      this.dataSource.getRepository(AnalysisEntity),
    );
    console.log('update');
  }

  userDb: UserDb;
  analysisDB: AnalysisDb;

  patientDB = new PatientDb(mongoose);

  researchDB = new ResearchDb(mongoose, this);

  researchResultDB = new ResearchResultDB(mongoose);
  patientAnalysisDB = new PatientAnalysisDB(mongoose);
}
