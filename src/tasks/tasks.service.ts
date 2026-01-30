import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './ctreate-task.dto';
import { WrongTaskStatusException } from './exeptions/wrong-task-status.exception';
import { Task } from './task.entity';
import { TaskStatus } from './tasks.model';
import { UpdateTaskDto } from './update-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  public async findAll(): Promise<Task[]> {
    return await this.taskRepository.find();
  }

  public async findOne(id: string): Promise<Task | null> {
    return await this.taskRepository.findOne({
      where: { id },
      relations: ['labels'],
    });
  }

  public async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    // await this.tasksRepository.create({
    // });
    return await this.taskRepository.save(createTaskDto);
  }

  public async updateTask(
    task: Task,
    updateTaskDto: UpdateTaskDto,
  ): Promise<Task> {
    if (
      updateTaskDto.status &&
      !this.isValidStatusTransition(task.status, updateTaskDto.status)
    ) {
      throw new WrongTaskStatusException();
    }

    Object.assign(task, updateTaskDto);
    return await this.taskRepository.save(task);
  }

  private isValidStatusTransition(
    currentStatus: TaskStatus,
    newStatus: TaskStatus,
  ): boolean {
    const statusOrder: TaskStatus[] = [
      TaskStatus.OPEN,
      TaskStatus.IN_PROGRESS,
      TaskStatus.DONE,
    ];

    return statusOrder.indexOf(currentStatus) <= statusOrder.indexOf(newStatus);
  }

  public async deleteTask(task: Task): Promise<void> {
    await this.taskRepository.delete(task);
  }
}
