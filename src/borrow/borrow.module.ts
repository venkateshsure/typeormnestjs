import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BorrowService } from './borrow.service';
import { BorrowController } from './borrow.controller';
import { BorrowRecord } from './borrowrecord.entity';
import { AuditLogModule } from '../auditlog/auditlog.module';
import { AuditLogService } from 'src/auditlog/auditlog.service';

@Module({
  imports: [TypeOrmModule.forFeature([BorrowRecord]), AuditLogModule],
  providers: [BorrowService],
  controllers: [BorrowController],
})
export class BorrowModule {}
