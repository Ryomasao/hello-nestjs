import { MessageRepository } from './messages.repository';

export class MessageService {
  messagesRepo: MessageRepository;

  constructor() {
    this.messagesRepo = new MessageRepository();
  }

  async findAll() {
    return this.messagesRepo.findAll();
  }

  async findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  async create(message: string) {
    return this.messagesRepo.create(message);
  }
}
