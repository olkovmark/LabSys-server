import { Mongoose } from 'mongoose';
import { Analyse } from 'src/analyses/analysis.interface';
import { analyseChema } from './chemas/analysis.chema';

export class AnalysisDb {
  constructor(private mongoose: Mongoose) {}
  AnalysisModel = this.mongoose.model('Analyses', analyseChema);

  async add(obj: Analyse) {
    const analyse = new this.AnalysisModel(obj);
    try {
      return await analyse.save();
    } catch (error) {
      if (error.code == 11000)
        return { error: 'Dublicade key', name: { ...error.keyValue }.name };
      return error;
    }
  }

  async get(id?: string, projection?: Array<string>, isExists?: boolean) {
    if (id)
      try {
        if (isExists) return await this.AnalysisModel.exists({ _id: id });
        return await this.AnalysisModel.findById(id, [...projection]);
      } catch (error) {
        return { message: 'filed' };
      }

    return await this.AnalysisModel.find(null, 'name');
  }

  async deleteMany(obj?: Analyse) {
    return await this.AnalysisModel.deleteMany(obj);
  }
}
