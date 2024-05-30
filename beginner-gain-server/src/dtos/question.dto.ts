// question.dto.ts
import { IsNotEmpty } from 'class-validator';

export class CreateQuestionDto {
  @IsNotEmpty()
  content: string;
}

export class CreateQuestionGroupDto {
  @IsNotEmpty()
  question: string[];
}
