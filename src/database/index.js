const knex = require('knex')

const dbClient = knex({
  client: 'postgres',
  connection: {
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
  }
})

module.exports = dbClient
