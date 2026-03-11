const produtoService = require('../services/produtoService');

function getProdutos(req, res) {
    const produtos = produtoService.getProdutos();
    res.json(produtos);
}

function criarProduto(req, res) {

    // pega nome e preco enviados no POST
    const { nome, preco } = req.body;

    const produto = produtoService.criarProduto(nome, preco);

    res.status(201).json(produto);
}

module.exports = {
    getProdutos,
    criarProduto
};