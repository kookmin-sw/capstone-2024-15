import { Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Question } from './question.entity';

@Entity()
export class QuestionGroup {
  @PrimaryGeneratedColumn()
  id: string;

  @OneToMany(() => Question, (question) => question.questionGroup)
  questions: Question[];
}
