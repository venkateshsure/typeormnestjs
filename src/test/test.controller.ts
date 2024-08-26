import { Controller,Get, Post, Param,Body, Put,Delete,ParseIntPipe} from '@nestjs/common';
import { TestService } from './test.service';
import { Test } from './test.entity'

@Controller('test')
export class TestController {
    constructor(private readonly testService: TestService) {}

  @Get()
  async findAll(): Promise<Test[]>{
    return await this.testService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id:number):Promise<Test>{
    return await this.testService.findOne(id)
  }

  @Post()
  async create(@Body() todo:Test): Promise<Test>{
    return await this.testService.create(todo)
  }
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id:number):Promise<void>{
     await this.testService.remove(id)
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number,@Body('isActive') isActive: boolean): Promise<Test | null> {
    return await this.testService.update(id, isActive);
  }
}
