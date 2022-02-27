const connectDb=require('./db/connect')
require('dotenv').config()

const express=require('express');
const app=express();
const port=3000;

const tasks= require('./routes/task')

app.use(express.json());
app.use(express.static('./public'))
app.use('/api/v1/tasks',tasks);

app.get('/api/v1/tasks/',(req,res)=>{

})

const start=async ()=>{
    try {
        await connectDb(process.env.MONGO_URI);
        app.listen(3000,()=>console.log('server is listining on',port))
    } catch (error) {
        console.log(error)
    }
}

start()

