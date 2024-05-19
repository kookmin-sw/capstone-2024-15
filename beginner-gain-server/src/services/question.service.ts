import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateQuestionDto,
  CreateQuestionGroupDto,
} from '../dtos/question.dto';
import { User, Question, QuestionGroup } from '../entities';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(QuestionGroup)
    private questionGroupRepository: Repository<QuestionGroup>,
  ) {}

  async createQuestion(
    createQuestionDto: CreateQuestionDto,
  ): Promise<Question> {
    const question = this.questionRepository.create(createQuestionDto);
    return await this.questionRepository.save(question);
  }

  async getAllQuestions(): Promise<Question[]> {
    return await this.questionRepository.find();
  }

  async getQuestionById(questionId: string): Promise<Question> {
    return await this.questionRepository.findOne({
      where: { id: questionId },
      relations: ['answers'],
    });
  }
  async createQuestionGroup(
    createQuestionGroupDto: CreateQuestionGroupDto,
  ): Promise<QuestionGroup> {
    const Questions = await Promise.all(
      createQuestionGroupDto.question.map(
        async (e) =>
          await this.questionRepository.findOne({ where: { id: e } }),
      ),
    );

    const questionGroup = this.questionGroupRepository.create({
      questions: Questions,
    });

    return await this.questionGroupRepository.save(questionGroup);
  }

  async getQuestionGroupById(groupId: string): Promise<QuestionGroup> {
    return await this.questionGroupRepository.findOne({
      where: { id: groupId },
      relations: ['questions', 'questions.answers'],
    });
  }
}
