import { Module } from '@nestjs/common';
import { dbService } from './db.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [dbService],
  exports: [dbService],
})
export class DbModule {
  constructor() {}
}
