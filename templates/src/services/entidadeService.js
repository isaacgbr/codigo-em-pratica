const entidadeRepository = require('../repositories/entidadeRepository')
const Entidade = require('../models/entidade')

// variável que controla o próximo ID
let proximoId = 1

// função para listar dados
function getEntidades() {

  return entidadeRepository.getAll()

}

// função para criar
function criarEntidade(nome, valor) {

  // cria objeto da entidade
  const entidade = new Entidade(proximoId, nome, valor)

  // aumenta o ID para o próximo registro
  proximoId++

  // salva no repository
  return entidadeRepository.criar(entidade)

}

module.exports = {
  getEntidades,
  criarEntidade
}