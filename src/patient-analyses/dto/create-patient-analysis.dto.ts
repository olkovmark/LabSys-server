import { IsString } from 'class-validator';
import { PatientAnalysis } from '../patient-analysis.interface';

export class CreatePatientAnalysisDto implements PatientAnalysis {
  @IsString()
  patientID: number;
  @IsString()
  analysisID: number;
  @IsString()
  date: string;
}
