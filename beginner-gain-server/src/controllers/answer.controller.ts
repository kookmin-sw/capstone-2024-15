import {
  Body,
  Controller,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AnswerService } from '../services/answer.service';
import { CreateAnswerDto, UpdateNextQuestionDto } from '../dtos/answer.dto';

@Controller('answer')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() createAnswerDto: CreateAnswerDto) {
    const question = await this.answerService.createAnswer(createAnswerDto);
    return { message: 'success', question };
  }

  @Patch('/next')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateNextQuestion(
    @Body() updateNextQuestionDto: UpdateNextQuestionDto,
  ) {
    const answer = await this.answerService.updateNextQuestion(
      updateNextQuestionDto,
    );
    return { message: 'success', answer };
  }
}
