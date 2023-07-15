import { IsNotEmpty, IsString } from 'class-validator';
import { ResearchResult } from '../research-result.interface';

export class CreateResearchResulteDto implements ResearchResult {
  _id?: string;
  @IsNotEmpty()
  patientID: string;
  @IsNotEmpty()
  researchID: string;
  @IsNotEmpty()
  patientAnalysisID: string;
  @IsString()
  value?: string;
  @IsString()
  researchDate?: string;
  @IsString()
  description?: string;
}
