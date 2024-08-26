import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuditLogService } from './auditlog.service';
import { AuditLogController } from './auditlog.controller';
import { AuditLog } from './auditlog.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AuditLog])],
  providers: [AuditLogService],
  controllers: [AuditLogController],
  exports: [AuditLogService],  
})
export class AuditLogModule {}
