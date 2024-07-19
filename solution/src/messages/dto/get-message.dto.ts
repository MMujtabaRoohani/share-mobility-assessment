import { GetUserDto } from "src/users/dto/get-user.dto"

export class GetMessageDto {
    id: number
    chatid: number
    message: string
    user: GetUserDto
    ts: number
}