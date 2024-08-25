import { Controller,Get, Post, Param,Body, Put,Delete} from '@nestjs/common';
import { TestService } from './test.service';
import { Test } from '@nestjs/testing';


@Controller('test')
export class TestController {
    constructor(private readonly testService: TestService) {}

  @Get()
  async findAll(): Promise<Test[]>{
    return await this.testService.findAll();
  }

  @Get(':id')
  async findOne(@Param() id:number):Promise<Test>{
    return await this.testService.findOne(id)
  }

  @Post()
  async create(@Body() todo:Test): Promise<Test>{
    return await this.testService.create(todo)
  }
  @Delete(':id')
  async delete(@Param() id:number):Promise<void>{
     await this.testService.remove(id)
  }

  /* @Put()
        async update(@Param() id:number):Promise<Test>{
        return await this.testService.update(id)
        }  
  */
}
