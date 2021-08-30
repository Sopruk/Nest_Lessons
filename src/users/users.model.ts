import { Column, Model, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @Column({
    type: DataTypes.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataTypes.STRING, unique: true, allowNull: false })
  email: string;

  @Column({ type: DataTypes.STRING, allowNull: false })
  password: string;

  @Column({ type: DataTypes.BOOLEAN, defaultValue: false })
  banned: boolean;

  @Column({ type: DataTypes.STRING, allowNull: true })
  banReason: string;
}
