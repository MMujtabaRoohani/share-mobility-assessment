import { Controller, Get, Param } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { GetMessageDtoMapper } from './mappers/get-message-dto.mapper';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return GetMessageDtoMapper.map(await this.messagesService.findOne(+id));
  }

  @Get('/chat/:id')
  async findAllWithChatId(@Param('id') id: string) {
    return (await this.messagesService.findAllWithChatId(+id)).map((message) => GetMessageDtoMapper.map(message));
  }
}
