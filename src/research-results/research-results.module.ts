import { Module } from '@nestjs/common';
import { ResearchResultsService } from './research-results.service';
import { ResearchResultsController } from './research-results.controller';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  controllers: [ResearchResultsController],
  providers: [ResearchResultsService],
})
export class ResearchResultsModule {}
