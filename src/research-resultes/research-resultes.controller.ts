import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ResearchResultesService } from './research-resultes.service';
import { CreateResearchResulteDto } from './dto/create-research-result.dto';
import { UpdateResearchResulteDto } from './dto/update-research-result.dto';

@Controller('research-resultes')
export class ResearchResultesController {
  constructor(
    private readonly researchResultesService: ResearchResultesService,
  ) {}

  @Post()
  create(@Body() createResearchResulteDto: CreateResearchResulteDto) {
    console.log();
    return this.researchResultesService.create(createResearchResulteDto);
  }

  @Get()
  findAll() {
    return this.researchResultesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.researchResultesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateResearchResulteDto: UpdateResearchResulteDto,
  ) {
    return this.researchResultesService.update(+id, updateResearchResulteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.researchResultesService.remove(+id);
  }
}
