require('dotenv').config()

module.exports = {
  development: {
    host: 'mysql',
    username: 'root',
    password: 'rinha_senha',
    database: 'rinha_banco',
    dialect: 'mysql'
  },
  test: {
    host: 'mysql',
    username: 'root',
    password: 'rinha_senha',
    database: 'rinha_banco',
    dialect: 'mysql'
  },
  production: {
    host: 'mysql',
    username: 'root',
    password: 'rinha_senha',
    database: 'rinha_banco',
    dialect: 'mysql'
  }
}
