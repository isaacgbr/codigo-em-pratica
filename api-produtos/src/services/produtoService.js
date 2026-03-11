const produtoRepository = require('../repository/produtoRepository');
const Produto = require('../models/produto');

// variável que controla o próximo ID
let proximoId = 1;

function getProdutos() {
    return produtoRepository.getAll();
}

function criarProduto(nome, preco) {

    // cria produto com ID atual
    const produto = new Produto(proximoId, nome, preco);

    // aumenta o ID para o próximo produto
    proximoId++;

    return produtoRepository.criarProduto(produto);
}

module.exports = {
    getProdutos,
    criarProduto
};