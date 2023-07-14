import { HttpStatus, Injectable } from '@nestjs/common';
import { dbService } from 'src/db/db.service';

@Injectable()
export class AnalysesService {
  constructor(private dbService: dbService) {}
  analyseDB = this.dbService.analyseDB;

  async add(analyse: any) {
    if (Array.isArray(analyse)) {
      let res = [];
      for (const iterator of analyse) {
        res.push(await this.analyseDB.add(iterator));
      }

      return res;
    }
    return this.analyseDB.add(analyse);
  }

  deleteAll() {
    return this.analyseDB.deleteMany();
  }
}
