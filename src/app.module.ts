import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DummyService } from './dummy/dummy.service';
import { MessagesFormaterService } from './messages-formater/messages-formater.service';
import { LoggerService } from './logger/logger.service';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TasksModule],
  controllers: [AppController],
  providers: [AppService, DummyService, MessagesFormaterService, LoggerService],
})
export class AppModule {}
