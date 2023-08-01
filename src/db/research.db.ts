import { Mongoose } from 'mongoose';
import { researchChema } from './entities/research.chema';
import { Research } from 'src/researches/research.interface';
import { dbService } from './db.service';

export class ResearchDb {
  constructor(private mongoose: Mongoose, private db: dbService) {}
  model = this.mongoose.model('Researches', researchChema);

  async add(obj: any) {
    if (!obj.analysisID) return { error: 'AnalysisID error' };

    const isExistsAnalysis = await this.db.analysisDB.get(
      obj.analysisID,
      null,
      true,
    );

    if (!isExistsAnalysis)
      return { error: `Analysis with id ${obj.analysisID} not found` };

    const isExistsResearch = await this.exist(obj);
    if (isExistsResearch) return { error: `${obj.name} already create` };

    const research = new this.model(obj);
    return await research.save();
  }

  async get(obj?: Research, projection?: Array<string>) {
    return await this.model.find(obj, projection);
  }

  async getById(id: string, projection?: Array<string>) {
    return await this.model.findById(id, projection);
  }

  async exist(obj: Research) {
    return await this.model.exists(obj);
  }

  async delete(obj?: Research) {
    return await this.model.deleteMany(obj);
  }
}
