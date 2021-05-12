const mongoose = require('mongoose')

// mongodb+srv://tudhgch1856:<password>@cluster0.dtqlx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// mongodb://localhost:27017/StudentDB

mongoose.connect("mongodb+srv://tudhgch1856:123@123a@cluster0.dtqlx.mongodb.net/StudentDB?retryWrites=true&w=majority", {
    useNewUrlParser: true,
},
    (err) => {
        if (!err) {
            console.log('Connection successded')
        } else {
            console.log('Error in connection ' + err)
        }
    })

require('./student.model')