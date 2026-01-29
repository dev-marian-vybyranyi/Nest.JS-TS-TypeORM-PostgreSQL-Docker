export class MessagesFormaterService {
    format(message: string): string {
        const timestamp = new Date().toISOString();
        return `[${timestamp}] ${message}`;
    }
}
