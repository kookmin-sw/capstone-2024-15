import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Question } from '../entities';
import { JoinColumn } from 'typeorm';

@Entity()
export class Answer {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => Question, (question) => question.answers)
  question: Question;

  @ManyToOne(() => Question)
  @JoinColumn({ name: 'nextQuestionId' })
  nextQuestion: Question;

  @Column({ nullable: true })
  nextQuestionId: string;

  @Column({ nullable: true })
  nextQuestionType: string;
}
