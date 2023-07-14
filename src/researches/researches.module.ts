import { Module } from '@nestjs/common';
import { ResearchesController } from './researches.controller';
import { ResearchesService } from './researches.service';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  controllers: [ResearchesController],
  providers: [ResearchesService],
})
export class ResearchesModule {}
