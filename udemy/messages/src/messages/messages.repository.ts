import { readFileSync, writeFileSync } from 'fs';

export class MessageRepository {
  async findOne(id: string) {
    const contents = await readFileSync('message.json', 'utf-8');
    const messages = JSON.parse(contents);
    return messages[id];
  }

  async findAll() {
    const contents = await readFileSync('message.json', 'utf-8');
    const messages = JSON.parse(contents);
    return messages;
  }

  async create(message: string) {
    const contents = await readFileSync('message.json', 'utf-8');
    const messages = JSON.parse(contents);

    const id = Math.floor(Math.random() * 999);
    messages[id] = {
      id,
      contents: message,
    };

    await writeFileSync('message.json', JSON.stringify(messages));
  }
}
