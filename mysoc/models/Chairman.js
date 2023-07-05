const mongoose = require('mongoose')
const chairmanSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name cannot be blank !!']
    },
    username:{
        type:String,
        required:[true,"Username cannot be blank !!"]
    },
    password:{
        type:String,
        required:[true,'Password cannot be blank !!']
    }
},
{ collection: "chairman" } )

module.exports = mongoose.model('Chairman',chairmanSchema)