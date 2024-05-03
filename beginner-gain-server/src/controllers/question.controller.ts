import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateQuestionDto } from '../dtos/question.dto';
import { QuestionSevice } from '../services/question.service.js';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionSevice) {}
  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() createQuestionDto: CreateQuestionDto) {
    const question =
      await this.questionService.createQuestion(createQuestionDto);
    return { message: 'success', question };
  }

  @Get()
  async getQuestion() {}
}
