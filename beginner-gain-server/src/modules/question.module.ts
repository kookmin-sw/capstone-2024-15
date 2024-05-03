import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question, User } from '../entities';
import { QuestionSevice } from '../services/question.service';
import { QuestionController } from '../controllers/question.controller';
@Module({
  imports: [TypeOrmModule.forFeature([Question, User])],
  providers: [QuestionSevice],
  controllers: [QuestionController],
})
export class QuestionModule {}
