import {
  Controller,
  Get,
  Req,
  Headers,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { PatientsService } from './patients.service';

@Controller('patients')
export class PatientsController {
  constructor(private patientService: PatientsService) {}

  @Post()
  create(@Body() patient: Body) {
    const res = this.patientService.add(patient);
    return res;
  }

  @Get()
  async findAll(): Promise<Object> {
    try {
      return await this.patientService.getAll();
    } catch (error) {}
  }
}
