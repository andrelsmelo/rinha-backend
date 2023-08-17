const validarCriacaoPessoa = (req, res, next) => {
  const { apelido, nome, nascimento, stack } = req.body;

  if (!apelido || !nome || !nascimento) {
    return res.status(400).json({ error: 'Campos obrigatórios faltando' });
  }

  if (
    typeof apelido !== 'string' ||
    typeof nome !== 'string' ||
    typeof nascimento !== 'string'
  ) {
    return res.status(400).json({ error: 'Campos inválidos' });
  }

  if (stack && !Array.isArray(stack)) {
    return res.status(400).json({ error: 'Campo "stack" deve ser um vetor' });
  }

  next();
};
const validarBuscaPessoas = (req, res, next) => {
  const termoBusca = req.query.t;

  if (!termoBusca || typeof termoBusca !== 'string') {
    return res.status(400).json({ error: 'Termo de busca inválido' });
  }
  next();
};
const validarConsultaPessoa = (req, res, next) => {
  const pessoaId = req.params.id;

  if (isNaN(pessoaId)) {
    return res.status(400).json({ error: 'ID de pessoa inválido' });
  }

  next();
};

module.exports = {
  validarBuscaPessoas,
  validarConsultaPessoa,
  validarCriacaoPessoa
};
