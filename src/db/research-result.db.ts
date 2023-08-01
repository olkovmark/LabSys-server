import { Mongoose } from 'mongoose';

import { ResearchResultEntity } from './entities/research-result.entity';

import { Repository } from 'typeorm';
import { ResearchResult } from 'src/research-results/research-result.interface';

export class ResearchResultDB {
  rep: Repository<ResearchResultEntity>;
  constructor(db: any) {
    this.rep = db.getRepository(ResearchResultEntity);
  }

  async add(user: ResearchResult) {
    try {
      return await this.rep.save(ResearchResultEntity.from(user));
    } catch (err) {
      return { error: err.detail };
    }
  }

  async getById(id: number) {
    return this.rep.findOneBy({ id });
  }

  async get() {
    return this.rep.find();
  }

  async delete(obj?: string) {}
}
