require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('65036eb37e2e4dab7a763adb').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})