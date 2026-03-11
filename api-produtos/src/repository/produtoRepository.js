const produtos = []

function getAll() {
  return produtos
}

function criarProduto(produto) { // recebe produto como parâmetro
  produtos.push(produto) // adiciona no array
  return produto
}

module.exports = {
  getAll,
  criarProduto
}