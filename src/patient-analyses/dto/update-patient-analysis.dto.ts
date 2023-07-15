import { PartialType } from '@nestjs/mapped-types';
import { CreatePatientAnalysisDto } from './create-patient-analysis.dto';

export class UpdatePatientAnalysisDto extends PartialType(CreatePatientAnalysisDto) {}
