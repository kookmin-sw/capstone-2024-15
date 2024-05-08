// answer.dto.ts
import { IsNotEmpty } from 'class-validator';
import { Question } from '../entities';

export class CreateAnswerDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  question: Question;
}

export class UpdateNextQuestionDto {
  @IsNotEmpty()
  answer: string;
  @IsNotEmpty()
  question: string;
}
