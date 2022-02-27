const mongoose=require('mongoose');

const TaskSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Must provide valid name"],
        trim:true,
        maxlength:[20,'name exceeds'],
    },
    completed:{
        type:Boolean,
        default:false,
    },
})

module.exports= mongoose.model('Task',TaskSchema)