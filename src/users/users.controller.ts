import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from './user.intrface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Get(':id')
  get(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() user: User) {
    return this.service.create(user);
  }
}
