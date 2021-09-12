import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user@test.ua', description: 'User email' })
  @IsString({ message: 'Need to bee string' })
  @IsEmail({}, { message: 'Incorect email' })
  readonly email: string;

  @ApiProperty({ example: '12345678', description: 'User password' })
  @IsString({ message: 'Nead to bee string' })
  @Length(4, 14, { message: '4 < Length < 14' })
  readonly password: string;
}
