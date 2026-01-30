import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TaskStatus } from './tasks.model';
import { User } from 'src/users/user.entity';
import { TaskLabel } from './task-label.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  title: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  description: string;

  @Column({
    type: 'enum',
    enum: TaskStatus,
    default: TaskStatus.OPEN,
  })
  status: TaskStatus;

  @Column({ nullable: true })
  userId: string;

  @ManyToOne(() => User, (user) => user.tasks, { nullable: true })
  user: User;

  @OneToMany(() => TaskLabel, (label) => label.task, {
    cascade: true,
  })
  labels: TaskLabel[];
}
