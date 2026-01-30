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
import { typeOrmConfig } from './config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig, typeOrmConfig],
      validationSchema: configSchema,
      validationOptions: {
        // allowUnknown: true,
        abortEarly: true,
      },
    }),
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService, DummyService, MessagesFormaterService, LoggerService],
})
export class AppModule {}
