import { Controller, Get, Param } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
    @Get()
    public findAll(): string[] {
        return ["a", "b", "c"];
    }

    @Get("/:id")
    public findOne(@Param() params: any): string {
        return `Task ${params.id}`;
    }
}
