import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Boilerplate } from './entities/boilerplate.entity';
import { MypageService } from './mypage.service';
import { MypageController } from './mypage.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Boilerplate])],
  providers: [MypageService],
  controllers: [MypageController],
})
export class MypageModule {}
