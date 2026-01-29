import { Injectable } from '@nestjs/common';
import { MessagesFormaterService } from 'src/messages-formater/messages-formater.service';

@Injectable()
export class LoggerService {
  constructor(
    private readonly messagesFormaterService: MessagesFormaterService,
  ) {}

  log(message: string): string {
    const formattedMessage = this.messagesFormaterService.format(message);
    console.log(formattedMessage);
    return formattedMessage;
  }
}
