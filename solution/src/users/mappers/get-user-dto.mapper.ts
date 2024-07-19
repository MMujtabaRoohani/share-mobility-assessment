import { GetUserDto } from "../dto/get-user.dto";
import { User } from "../entities/user.entity";

export class GetUserDtoMapper {
    static map(user: User): GetUserDto {
        const { id, username } = user
        return { id, username }
    } 
}