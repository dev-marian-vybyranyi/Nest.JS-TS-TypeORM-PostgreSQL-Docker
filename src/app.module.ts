import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { appConfig } from './config/app.config';
import { appConfigSchema, ConfigType } from './config/config.types';
import { typeOrmConfig } from './config/database.config';
import { DummyService } from './dummy/dummy.service';
import { LoggerService } from './logger/logger.service';
import { TasksModule } from './tasks/tasks.module';
import { MessagesFormaterService } from './messages-formater/messages-formater.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService<ConfigType>) => ({
        ...configService.get('database'),
      }),
    }),
    ConfigModule.forRoot({
      load: [appConfig, typeOrmConfig],
      validationSchema: appConfigSchema,
      validationOptions: {
        // allowUnknown: false,
        abortEarly: true,
      },
    }),
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService, DummyService, MessagesFormaterService, LoggerService],
})
export class AppModule {}
