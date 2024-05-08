import {
  Body,
  Controller,
  Get, Param, Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateQuestionDto } from '../dtos/question.dto';
import { QuestionSevice } from '../services/question.service.js';
import { Question } from '../entities';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionSevice) {}
  @Get()
  async getAllQuestions(): Promise<Question[]> {
    return this.questionService.getAllQuestions();
  }
  @Get(':id')
  async getQuestionById(@Param('id') questionId: string) {
    return await this.questionService.getQuestionById(questionId);
  }
  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() createQuestionDto: CreateQuestionDto) {
    const question =
      await this.questionService.createQuestion(createQuestionDto);
    return { message: 'success', question };
  }
}
