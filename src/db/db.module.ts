import { Global, Module } from '@nestjs/common';
import { dbService } from './db.service';
import { ConfigModule } from '@nestjs/config';
@Global()
@Module({
  imports: [ConfigModule],
  providers: [dbService],
  exports: [dbService],
})
export class DbModule {
  constructor() {}
}
