const express = require('express')
const app = express()
const { Sequelize, DataTypes } = require('sequelize');
const User = require('./models/user')

const sequelize = new Sequelize('postgres://postgres:example@db:5432/toti')
const users = User(sequelize, DataTypes)

app.set('view engine', 'ejs')

app.get('/fotos', async (req, res) => {
  const user = await users.findByPk(2)

  res.render('fotos', { nome: user.name, descricao: user.description })
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

app.listen(3000, () => {
  console.log('Iniciando o servidor express')
})