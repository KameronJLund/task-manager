const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', (req, res) => {
    const user = new User(req.body)

    user.save().then(() => {
        res.send(user)
    }).catch((error) => {
        res.status(400)
        res.send(error)
        console.log(error)
    })
})
app.post('/tasks', (req, res) => {
    const task = new Task(req.body)

    task.save().then(() => {
        res.send(task)
    }).catch((error) => {
        res.status(400)
        res.send(error)
        console.log(error)
    })
})

app.listen(port, () => {
    console.log('port is active on port ' + port)
})