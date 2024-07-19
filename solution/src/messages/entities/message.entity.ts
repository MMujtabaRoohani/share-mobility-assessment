import { User } from "src/users/entities/user.entity"

export class Message {
    id: number
    chatid: number
    message: string
    user: User
    ts: number
}
