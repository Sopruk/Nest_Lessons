import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { RolesService } from 'src/roles/roles.service';
import { AddRoleDto } from './dto/add-role.dto';
import { CreateUserDto } from './dto/create-user-dto';
import { User } from './users.model';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(
    private userService: UsersService,
    private roleService: RolesService,
  ) {}
  @ApiOperation({ summary: 'Creating user' })
  @ApiResponse({ status: 200, type: User })
  @Post()
  async create(@Body() userDto: CreateUserDto) {
    const user = await this.userService.createUser(userDto);
    const role = await this.roleService.getRoleByValue('USER');
    await user.$set('roles', [role.id]);
    return user;
  }

  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, type: [User] })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get()
  getUsers() {
    return this.userService.getAllUsers();
  }

  addRole(@Body() addRoleDto: AddRoleDto){
    return this.userService.addRole(addRoleDto);
  }
}
