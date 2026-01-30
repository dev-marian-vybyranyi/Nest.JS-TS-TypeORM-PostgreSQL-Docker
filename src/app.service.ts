import { Injectable } from '@nestjs/common';
import { AppConfig } from './config/app.config';
import { TypedConfigService } from './config/typed-config.service';
import { DummyService } from './dummy/dummy.service';
import { LoggerService } from './logger/logger.service';

@Injectable()
export class AppService {
  constructor(
    private readonly dummyServide: DummyService,
    private readonly loggerService: LoggerService,
    private readonly configService: TypedConfigService,
  ) {}
  getHello(): string {
    const prefig = this.configService.get<AppConfig>('app')?.messagePrefix;
    return this.loggerService.log(
      `${prefig} World! ${this.dummyServide.work()}`,
    );
  }
}
