import { Injectable } from '@nestjs/common';
import { CreatePatientAnalysisDto } from './dto/create-patient-analysis.dto';
import { UpdatePatientAnalysisDto } from './dto/update-patient-analysis.dto';
import { dbService } from 'src/db/db.service';

@Injectable()
export class PatientAnalysesService {
  constructor(private globalDB: dbService) {}

  db = this.globalDB.patientAnalysisDB;
  create(dto: CreatePatientAnalysisDto) {
    return this.db.add(dto);
  }
  findAll() {
    return this.db.get();
  }

  findOne(id: number) {
    return this.db.getById(id);
  }

  update(id: number, dto: UpdatePatientAnalysisDto) {
    return `This action updates a #${id} patientAnalysis`;
  }

  remove(id: number) {
    return `This action removes a #${id} patientAnalysis`;
  }
}
