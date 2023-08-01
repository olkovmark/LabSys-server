import { Analysis } from 'src/analyses/analysis.interface';
import { AnalysisEntity } from './entities/analysis.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export class AnalysisDb {
  constructor(private rep: Repository<AnalysisEntity>) {}

  async add(analysis: Analysis) {
    try {
      return await this.rep.save(AnalysisEntity.from(analysis));
    } catch (err) {
      return { error: err.detail };
    }
  }

  async getByID(id: number) {
    return this.rep.findOneBy({ id });
  }

  async get(id?: string) {
    try {
      return await this.rep.find();
    } catch (error) {
      return { message: 'filed' };
    }
  }

  async deleteMany(analysis?: Analysis) {
    return await this.rep.delete({});
  }
}
