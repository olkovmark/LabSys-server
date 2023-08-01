import { IsNotEmpty, IsString } from 'class-validator';
import { ResearchResult } from '../research-result.interface';

export class CreateResearchResultDto implements ResearchResult {
  _id?: number;
  @IsNotEmpty()
  patientID: string;
  @IsNotEmpty()
  researchID: number;
  @IsNotEmpty()
  patientAnalysisID: number;
  @IsString()
  value?: string;
  @IsString()
  researchDate?: string;
  @IsString()
  description?: string;
}
