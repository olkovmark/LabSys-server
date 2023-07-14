import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AnalysesService } from './analyses.service';

@Controller('analyses')
export class AnalysesController {
  constructor(private service: AnalysesService) {}

  @Post()
  add(@Body() Analyse: Body) {
    return this.service.add(Analyse);
  }

  @Get()
  getAll() {
    return this.service.get();
  }
  @Get(':id')
  get(@Param('id') id: string) {
    return this.service.get();
  }

  @Delete()
  deleteAll() {
    return this.service.deleteAll();
  }
}
