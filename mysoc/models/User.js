const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name cannot be blank !!']
    },
    username:{
        type:String,
        required:[true,'Username cannot be blank !!']
    },
    password:{
        type:String,
        required:[true,'Password cannot be blank !!']
    }
})

module.exports = mongoose.model('User',userSchema)