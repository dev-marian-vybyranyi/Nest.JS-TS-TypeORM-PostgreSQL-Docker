import { Controller, Get, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}

    @Get()
    public findAll(): string[] {
        return ["a", "b", "c"];
    }

    @Get("/:id")
    public findOne(@Param() params: any): string {
        return `Task ${params.id}`;
    }
}
