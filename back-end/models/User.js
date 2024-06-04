const mongoose=require('mongoose');

let userSchema=new mongoose.Schema({
    firstname:{
        type:String,
        trim:true
    },
    lastname:{
        type:String,
        trim:true
    },
    email:{
        type:String,
        trim:true
    },
    password:{
        type:String,
        trim:true
    }
})

const User=mongoose.model('User',userSchema);
module.exports=User;