const entidadeService = require('../services/entidadeService')

// endpoint GET
function getEntidades(req, res) {

  // chama o service
  const entidades = entidadeService.getEntidades()

  // retorna resposta
  res.json(entidades)

}

// endpoint POST
function criarEntidade(req, res) {

  // pega dados enviados no body
  const { nome, valor } = req.body

  // chama o service
  const entidade = entidadeService.criarEntidade(nome, valor)

  // retorna resposta
  res.status(201).json(entidade)

}

module.exports = {
  getEntidades,
  criarEntidade
}