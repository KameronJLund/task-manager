const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('port is active on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    // const task = await Task.findById('62c49e6dd5723419360ddccd')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    const user = await User.findById('62c49def116a1418f98c0e53')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}

main()