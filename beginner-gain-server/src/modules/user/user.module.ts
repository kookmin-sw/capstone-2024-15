import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller'
import { User } from './user.model';
import { typeOrmConfig } from 'src/configs/typeorm.config';

@Module({
  imports: [TypeOrmModule.forFeature([User]),
            TypeOrmModule.forRoot(typeOrmConfig)],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
