import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserI } from './user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.service.findById(id);
  }

  @Get()
  get(@Body() body: UserI) {
    const { password, ...user } = body;
    return this.service.find(user);
  }

  @Post()
  create(@Body() user: UserI) {
    return this.service.create(user);
  }
}
