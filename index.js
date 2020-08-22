const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/fotos', (req, res) => {
  res.render('fotos', { nome: req.query.nome })
})

app.get('/cachorros', (req, res) => {
  res.send('<html><body><h1>Cheguei na rota dos cachorros!</h1></body></html>')
})

app.post('/', (req, res) => {
  res.send('Respondendo requisicao POST!')
})

app.post('/cachorros', (req, res) => {
  res.send('Adotando um novo cachorro')
})

app.listen(8080, () => {
  console.log('Iniciando o servidor express')
})