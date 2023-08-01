import { ResearchEntity } from './entities/research.entity';
import { Research } from 'src/researches/research.interface';
import { Repository } from 'typeorm';

export class ResearchDB {
  rep: Repository<ResearchEntity>;
  constructor(db: any) {
    this.rep = db.getRepository(ResearchEntity);
  }
  async add(obj: Research) {
    try {
      return await this.rep.save(ResearchEntity.from(obj));
    } catch (error) {
      return error;
    }
  }

  async get(obj?: Research) {
    return await this.rep.find({ where: obj });
  }

  async getById(id: number) {
    return await this.rep.findOneBy({ id });
  }

  async delete(obj?: Research) {
    return await this.rep.remove(ResearchEntity.from(obj));
  }
}
