const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon!')
//     next()
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})  

const Task = require('./models/task');
const User = require('./models/user');

const main = async () => {
    // const task = await Task.findById('651d854f96b1ee0c33c94478');
    // await task.populate('owner')
    // console.log(task.owner)


    const user = await User.findById('651d815cc63827cdabe7cab1');

    if (user) {
        await user.populate( { path: 'tasks', model: Task } ) 
        console.log(user.tasks);
    } else {
        console.log('User not found');
    }
}

main()