import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Answer } from './answer.entity';
import { QuestionGroup } from './question-group.entity';

@Entity()
export class Question extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  content: string;

  @OneToMany(() => Answer, (answer) => answer.question)
  answers: Answer[];

  @ManyToOne(() => QuestionGroup, (questionGroup) => questionGroup.questions)
  questionGroup: QuestionGroup;
}
