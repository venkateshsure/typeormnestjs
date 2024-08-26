import { Controller, Post, Param, Body, ParseIntPipe } from '@nestjs/common';
import { BorrowService } from './borrow.service';

@Controller('borrow')
export class BorrowController {
  constructor(private readonly borrowService: BorrowService) {}

  @Post('borrow')
  borrowBook(@Body('userId', ParseIntPipe) userId: number, @Body('bookId', ParseIntPipe) bookId: number) {
    return this.borrowService.borrowBook(userId, bookId);
  }

  @Post('return/:id')
  returnBook(@Param('id', ParseIntPipe) borrowId: number,@Body('userId', ParseIntPipe) userId: number, 
  @Body('bookId', ParseIntPipe) bookId: number) {
    return this.borrowService.returnBook(borrowId,userId,bookId); 
  }
}
