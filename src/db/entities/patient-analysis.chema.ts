import mongoose, { Schema } from 'mongoose';
import { PatientAnalysis } from 'src/patient-analyses/patient-analysis.interface';
import { ResearchResult } from 'src/research-resultes/research-result.interface';

export const PatientAnalysisChema = new mongoose.Schema<PatientAnalysis>({
  patientID: { type: Schema.Types.ObjectId, ref: 'Researches' },
  analysisID: { type: Schema.Types.ObjectId, ref: 'PatientAnalyses' },
  date: { type: String, required: true },
});
