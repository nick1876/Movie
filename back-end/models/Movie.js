const mongoose=require('mongoose');

let MovieSchema=new mongoose.Schema({
    author:{
        type:String,
        required:true,
        trim:true
    },
    text:{
        type:String,
        required:true,
        trim:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    }
})

let Movies=mongoose.model('Movies',MovieSchema);
module.exports=Movies;