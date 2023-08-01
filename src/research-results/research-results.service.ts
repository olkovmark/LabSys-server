import { Injectable } from '@nestjs/common';
import { CreateResearchResultDto } from './dto/create-research-result.dto';
import { UpdateResearchResultDto } from './dto/update-research-result.dto';
import { dbService } from 'src/db/db.service';

@Injectable()
export class ResearchResultsService {
  constructor(private globalDB: dbService) {}

  db = this.globalDB.researchResultDB;

  create(dto: CreateResearchResultDto) {
    return this.db.add(dto);
  }

  findAll() {
    return this.db.get();
  }

  findOne(id: string) {
    // return this.db.getByID(id);
  }

  update(id: number, updateResearchResultDto: UpdateResearchResultDto) {
    return `This action updates a #${id} researchResult`;
  }

  remove(id: number) {
    return `This action removes a #${id} researchResult`;
  }
}
