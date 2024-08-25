import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TestModule } from './test/test.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Test } from '@nestjs/testing';

@Module({
  imports: [TestModule,TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'test',
    entities: [Test],
    synchronize: true,
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
