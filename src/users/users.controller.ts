import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from './user.intrface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.service.findById(id);
  }

  @Get()
  get(@Body() body: User) {
    const { password, ...user } = body;
    console.log(user);
    return this.service.find(user);
  }

  @Post()
  create(@Body() user: User) {
    return this.service.create(user);
  }
}
