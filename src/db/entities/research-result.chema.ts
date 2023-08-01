import mongoose, { Schema } from 'mongoose';
import { ResearchResult } from 'src/research-resultes/research-result.interface';

export const researchResultesChema = new mongoose.Schema<ResearchResult>({
  researchID: { type: Schema.Types.ObjectId, ref: 'Researches' },
  patientAnalysisID: { type: Schema.Types.ObjectId, ref: 'PatientAnalyses' },
  value: { type: String, required: true },
  researchDate: { type: String, required: true },
  description: { type: String, required: true },
});
