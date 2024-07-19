import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { GetUserDtoMapper } from './mappers/get-user-dto.mapper';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll() {
    return (await this.usersService.findAll()).map((user) => GetUserDtoMapper.map(user));
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return GetUserDtoMapper.map(await this.usersService.findOneWithId(+id));
  }
}
