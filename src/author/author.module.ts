import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorService } from './author.service';
import { AuthorController } from './author.controller';
import {Author} from './author.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Author])],
  providers: [AuthorService],
  controllers: [AuthorController],
})
export class AuthorModule {}
