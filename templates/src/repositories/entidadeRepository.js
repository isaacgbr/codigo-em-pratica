// array onde os dados ficam salvos (memória)
const entidades = []

// função para listar tudo
function getAll() {

  return entidades

}

// função para salvar
function criar(entidade) {

  entidades.push(entidade)

  return entidade

}

module.exports = {
  getAll,
  criar
}