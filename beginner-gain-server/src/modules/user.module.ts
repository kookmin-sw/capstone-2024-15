// user.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities';
import { UserService } from '../services/user.serivce.js';
import { UserController } from '../controllers/user.controller.js';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
