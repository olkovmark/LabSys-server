import { Mongoose } from 'mongoose';
import { Analyse } from 'src/analyses/analys.interface';
import { analyseChema } from './chemas/analyse.chema';

export class AnalyseDb {
  constructor(private mongoose: Mongoose) {}
  AnalyseModel = this.mongoose.model('Analyses', analyseChema);

  async add(obj: Analyse) {
    const analyse = new this.AnalyseModel(obj);
    try {
      return await analyse.save();
    } catch (error) {
      if (error.code == 11000)
        return { error: 'Dublicade key', name: { ...error.keyValue }.name };
      return error;
    }
  }

  async get(obj?: Analyse, projection?: Array<string>) {
    return await this.AnalyseModel.find(obj, projection);
  }

  async deleteMany(obj?: Analyse) {
    return await this.AnalyseModel.deleteMany(obj);
  }
}
