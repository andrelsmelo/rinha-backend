const pessoa = require("../models/pessoa");

const criarPessoa = async (dadosPessoa) => {
  return await pessoa.create(dadosPessoa);
};

const consultarPessoaPorId = async (pessoaId) => {
  return await Pessoa.findByPk(pessoaId);
};

const buscarPessoasPorTermo = async (termoBusca) => {
  return await Pessoa.findAll({
    where: {
      nome: {
        [Op.iLike]: `%${termoBusca}%`,
      },
    },
  });
};

const contarPessoas = async () => {
  return await Pessoa.count();
};

module.exports = {
    buscarPessoasPorTermo,
    consultarPessoaPorId,
    contarPessoas,
    criarPessoa
};
