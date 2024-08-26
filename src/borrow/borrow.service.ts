import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BorrowRecord } from "./borrowrecord.entity";
import { AuditLogService } from "src/auditlog/auditlog.service";

@Injectable()
export class BorrowService {
  constructor(
    @InjectRepository(BorrowRecord)
    private readonly borrowRepository: Repository<BorrowRecord>,
    private readonly auditLogService: AuditLogService,
  ) {}

  async borrowBook(userId: number, bookId: number) {
    const borrowRecord = this.borrowRepository.create({
      user: { id: userId },
      book: { id: bookId },
      borrowDate: new Date(),
    });

    await this.borrowRepository.save(borrowRecord);
    await this.auditLogService.logAction(userId, 'borrow', 'book', bookId);
    return borrowRecord;
  }

  async returnBook(borrowId: number) {
    const borrowRecord = await this.borrowRepository.findOne({ where: { id: borrowId } });
    if (borrowRecord && !borrowRecord.isReturned) {
      borrowRecord.isReturned = true;
      borrowRecord.returnDate = new Date();
      await this.borrowRepository.save(borrowRecord);
      await this.auditLogService.logAction(borrowRecord.user.id, 'return', 'book', borrowRecord.book.id);
      return borrowRecord;
    }
    return null;
  }
}
