// import { Controller, Get, Post, Param, Body, Put, Delete, ParseIntPipe } from '@nestjs/common';
// import { UserService } from './user.service';
// import { User } from './user.entity';

// @Controller('user')
// export class UserController {
//   constructor(private readonly userService: UserService) {}

//   @Get()
//   async findAll(): Promise<User[]> {
//     return await this.userService.findAll();
//   }

//   @Get(':id')
//   async findOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
//     return await this.userService.findOne(id);
//   }

//   @Post()
//   async create(@Body() user: User): Promise<User> {
//     return await this.userService.create(user);
//   }

//   @Delete(':id')
//   async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
//     await this.userService.remove(id);
//   }

//   @Put(':id')
//   async update(
//     @Param('id', ParseIntPipe) id: number,
//     @Body('isActive') isActive: boolean,
//   ): Promise<User | null> {
//     return await this.userService.update(id, isActive);
//   }
// }
import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  @Post()
  create(@Body() user: User) {
    return this.userService.create(user);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateData: Partial<User>) {
    return this.userService.update(id, updateData);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.userService.remove(id);
  }
}
