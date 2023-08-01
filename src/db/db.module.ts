import { Global, Module } from '@nestjs/common';
import { dbService } from './db.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserEntity } from './entities/user.entity';
import { AnalysisEntity } from './entities/analysis.entity';
import { ResearchEntity } from './entities/research.entity';
import { ResearchResultEntity } from './entities/research-result.entity';
import { PatientEntity } from './entities/patient.entity';
import { PatientAnalysisEntity } from './entities/patient-analysis.entity';

const entities = [
  UserEntity,
  PatientEntity,
  PatientAnalysisEntity,
  AnalysisEntity,
  ResearchEntity,
  ResearchResultEntity,
];

@Global()
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE,
      ssl: true,
      autoLoadEntities: true,
      entities,
      synchronize: true,
    }),
    TypeOrmModule.forFeature(entities),
  ],
  providers: [dbService],
  exports: [dbService],
})
export class DbModule {}
