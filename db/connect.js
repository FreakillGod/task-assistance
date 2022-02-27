const mongoose=require('mongoose')

const connectDb=(url)=>{
    return mongoose.connect(url,{
        useNewUrlParser:true,
        useFindAndModify:false,
        useCreateIndex:true,
        useUnifiedTopology:true}
    )
}

module.exports=connectDb;
