import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ResearchesService } from './researches.service';

@Controller('researches')
export class ResearchesController {
  constructor(private service: ResearchesService) {}

  @Post()
  add(@Body() Research: Body) {
    return this.service.add(Research);
  }

  @Get()
  getAll() {
    return this.service.get();
  }
  @Get(':id')
  get(@Param('id') id: number) {
    return this.service.get(id);
  }

  @Delete()
  deleteAll() {
    return this.service.deleteAll();
  }
}
