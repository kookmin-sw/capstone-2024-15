import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Relation,
  ManyToOne,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  filePath: string;

  @ManyToOne(() => User, (user) => user.boilerplate, {
    onDelete: 'CASCADE',
  })
  owner: Relation<User>;
}
