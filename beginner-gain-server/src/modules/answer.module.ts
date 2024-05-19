// answer.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Answer } from '../entities';
import { AnswerService } from '../services/answer.service';
import { AnswerController } from '../controllers/answer.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Answer])],
  providers: [AnswerService],
  controllers: [AnswerController],
})
export class AnswerModule {}
