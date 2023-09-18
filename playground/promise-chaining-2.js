require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('65036eb37e2e4dab7a763adb').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false})
    return count
}

deleteTaskAndCount('650363134f0abe1f1cb1f1ef').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})