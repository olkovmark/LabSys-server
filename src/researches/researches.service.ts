import { Injectable } from '@nestjs/common';
import { dbService } from 'src/db/db.service';

@Injectable()
export class ResearchesService {
  constructor(private dbService: dbService) {}
  researchDB = this.dbService.researchDB;

  async add(analyse: any) {
    if (Array.isArray(analyse)) {
      let res = [];
      for (const iterator of analyse) {
        res.push(await this.researchDB.add(iterator));
      }

      return res;
    }
    return this.researchDB.add(analyse);
  }

  async get(id?: string) {
    return this.researchDB.get(id);
  }
  deleteAll() {}
}
