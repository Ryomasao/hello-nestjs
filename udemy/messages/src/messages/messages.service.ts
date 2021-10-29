import { Injectable } from '@nestjs/common';
import { MessageRepository } from './messages.repository';

@Injectable()
export class MessageService {
  constructor(public messagesRepo: MessageRepository) {}

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
