const express = require('express')
require('./db/mongoose')
const User = require('./models/user')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

// async function createUser(user) {
//     try {
//         const user = new User(req.body)
//         await user.save();
//         res.send(user)
//       } catch (e) {
//         res.status(400).send(e)
//       } 
// }

app.post('/users', (req, res) => {
    console.log(req.body)

    const user = new User(req.body)

    user.save().then(() => {
        res.send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
})
        

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})