import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { v4 as uuid } from 'uuid';
import { CreateUserInput } from './create-user.input';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getUser(id: string): Promise<User> {
    return this.userRepository.findOneByOrFail({ id });
  }

  async getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async createUser(createUserInput: CreateUserInput): Promise<User> {
    const user = this.userRepository.create({
      id: uuid(),
      ...createUserInput,
    });

    return this.userRepository.save(user);
  }

  async getManyUsers(userIds: string[]): Promise<User[]> {
    return this.userRepository.find();
  }
}
