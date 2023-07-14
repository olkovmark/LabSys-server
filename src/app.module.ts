import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db/db.module';
import { PatientsModule } from './patients/patients.module';

import { AnalysesModule } from './analyses/analyses.module';
import { ResearchesModule } from './researches/researches.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: './config/config.env' }),
    DbModule,
    PatientsModule,
    AnalysesModule,
    ResearchesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
