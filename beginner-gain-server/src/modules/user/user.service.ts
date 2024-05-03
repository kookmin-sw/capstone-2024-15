import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(name: string, email: string, password: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = this.userRepository.create({name, email, password: hashedPassword });
    return this.userRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOne({ where: {id} });
  }

  async update(id: number, attrs: Partial<User>): Promise<User> {
    if (attrs.password) {
      attrs.password = await bcrypt.hash(attrs.password, 10);
    }
    const user = await this.userRepository.findOne({ where: {id} });
    if (!user) throw new Error('User not found');
    Object.assign(user, attrs);
    return this.userRepository.save(user);
  }

  async remove(id: number): Promise<void> {
    const user = await this.userRepository.findOne({ where: {id} });
    if (!user) throw new Error('User not found');
    await this.userRepository.remove(user);
  }
}
