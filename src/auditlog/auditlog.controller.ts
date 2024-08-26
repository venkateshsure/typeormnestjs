import { Controller, Get, Query } from '@nestjs/common';
import { AuditLogService } from './auditlog.service';

@Controller('audit-logs')
export class AuditLogController {
  constructor(private readonly auditLogService: AuditLogService) {}

  @Get()
  getLogs(
    @Query('userId') userId?: number,
    @Query('action') action?: string,
    @Query('entity') entity?: string,
  ) {
    return this.auditLogService.getLogs({ userId, action, entity });
  }
}
