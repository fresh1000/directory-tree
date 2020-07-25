import * as dotenv from 'dotenv'
import app from './src/index'
import { sequelize } from './src/configSequelize'

if (process.env.DOTENV) {
  process.env.DOTENV
    .split(',')
    .filter((val) => val)
    .forEach((envPath) => dotenv.config({ path: envPath }))
}

const port = process.env.PORT || 4000

sequelize.authenticate().then(async () => {
  await sequelize.sync()
  app.listen(port)
  console.log(`Server running at ${port}`)
}).catch((err) => {
  console.log(`Cannot connect to db ${err}`)
})
