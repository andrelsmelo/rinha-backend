const Sequelize = require('sequelize')
const dbConfig = require('../config/db')

const sequelize = new Sequelize(dbConfig);

(async () => {
  try {
    await sequelize.authenticate()
    console.log('Conexão com o banco de dados estabelecida com sucesso.')
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error)
  }
})()

module.exports = sequelize
