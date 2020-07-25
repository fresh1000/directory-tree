import {
  Model,
  DataTypes,
} from 'sequelize'
import { sequelize } from '../configSequelize'


export class Directory extends Model {
  public id!: number
  public info!: number

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

Directory.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    info: {
      type: new DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "directories",
  }
)
