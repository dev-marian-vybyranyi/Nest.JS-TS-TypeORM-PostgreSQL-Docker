import { Injectable } from '@nestjs/common';
import { DummyService } from './dummy/dummy.service';
import { LoggerService } from './logger/logger.service';
import { ConfigService } from '@nestjs/config';
import { ConfigType } from './config/config.types';
import { AppConfig } from './config/app.config';

@Injectable()
export class AppService {
  constructor(
    private readonly dummyServide: DummyService,
    private readonly loggerService: LoggerService,
    private readonly configService: ConfigService<ConfigType>,
  ) {}
  getHello(): string {
    const prefig = this.configService.get<AppConfig>('app')?.messagePrefix;
    return this.loggerService.log(
      `${prefig} World! ${this.dummyServide.work()}`,
    );
  }
}
