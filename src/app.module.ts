import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TestModule } from './test/test.module';
import { TypeOrmModule } from '@nestjs/typeorm';


import { UserModule } from './user/user.module';
import { BookModule } from './book/book.module';
import { BorrowModule } from './borrow/borrow.module';
import {AuditLogModule} from './auditlog/auditlog.module'
import { AuthorModule } from './author/author.module';


@Module({
  imports: [TestModule,UserModule,TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'testDB',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }), AuthorModule, AuditLogModule, BorrowModule, BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
