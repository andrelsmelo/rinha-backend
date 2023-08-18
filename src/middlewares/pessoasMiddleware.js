const pessoasService = require('../services/pessoasService')

const validarCriacaoPessoa = async (req, res, next) => {
  const { apelido, nome, nascimento, stack } = req.body

  if (!apelido || !nome || !nascimento) {
    return res.status(422).json({ error: 'Campos obrigatórios faltando' })
  }

  if (
    typeof apelido !== 'string' ||
    typeof nome !== 'string' ||
    typeof nascimento !== 'string'
  ) {
    return res.status(422).json({ error: 'Campos inválidos' })
  }

  if (stack && (!Array.isArray(stack) || !stack.every(item => typeof item === 'string'))) {
    return res.status(422).json({ error: 'Campo stack deve ser um vetor de strings' })
  }

  const apelidoJaExiste = await pessoasService.buscaPessoaPorApelido(apelido)

  if (apelidoJaExiste.length > 0) {
    return res.status(422).json({ error: 'Já existe alguem com esse apelido' })
  }

  next()
}
const validarBuscaPessoas = (req, res, next) => {
  const termoBusca = req.query.t

  if (!termoBusca || typeof termoBusca !== 'string') {
    return res.status(400).json({ error: 'Termo de busca inválido' })
  }
  next()
}
const validarConsultaPessoa = (req, res, next) => {
  const pessoaId = req.params.id

  if (!pessoaId) {
    return res.status(400).json({ error: 'ID de pessoa inválido' })
  }

  next()
}

module.exports = {
  validarBuscaPessoas,
  validarConsultaPessoa,
  validarCriacaoPessoa
}
