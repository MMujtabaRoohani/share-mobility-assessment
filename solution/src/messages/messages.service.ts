import { Injectable } from '@nestjs/common';
import { Message } from './entities/message.entity';
import { readFile } from 'fs/promises';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class MessagesService {
  constructor(private usersService: UsersService) {}
  messagesDataPath = "../data/messages.json"

  private async loadAllUsers() {
    let users = await this.usersService.findAll()
    let userDict = {}
    for(const user of users) {
      userDict[user.id] = user
    }
    return userDict
  } 

  private async readAllMessages(): Promise<Message[]> {
    let messagesWithUserId = JSON.parse(await readFile(this.messagesDataPath, "utf8"));
    let userDict = await this.loadAllUsers()
    return messagesWithUserId.map((message) => { return {...message, user: userDict[message.userid]}})
  }

  async findOne(id: number): Promise<Message | undefined> {
    let messages = (await this.readAllMessages()).filter((message) => message.id == id);
    return messages[0]
  }

  async findAllWithChatId(chatid: number): Promise<Message[]> {
    let messages = (await this.readAllMessages()).filter((message) => message.chatid == chatid);
    return messages
  }
}
