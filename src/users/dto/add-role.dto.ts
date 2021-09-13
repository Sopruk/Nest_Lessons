import { IsNumber, IsString } from 'class-validator';
import { IsNull } from 'sequelize-typescript';

export class AddRoleDto {
  @IsString({ message: 'Need to bee String!!!' })
  readonly value: string;
  @IsNumber({}, { message: 'Need to bee Number' })
  readonly userId: number;
}
