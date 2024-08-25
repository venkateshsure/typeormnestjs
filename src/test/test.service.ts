import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Test } from '@nestjs/testing';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(Test)
    private testRepository: Repository<Test>,
  ) {}

  async findAll(): Promise<Test[]> {
    return await this.testRepository.find();
  }

  async findOne(id: number): Promise<Test> {
    return await this.testRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
     await this.testRepository.delete(id);
  }
  async create(todo:Test):Promise<Test>{
    return this.testRepository.create(todo)
  }
}
