const express = require('express')
const controller = require('./src/controllers/produtoController')
const app = express()
app.use(express.json())

app.get('/produtos', controller.getProdutos)

app.post('/produtos', controller.criarProduto)

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000")
})