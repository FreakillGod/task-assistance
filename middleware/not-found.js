const notFound=(req,res)=>{
    return res.status(404).send('resource cannot be found');
};

module.exports=notFound;