import { Controller, Get, Post, Body, Delete } from '@nestjs/common';
import { PatientsService } from './patients.service';

@Controller('patients')
export class PatientsController {
  constructor(private patientService: PatientsService) {}

  @Post()
  create(@Body() patient: Body) {
    return this.patientService.add(patient);
  }

  @Get()
  async findAll(): Promise<Object> {
    try {
      return await this.patientService.getAll();
    } catch (error) {}
  }

  @Delete()
  async deleteAll() {
    return await this.patientService.deleteAll();
  }
}
