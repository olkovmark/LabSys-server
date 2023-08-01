import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PatientAnalysesService } from './patient-analyses.service';
import { CreatePatientAnalysisDto } from './dto/create-patient-analysis.dto';
import { UpdatePatientAnalysisDto } from './dto/update-patient-analysis.dto';

@Controller('patient-analyses')
export class PatientAnalysesController {
  constructor(
    private readonly patientAnalysesService: PatientAnalysesService,
  ) {}

  @Post()
  create(@Body() createPatientAnalysisDto: CreatePatientAnalysisDto) {
    return this.patientAnalysesService.create(createPatientAnalysisDto);
  }

  @Get()
  findAll() {
    return this.patientAnalysesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.patientAnalysesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePatientAnalysisDto: UpdatePatientAnalysisDto,
  ) {
    return this.patientAnalysesService.update(+id, updatePatientAnalysisDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.patientAnalysesService.remove(+id);
  }
}
