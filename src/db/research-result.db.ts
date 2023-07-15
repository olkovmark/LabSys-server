import { Mongoose } from 'mongoose';

import { researchResultesChema } from './chemas/research-result.chema';
import { ResearchResult } from 'src/research-resultes/research-result.interface';

export class ResearchResultDB {
  constructor(private mongoose: Mongoose) {}
  model = this.mongoose.model('ResearchResultes', researchResultesChema);

  async add(obj: ResearchResult) {
    const result = new this.model(obj);
    return await result.save();
  }

  async get(obj?: ResearchResult, projection?: Array<string>) {
    return await this.model.find(obj, projection);
  }
  async getByID(id: string) {
    return await this.model.findById(id);
  }

  async deleteMany(obj?: ResearchResult) {
    return await this.model.deleteMany(obj);
  }
  async deleteById(id: string) {
    return await this.model.findByIdAndDelete(id);
  }
}
