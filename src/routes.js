const express = require('express');
const router = express.Router();
const pessoasController = require('./controllers/pessoasController');
const pessoaMiddleware = require('./middlewares/pessoasMiddleware');

router.post(
  '/pessoas',
  pessoaMiddleware.validarCriacaoPessoa,
  pessoasController.criarPessoa
);

router.get(
  '/pessoas/:id',
  pessoaMiddleware.validarConsultaPessoa,
  pessoasController.consultarPessoaPorId
);

router.get(
  '/pessoas',
  pessoaMiddleware.validarBuscaPessoas,
  pessoasController.buscarPessoas
);

router.get(
  '/contagem-pessoas',
  pessoasController.contagemPessoas
);

module.exports = router;
