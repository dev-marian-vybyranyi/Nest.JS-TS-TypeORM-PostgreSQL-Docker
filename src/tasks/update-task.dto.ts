import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './ctreate-task.dto';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {}
