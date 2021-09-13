import { IsString } from 'class-validator';

export class CreateRoleDto {
  @IsString({ message: 'Need to bee String!!!' })
  value: string;
  @IsString({ message: 'Need to bee String!!!' })
  description: string;
}
