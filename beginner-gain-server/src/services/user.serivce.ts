import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
  ConflictException
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities';
import { CreateUserDto, LoginUserDto } from '../dtos/user.dto.js';
import * as bcrypt from 'bcrypt';

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
  async createUser(createUserDto: CreateUserDto): Promise<any> {

    const existingUser = await this.userRepository.findOne({
      where: { email: createUserDto.email }
    });

    if (existingUser) {
      throw new ConflictException('This email is already registered');
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const user = this.userRepository.create({
      name: createUserDto.name,
      password: hashedPassword,
      email: createUserDto.email,
    });
    const response = await this.userRepository.save(user);
    return { success: true, id: response.id };
  }

  async loginUser(loginUserDto: LoginUserDto): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { email: loginUserDto.email },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const passwordMatch = await bcrypt.compare(
      loginUserDto.password,
      user.password,
    );
    if (!passwordMatch) {
      throw new UnauthorizedException('Invalid password');
    }

    return user;
  }

  async remove(id: string): Promise<void> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) throw new Error('User not found');
    await this.userRepository.remove(user);
  }
}
