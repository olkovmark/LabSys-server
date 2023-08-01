import { Global, Module } from '@nestjs/common';
import { dbService } from './db.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserEntity } from './entities/user.entity';
import { AnalysisEntity } from './entities/analysis.entity';
import { ResearchEntity } from './entities/research.entity';

const entities = [UserEntity, AnalysisEntity, ResearchEntity];

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
