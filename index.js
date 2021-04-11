
const { Sequelize, Model, DataTypes } = require("sequelize");
const express = require('express')

const app = express()

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'my-database.db'
});
const TaskModel = require('./models/task')

const tasks = TaskModel(sequelize, DataTypes)

app.set('view engine', 'ejs')

app.get('/tarefas/:id', async (req, res) => {
  const taskId = req.params.id

  const task = await tasks.findByPk(taskId)

  res.render('tarefa', { id: task.id, name: task.name })
})

app.listen(8080, () => {
  console.log('Iniciando o servidor express')
})