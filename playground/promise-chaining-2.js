require('../src/db/mongoose')
const Task = require('../src/models/task')
const User = require('../src/models/task')

// Task.findByIdAndDelete('62bf685661940a2ba306f3de').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('62c4561da671a60a5d46e45e').then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})
