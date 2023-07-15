import { Injectable } from '@nestjs/common';
import { dbService } from 'src/db/db.service';

@Injectable()
export class ResearchesService {
  constructor(private dbService: dbService) {}
  researchDB = this.dbService.researchDB;

  async add(research: any) {
    if (Array.isArray(research)) {
      let res = [];
      for (const iterator of research) {
        res.push(await this.researchDB.add(iterator));
      }

      return res;
    }
    return this.researchDB.add(research);
  }

  async get(id?: string) {
    if (id) return this.researchDB.getById(id);
    return this.researchDB.get();
  }
  deleteAll() {}
}
