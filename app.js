const connectDb=require('./db/connect')
require('dotenv').config()

const express=require('express');
const app=express();
const port=3000;
const notFound=require('./middleware/not-found');
const errorHandler=require('./middleware/errorHandler');

const tasks= require('./routes/task')

app.use(express.json());
app.use(express.static('./public'))
app.use('/api/v1/tasks',tasks);

//keep it at bottom or it will override
app.use(notFound)
app.use(errorHandler)

const start=async ()=>{
    try {
        await connectDb(process.env.MONGO_URI);
        app.listen(3000,()=>console.log('server is listining on',port))
    } catch (error) {
        console.log(error)
    }
}

start()