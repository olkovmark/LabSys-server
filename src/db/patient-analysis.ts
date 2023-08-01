import { PatientAnalysis } from 'src/patient-analyses/patient-analysis.interface';
import { PatientAnalysisEntity } from './entities/patient-analysis.entity';
import { Repository } from 'typeorm';

export class PatientAnalysisDB {
  rep: Repository<PatientAnalysisEntity>;
  constructor(db: any) {
    this.rep = db.getRepository(PatientAnalysisEntity);
  }
  async add(obj: PatientAnalysis) {
    try {
      return await this.rep.save(PatientAnalysisEntity.from(obj));
    } catch (error) {
      return error;
    }
  }

  async get() {
    return await this.rep.find();
  }

  async getById(id: number) {
    return await this.rep.findOneBy({ id });
  }

  async delete(obj?: PatientAnalysis) {
    // return await this.rep.remove();
  }
}
