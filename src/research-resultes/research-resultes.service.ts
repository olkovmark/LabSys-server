import { Injectable } from '@nestjs/common';
import { CreateResearchResulteDto } from './dto/create-research-result.dto';
import { UpdateResearchResulteDto } from './dto/update-research-result.dto';
import { dbService } from 'src/db/db.service';

@Injectable()
export class ResearchResultesService {
  constructor(private globalDB: dbService) {}

  db = this.globalDB.researchResultDB;

  create(dto: CreateResearchResulteDto) {
    return this.db.add(dto);
  }

  findAll() {
    return this.db.get();
  }

  findOne(id: string) {
    return this.db.getByID(id);
  }

  update(id: number, updateResearchResulteDto: UpdateResearchResulteDto) {
    return `This action updates a #${id} researchResulte`;
  }

  remove(id: number) {
    return `This action removes a #${id} researchResulte`;
  }
}
