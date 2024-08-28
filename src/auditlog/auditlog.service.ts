import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AuditLog } from "./auditlog.entity";
import { Repository } from "typeorm";

@Injectable()
export class AuditLogService {
  constructor(
    @InjectRepository(AuditLog)
    private readonly auditLogRepository: Repository<AuditLog>,
  ) {}

  async logAction(userId: number, action: string, entity: string, bookId: number) {
    const log = this.auditLogRepository.create({
      userId,
      action,
      entity,
      bookId,
    });
    await this.auditLogRepository.save(log);
  }

  async getLogs(filter: { userId?: number; action?: string; entity?: string }) {
    const where = {};
    if (filter.userId) where['userId'] = filter.userId;
    if (filter.action) where['action'] = filter.action;
    if (filter.entity) where['entity'] = filter.entity;
    return this.auditLogRepository.find({ where });
  }
}
