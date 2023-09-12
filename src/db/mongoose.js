const mongoose = require('mongoose');
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = mongoose.model('User', {
  name: {
    type: String,
    require: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
        if(!validator.isEmail(value)) {
            throw new Error("Email isn't valid")
        }
    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value){
        if (value < 0) {
            throw new Error('Age must be a positive number')
        }
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    trim: true,
    validate(value) {
        if (value.includes("password") === true){
            throw new Error("Password cannot contain 'password'")
        }
    }
  }
});

async function createUser() {
  const me = new User({
    name: ' Bob  ',
    email: '  bob@gmail.com '
  });

  try {
    await me.save();
    console.log(me);
  } catch (error) {
    console.log('Error!', error);
  } finally {
    mongoose.connection.close(); 
  }
}

createUser();

// const Task = mongoose.model('Task', {
//     description: {
//         type: String
//     },
//     completed: {
//         type: Boolean
//     }
// })


// async function createTask() {
//     const me = new Task({
//       description: 'Mow lawn',
//       completed: false,
//     });
  
//     try {
//       await me.save();
//       console.log(me);
//     } catch (error) {
//       console.log('Error!', error);
//     } finally {
//       mongoose.connection.close(); 
//     }
//   }

//   createTask();