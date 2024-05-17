// schema map to a mongodb collection

// import mongoose
const mongoose = require('mongoose')

// 2.schema creation
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    } 
})

// create model
const users=mongoose.model('users',userSchema)
module.exports = users