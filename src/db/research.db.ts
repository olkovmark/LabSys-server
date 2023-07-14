import { Mongoose } from 'mongoose';
import { researchChema } from './chemas/research.chema';
import { Research } from 'src/researches/research.interface';

export class ResearchDb {
  constructor(private mongoose: Mongoose) {}
  ResearchModel = this.mongoose.model('Researches', researchChema);

  async add(obj: object) {
    const research = new this.ResearchModel(obj);
    return await research.save();
  }

  async get(id?: string) {
    if (id) return await this.ResearchModel.findById(id);
    return await this.ResearchModel.find();
  }

  async delete(obj?: Research) {
    return await this.ResearchModel.deleteMany(obj);
  }
}
