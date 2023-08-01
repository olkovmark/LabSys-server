import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { CreateResearchResultDto } from './dto/create-research-result.dto';
import { UpdateResearchResultDto } from './dto/update-research-result.dto';
import { ResearchResultsService } from './research-results.service';

@Controller('research-results')
export class ResearchResultsController {
  constructor(
    private readonly researchResultsService: ResearchResultsService,
  ) {}

  @Post()
  create(@Body() createResearchResultDto: CreateResearchResultDto) {
    console.log();
    return this.researchResultsService.create(createResearchResultDto);
  }

  @Get()
  findAll() {
    return this.researchResultsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.researchResultsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateResearchResultDto: UpdateResearchResultDto,
  ) {
    return this.researchResultsService.update(+id, updateResearchResultDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.researchResultsService.remove(+id);
  }
}
