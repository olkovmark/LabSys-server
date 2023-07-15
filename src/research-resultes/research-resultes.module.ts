import { Module } from '@nestjs/common';
import { ResearchResultesService } from './research-resultes.service';
import { ResearchResultesController } from './research-resultes.controller';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  controllers: [ResearchResultesController],
  providers: [ResearchResultesService],
})
export class ResearchResultesModule {}
