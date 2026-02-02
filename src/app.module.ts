import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { appConfig } from './config/app.config';
import { authConfig } from './config/auth.config';
import { appConfigSchema } from './config/config.types';
import { typeOrmConfig } from './config/database.config';
import { TypedConfigService } from './config/typed-config.service';
import { DummyService } from './dummy/dummy.service';
import { LoggerService } from './logger/logger.service';
import { MessagesFormaterService } from './messages-formater/messages-formater.service';
import { TaskLabel } from './tasks/task-label.entity';
import { Task } from './tasks/task.entity';
import { TasksModule } from './tasks/tasks.module';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';
import { PasswordService } from './users/password/password.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: TypedConfigService) => ({
        ...configService.get('database'),
        entities: [Task, User, TaskLabel],
      }),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, typeOrmConfig, authConfig],
      validationSchema: appConfigSchema,
      validationOptions: {
        // allowUnknown: false,
        abortEarly: true,
      },
    }),
    TasksModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    DummyService,
    MessagesFormaterService,
    LoggerService,
    {
      provide: TypedConfigService,
      useExisting: ConfigService,
    },
    PasswordService,
  ],
})
export class AppModule {}
