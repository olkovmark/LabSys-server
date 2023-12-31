import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db/db.module';
import { PatientsModule } from './patients/patients.module';

import { AnalysesModule } from './analyses/analyses.module';
import { ResearchesModule } from './researches/researches.module';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ResearchResultsModule } from './research-results/research-results.module';
import { PatientAnalysesModule } from './patient-analyses/patient-analyses.module';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DbModule,
    PatientsModule,
    AnalysesModule,
    ResearchesModule,
    AuthModule,
    UsersModule,
    ResearchResultsModule,
    PatientAnalysesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('');
  }
}
