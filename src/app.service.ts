import { Injectable } from '@nestjs/common';
import { DummyService } from './dummy/dummy.service';

@Injectable()
export class AppService {
  constructor (
    private readonly dummyServide: DummyService
  ) {}
  getHello(): string {
    return `Hello World! ${this.dummyServide.work()}`;
  }
}
