import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { appConfig } from './config/app.config';
import { configSchema } from './config/config.types';
import { DummyService } from './dummy/dummy.service';
import { LoggerService } from './logger/logger.service';
import { MessagesFormaterService } from './messages-formater/messages-formater.service';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig],
      validationSchema: configSchema,
      validationOptions: {
        allowUnknown: true,
      },
    }),
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService, DummyService, MessagesFormaterService, LoggerService],
})
export class AppModule {}
