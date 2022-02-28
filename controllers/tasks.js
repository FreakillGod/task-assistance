const Task=require('../models/Task')
const asyncWrapper=require('../middleware/async');
const {createCustomError}=require('../errors/custom-error')

const getAllTasks=asyncWrapper(async (req,res)=>{
    const tasks=await Task.find({});
    res.status(200).json({tasks:tasks});
})

const createTask=asyncWrapper(async (req,res)=>{

    const task=await Task.create(req.body)
    res.status(201).json({task});

})

const getTask=asyncWrapper(async (req,res)=>{

        const {id:taskID}=req.params;
        const task=await Task.findOne({_id:taskID});
        if(!task){
            return next(createCustomError(`no task with id : ${taskID}`,404))
            // const error=new Error('not found chec your id');
            // error.status=400;
            // return next(error);
            // return res.status(404).send({succes:false,msg:'id cannot be find'})
        }

        res.status(200).json({task});

})

const deleteTask=asyncWrapper(async (req,res)=>{

        const {id:taskID}=req.params;
        const task=await Task.findOneAndDelete({_id:taskID});

        if(!task){
            return next(createCustomError(`no task with id : ${taskID}`,404))
        }
        res.status(200).json({success:true,task});

})

const updateTask=asyncWrapper(async (req,res)=>{
        const {id:taskID}=req.params;
        const task= await Task.findOneAndUpdate({_id:taskID} ,req.body,{
            new:true,
            runValidators:true,
        })
        if(!task){
            return next(createCustomError(`no task with id : ${taskID}`,404))

        }
        res.status(200).json({success:true,task});
})

module.exports={
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}