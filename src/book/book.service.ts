import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Book } from "./book.entity";

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  findAll() {
    return this.bookRepository.find({ relations: ['author', 'borrows'] });
  }

  findOne(id: number) {
    return this.bookRepository.findOne({ where: { id }, relations: ['author', 'borrows'] });
  }

  create(book: Book) {
    return this.bookRepository.save(book);
  }

  async update(id: number, updateData: Partial<Book>) {
    await this.bookRepository.update(id, updateData);
    return this.findOne(id);
  }

  async remove(id: number) {
    console.log(id,"bookid")
    return await this.bookRepository.delete(id);
  }
}