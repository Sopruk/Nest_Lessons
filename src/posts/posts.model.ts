import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/users.model';

interface PostCreationAttrs {
  title: string;
  content: string;
  userId: number;
  image: string;
}

@Table({ tableName: 'posts' })
export class Post extends Model<Post, PostCreationAttrs> {
  @ApiProperty({ example: 1, description: 'unique Id' })
  @Column({
    type: DataTypes.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({ example: 'Post title', description: 'Post Title' })
  @Column({ type: DataTypes.STRING, unique: true, allowNull: false })
  title: string;

  @ApiProperty({ example: 'Some content', description: 'Post content' })
  @Column({ type: DataTypes.STRING, allowNull: false })
  content: string;
  @Column({ type: DataTypes.STRING })
  image: string;

  @ForeignKey(() => User)
  @Column({ type: DataTypes.INTEGER })
  userId: number;

  @BelongsTo(() => User)
  author: User;
}
