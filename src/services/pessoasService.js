const redisClient = require('../../redisConfig')
const { Pessoa } = require('../models')
const { Op } = require('sequelize')

const buscarPessoasPorTermo = async (termoBusca) => {
  const cacheKey = `cache_busca_${termoBusca}`
  const cacheExpiration = 5

  return new Promise((resolve, reject) => {
    redisClient.get(cacheKey, async (_err, cachedData) => {
      if (cachedData !== null) {
        resolve(JSON.parse(cachedData))
      } else {
        const pessoasEncontradas = await Pessoa.findAll({
          where: {
            [Op.or]: [
              { nome: { [Op.substring]: termoBusca } },
              { apelido: { [Op.substring]: termoBusca } },
              { stack: { [Op.substring]: termoBusca } }
            ]
          },
          limit: 50
        })

        redisClient.setex(cacheKey, cacheExpiration, JSON.stringify(pessoasEncontradas))

        resolve(pessoasEncontradas)
      }
    })
  })
}

const criarPessoa = async (dadosPessoa) => {
  return await Pessoa.create(dadosPessoa)
}

const consultarPessoaPorId = async (pessoaId) => {
  return await Pessoa.findByPk(pessoaId)
}

const contarPessoas = async () => {
  return await Pessoa.count()
}

const buscaPessoaPorApelido = async (apelido) => {
  try {
    const result = await Pessoa.findAll({
      where: {
        apelido
      }
    })

    return result
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  buscarPessoasPorTermo,
  consultarPessoaPorId,
  contarPessoas,
  criarPessoa,
  buscaPessoaPorApelido
}
