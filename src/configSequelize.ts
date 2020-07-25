import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize('directory_tree', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
})