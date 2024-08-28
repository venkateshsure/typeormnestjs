import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findAll() {
    return this.userRepository.find({ relations: ['borrows'] });
  }

  findOne(id: number) {
    return this.userRepository.findOne({ where: { id }, relations: ['borrows'] });
  }

  create(user: User) {
    return this.userRepository.save(user);
  }

  async update(id: number, updateData: Partial<User>) {
    await this.userRepository.update(id, updateData);
    return this.findOne(id);
  }

  async remove(id: number) {
    return await this.userRepository.delete(id);
  }
}
