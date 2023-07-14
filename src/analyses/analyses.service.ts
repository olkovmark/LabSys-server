import { HttpStatus, Injectable } from '@nestjs/common';
import { dbService } from 'src/db/db.service';

@Injectable()
export class AnalysesService {
  constructor(private dbService: dbService) {}
  analysisDB = this.dbService.analysisDB;

  async add(analysis: any) {
    if (Array.isArray(analysis)) {
      let res = [];
      for (const iterator of analysis) {
        res.push(await this.analysisDB.add(iterator));
      }

      return res;
    }
    return this.analysisDB.add(analysis);
  }

  async get(id?: string) {
    return this.analysisDB.get(id);
  }

  deleteAll() {
    return this.analysisDB.deleteMany();
  }
}
