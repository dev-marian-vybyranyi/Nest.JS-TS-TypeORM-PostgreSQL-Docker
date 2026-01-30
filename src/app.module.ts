import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DummyService } from './dummy/dummy.service';
import { MessagesFormaterService } from './messages-formater/messages-formater.service';
import { LoggerService } from './logger/logger.service';
import { TasksModule } from './tasks/tasks.module';
import { ConfigModule } from '@nestjs/config';
import { appConfig } from './config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig],
    }),
    TasksModule
  ],
  controllers: [AppController],
  providers: [AppService, DummyService, MessagesFormaterService, LoggerService],
})
export class AppModule {}
