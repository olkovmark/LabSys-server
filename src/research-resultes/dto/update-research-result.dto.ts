import { PartialType } from '@nestjs/mapped-types';
import { CreateResearchResulteDto } from './create-research-result.dto';

export class UpdateResearchResulteDto extends PartialType(
  CreateResearchResulteDto,
) {}
