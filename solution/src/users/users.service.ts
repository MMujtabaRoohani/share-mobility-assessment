import { Injectable, NotFoundException } from '@nestjs/common';
import { GetUserDto } from './dto/get-user.dto';
import { readFile } from 'fs/promises';
import { GetUserDtoMapper } from './mappers/get-user-dto.mapper';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  userDataPath = "../data/users.json"

  async findAll(): Promise<User[]> {
    return JSON.parse(await readFile(this.userDataPath, "utf8"));
  }

  async findOneWithId(id: number): Promise<User | undefined> {
    const user = (await this.findAll()).filter((user) => user.id == id)
    return user[0];
  }

  async findOneWithUsername(username: string): Promise<User | undefined> {
    const user = (await this.findAll()).filter((user) => user.username == username)
    return user[0];
  }
}
