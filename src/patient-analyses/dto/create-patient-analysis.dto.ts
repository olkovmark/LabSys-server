import { IsString } from 'class-validator';
import { PatientAnalysis } from '../patient-analysis.interface';

export class CreatePatientAnalysisDto implements PatientAnalysis {
  @IsString()
  patientID: String;
  @IsString()
  analysisID: String;
  @IsString()
  date: String;
}
