import { Column, Model, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { ApiProperty } from '@nestjs/swagger';

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: 1, description: 'unique Id' })
  @Column({
    type: DataTypes.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({ example: 'user@test.ua', description: 'User email' })
  @Column({ type: DataTypes.STRING, unique: true, allowNull: false })
  email: string;

  @ApiProperty({ example: 'qwe123@', description: 'User password' })
  @Column({ type: DataTypes.STRING, allowNull: false })
  password: string;

  @ApiProperty({ example: true, description: 'User is banned' })
  @Column({ type: DataTypes.BOOLEAN, defaultValue: false })
  banned: boolean;

  @ApiProperty({ example: 'for the dick', description: 'Reason for blocking' })
  @Column({ type: DataTypes.STRING, allowNull: true })
  banReason: string;
}
