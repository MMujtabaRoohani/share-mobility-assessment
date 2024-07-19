import { GetMessageDto } from "../dto/get-message.dto";
import { Message } from "../entities/message.entity";
import { GetUserDtoMapper } from "src/users/mappers/get-user-dto.mapper";

export class GetMessageDtoMapper {
    static map(messageObj: Message): GetMessageDto {
        const { id, chatid, message, ts, user } = messageObj
        return { id, chatid, message, ts, user: GetUserDtoMapper.map(user) }
    } 
}