const Task=require('../models/Task')

const getAllTasks=async (req,res)=>{
    try {
        const tasks=await Task.find({});
        res.status(200).json({tasks:tasks});
    } catch (error) {
        res.status(500).json({msg:error});
    }
    
}

const createTask=async (req,res)=>{

    try {
        const tasks=await Task.create(req.body)
        res.status(201).json({tasks});
    } catch (error) {
        res.status(500).json({msg:error});
    }
    
}

const getTask=async (req,res)=>{

    try {
        const {id:taskID}=req.params;
        const tasks=await Task.findOne({_id:taskID});
        if(!tasks){
            return res.status(404).send({succes:false,msg:'id cannot be find'})
        }

        res.status(200).json({tasks});

    } catch (error) {
        res.status(500).json({msg:error});
    }
    
}

const deleteTask=async (req,res)=>{

    try {
        const {id:taskID}=req.params;
        const tasks=await Task.findOneAndDelete({_id:taskID});

        if(!deletedTask){
            return res.status(404).json({success:false,msg:'cannot find matching id'});
        }
        res.status(200).json({success:true,tasks});

    } catch (error) {
        res.status(500).json({msg:error});
    }
}

const updateTask=async (req,res)=>{
    try {
        const {id:taskID}=req.params;
        const tasks= await Task.findOneAndUpdate({_id:taskID} ,req.body,{
            new:true,
            runValidators:true,
        })
        if(!updatedTask){
            return res.status(404).json({success:false,msg:"id mismatched"})
        }
        res.status(200).json({success:true,tasks});

    } catch (error) {
        console.log(error)
        res.status(500).json({msg:error})
    }
}

module.exports={
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}