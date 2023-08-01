import { Injectable } from '@nestjs/common';
import mongoose from 'mongoose';

import { PatientDb } from './patient.db';
import { AnalysisDb } from './analysis.db';
import { ResearchDb } from './research.db';
import { UserDb } from './user.db';
import { ResearchResultDB } from './research-result.db';
import { PatientAnalysisDB } from './patient-analysis';

import { UserEntity } from './entities/user.entity';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class dbService {
  constructor(
    @InjectRepository(UserEntity)
    usersRepository: Repository<UserEntity>,
    private dataSource: DataSource,
  ) {
    this.userDb = new UserDb(usersRepository, dataSource);
  }

  userDb: UserDb;
  patientDB = new PatientDb(mongoose);
  analysisDB = new AnalysisDb(mongoose);
  researchDB = new ResearchDb(mongoose, this);

  researchResultDB = new ResearchResultDB(mongoose);
  patientAnalysisDB = new PatientAnalysisDB(mongoose);
}
