import { Module } from '@nestjs/common';
import { PatientsController } from './patients.controller';
import { PatientsService } from './patients.service';
import { ConfigModule } from '@nestjs/config';
import { dbService } from 'src/db/db.service';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [ConfigModule, DbModule],
  controllers: [PatientsController],
  providers: [PatientsService],
})
export class PatientsModule {
  constructor() {}
}
