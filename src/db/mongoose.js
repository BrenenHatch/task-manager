const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// async function createUser() {
//   const me = new User({
//     name: ' Bob  ',
//     email: '  bob@gmail.com ', 
//     password: 'drowssap21'
//   });

//   try {
//     await me.save();
//     console.log(me);
//   } catch (error) {
//     console.log('Error!', error);
//   } finally {
//     mongoose.connection.close(); 
//   }
// }

// createUser();

const Task = mongoose.model('Task', {
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false        
    }
})


// async function createTask() {
//     const me = new Task({
//       description: '  brush cat  ',
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