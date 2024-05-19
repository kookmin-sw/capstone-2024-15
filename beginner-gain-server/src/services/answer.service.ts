import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Answer } from '../entities';
import { CreateAnswerDto, UpdateNextQuestionDto } from '../dtos/answer.dto';

@Injectable()
export class AnswerService {
  constructor(
    @InjectRepository(Answer)
    private answerRepository: Repository<Answer>,
  ) {}

  async createAnswer(createAnswerDto: CreateAnswerDto): Promise<Answer> {
    const answer = this.answerRepository.create(createAnswerDto);
    return await this.answerRepository.save(answer);
  }

  async updateNextQuestion(
    updateNextQuestionDto: UpdateNextQuestionDto,
  ): Promise<Answer> {
    const answer = await this.answerRepository.findOne({
      where: { id: updateNextQuestionDto.answer },
    });

    if (!answer) {
      // 예외 처리: 해당 ID에 해당하는 답변이 없음
      throw new Error('Answer not found');
    }

    // 다음 질문 ID를 업데이트
    answer.nextQuestionId = updateNextQuestionDto.question;

    // 업데이트된 답변을 저장하고 반환
    return await this.answerRepository.save(answer);
  }
}
