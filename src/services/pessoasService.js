const { Pessoa } = require("../models");
const { Op } = require("sequelize");

const criarPessoa = async (dadosPessoa) => {
  return await Pessoa.create(dadosPessoa);
};

const consultarPessoaPorId = async (pessoaId) => {
  return await Pessoa.findByPk(pessoaId);
};

const buscarPessoasPorTermo = async (termoBusca) => {
  return await Pessoa.findAll({
    where: {
      stack: {
        [Op.substring]: termoBusca,
      },
    },
  });
};

const contarPessoas = async () => {
  return await Pessoa.findAll({
      attributes: {
        include: [
          [sequelize.fn('COUNT', sequelize.col('id')), 'qtd']
        ]
      }
  });
};

module.exports = {
    buscarPessoasPorTermo,
    consultarPessoaPorId,
    contarPessoas,
    criarPessoa
};
