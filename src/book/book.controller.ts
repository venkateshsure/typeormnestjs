import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { BookService } from "./book.service";
import { Book } from "./book.entity";

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  findAll() {
    return this.bookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.bookService.findOne(id);
  }

  @Post()
  create(@Body() book: Book) {
    return this.bookService.create(book);
  }
  
  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateData: Partial<Book>) {
    return this.bookService.update(id, updateData);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.bookService.remove(id);
  }
}
