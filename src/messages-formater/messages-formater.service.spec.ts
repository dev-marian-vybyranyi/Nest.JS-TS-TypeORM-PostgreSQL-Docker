import { Test, TestingModule } from '@nestjs/testing';
import { MessagesFormaterService } from './messages-formater.service';

describe('MessagesFormaterService', () => {
  let service: MessagesFormaterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessagesFormaterService],
    }).compile();

    service = module.get<MessagesFormaterService>(MessagesFormaterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
