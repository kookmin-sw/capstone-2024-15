import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {CreateQuestionDto, CreateQuestionGroupDto} from '../dtos/question.dto';
import { QuestionService } from '../services/question.service.js';
import { Question } from '../entities';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}
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

  @Post('group')
  @UsePipes(new ValidationPipe({ transform: true }))
  async createQuestionGroup(
    @Body() createQuestionGroupDto: CreateQuestionGroupDto,
  ) {
    const questionGroup = await this.questionService.createQuestionGroup(
      createQuestionGroupDto,
    );
    return { message: 'success', questionGroup };
  }

  @Get('group/:id')
  async getQuestionGroupById(@Param('id') groupId: string) {
    return await this.questionService.getQuestionGroupById(groupId);
  }
}
