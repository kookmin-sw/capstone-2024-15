import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question, User, QuestionGroup } from '../entities';
import { QuestionService } from '../services/question.service';
import { QuestionController } from '../controllers/question.controller';
@Module({
  imports: [TypeOrmModule.forFeature([Question, User, QuestionGroup])],
  providers: [QuestionService],
  controllers: [QuestionController],
})
export class QuestionModule {}
