import { Module } from '@nestjs/common';
import { PatientAnalysesService } from './patient-analyses.service';
import { PatientAnalysesController } from './patient-analyses.controller';

@Module({
  controllers: [PatientAnalysesController],
  providers: [PatientAnalysesService]
})
export class PatientAnalysesModule {}
