const mongoose = require('mongoose')


let studentSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required: 'This filed is required'
    },
    email:{
        type:String,
        required:"This filed is required"
    },
    mobile:{
        type:Number,
        required:"This filed is required"
    },
    city:{
        type:String,
        required:"This filed is required"
    },
})

mongoose.model("Student",studentSchema)