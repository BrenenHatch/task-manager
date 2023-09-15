require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('6500c0d3ab51ff2cc13807f1', {age: 1}).then((user) => {
    console.log(user)
    return User.countDocuments({age: 1})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})