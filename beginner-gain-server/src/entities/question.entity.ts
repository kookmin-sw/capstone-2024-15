import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import { Answer } from './answer.entity';

@Entity()
export class Question extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  content: string;

  @OneToMany(() => Answer, (answer) => answer.question)
  answers: Answer[];
}
