import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { AnalysesService } from './analyses.service';

@Controller('analyses')
export class AnalysesController {
  constructor(private analysesSerivce: AnalysesService) {}

  @Post()
  add(@Body() Analyse: Body) {
    return this.analysesSerivce.add(Analyse);
  }

  @Get()
  getAll() {}

  @Delete()
  deleteAll() {
    return this.analysesSerivce.deleteAll();
  }
}
