import { Mongoose } from 'mongoose';

import { PatientAnalysis } from 'src/patient-analyses/patient-analysis.interface';
import { PatientAnalysisChema } from './chemas/patient-analysis.chema';

export class PatientAnalysisDB {
  constructor(private mongoose: Mongoose) {}
  model = this.mongoose.model('PatientAnalyses', PatientAnalysisChema);

  async add(obj: PatientAnalysis) {
    const result = new this.model(obj);
    return await result.save();
  }

  async get(obj?: PatientAnalysis, projection?: Array<string>) {
    return await this.model.find(obj, projection);
  }
  async getByID(id: string) {
    return await this.model.findById(id);
  }

  async deleteMany(obj?: PatientAnalysis) {
    return await this.model.deleteMany(obj);
  }
  async deleteById(id: string) {
    return await this.model.findByIdAndDelete(id);
  }
}
