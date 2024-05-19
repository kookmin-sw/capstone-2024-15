import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities';
import {
  CreateUserDto,
  LoginUserDto,
  ChangePasswordDto,
} from '../dtos/user.dto.js';
import * as bcrypt from 'bcrypt';
import * as nodemailer from 'nodemailer';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async getUserById(userId: string): Promise<User | undefined> {
    return await this.userRepository.findOne({
      where: { id: userId },
      relations: ['apartment'],
    });
  }
  async createUser(createUserDto: CreateUserDto): Promise<any> {
    const existingUser = await this.userRepository.findOne({
      where: { email: createUserDto.email },
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

  async checkEmail(email: string): Promise<boolean> {
    const existingUser = await this.userRepository.findOne({
      where: { email },
    });
    return !existingUser;
  }

  async remove(id: string): Promise<void> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) throw new Error('User not found');
    await this.userRepository.remove(user);
  }

  async resetPassword(email: string): Promise<any> {
    const user = await this.userRepository.findOne({ where: { email } });
    console.log(user);
    if (!user) throw new NotFoundException('User not found');

    const tempPassword = Math.random().toString(36).slice(-8);
    const hashedPassword = await bcrypt.hash(tempPassword, 10);
    user.password = hashedPassword;
    await this.userRepository.save(user);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'beginergain1004@gmail.com',
        pass: 'herwzwswavpnngkf',
      },
    });

    const mailOptions = {
      from: 'beginergain1004@gmail.com',
      to: email,
      subject: '비기너게인 임시 비밀번호입니다',
      text: `비기너게인 임시 비밀번호: ${tempPassword}`,
    };

    await transporter.sendMail(mailOptions);

    return {
      success: true,
      message: '임시 비밀번호가 이메일로 발송되었습니다.',
    };
  }

  async changePassword(changePasswordDto: ChangePasswordDto): Promise<any> {
    const { email, oldPassword, newPassword } = changePasswordDto;
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const passwordMatch = await bcrypt.compare(oldPassword, user.password);
    if (!passwordMatch) {
      throw new UnauthorizedException('Invalid old password');
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await this.userRepository.save(user);

    return {
      success: true,
      message: 'Password has been changed successfully.',
    };
  }
}
