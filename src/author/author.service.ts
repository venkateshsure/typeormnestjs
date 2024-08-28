

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from './author.entity';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
  ) {}

  findAll() {
    return this.authorRepository.find({ relations: ['books'] });
  }

  findOne(id: number) {
    return this.authorRepository.findOne({ where: { id }, relations: ['books'] });
  }

  create(author: Author) {
    return this.authorRepository.save(author);
  }

  async update(id: number, updateData: Partial<Author>) {
    await this.authorRepository.update(id, updateData);
    return this.findOne(id);
  }

  async remove(id: number) {
    console.log(id,"authorId");
    return await this.authorRepository.delete(id);
  }
}
