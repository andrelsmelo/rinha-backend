const pessoasService = require('../services/pessoasService');

const criarPessoa = async (req, res) => {
  try {
    const novaPessoa = await pessoasService.criarPessoa(req.body);
    return res.status(201).json(novaPessoa);
  } catch (error) {
    console.error('Erro ao criar pessoa:', error);
    return res.status(500).json({ error: 'Erro ao criar pessoa' });
  }
};

const consultarPessoaPorId = async (req, res) => {
  try {
    const pessoaId = req.params.id;
    const pessoa = await pessoasService.consultarPessoaPorId(pessoaId);

    if (!pessoa) {
      return res.status(404).json({ error: 'Pessoa não encontrada' });
    }

    return res.json(pessoa);
  } catch (error) {
    console.error('Erro ao consultar pessoa:', error);
    return res.status(500).json({ error: 'Erro ao consultar pessoa' });
  }
};

const buscarPessoas = async (req, res) => {
  try {
    const termoBusca = req.query.t;
    const pessoasEncontradas = await pessoasService.buscarPessoasPorTermo(
      termoBusca
    );
    return res.json(pessoasEncontradas);
  } catch (error) {
    console.error('Erro ao buscar pessoas:', error);
    return res.status(500).json({ error: 'Erro ao buscar pessoas' });
  }
};

const contagemPessoas = async (req, res) => {
  try {
    const totalPessoas = await pessoasService.contarPessoas();
    return res.json({ total: totalPessoas });
  } catch (error) {
    console.error('Erro ao contar pessoas:', error);
    return res.status(500).json({ error: 'Erro ao contar pessoas' });
  }
};

module.exports = {
  buscarPessoas,
  consultarPessoaPorId,
  contagemPessoas,
  criarPessoa,
};
