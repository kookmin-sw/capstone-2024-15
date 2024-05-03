import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities';
import {
  CreateUserDto,
  LoginUserDto,
} from '../dtos/user.dto.js';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async getUserById(userId: string): Promise<User | undefined> {
    const response = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['apartment'],
    });
    return response;
  }
  x;
  async createUser(createUserDto: CreateUserDto): Promise<any> {
    const user = this.userRepository.create(createUserDto);
    const response = await this.userRepository.save(user);
    return { success: true, id: response.id };
  }

  async loginUser(loginUserDto: LoginUserDto): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { email: loginUserDto.email, password: loginUserDto.password },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
}
