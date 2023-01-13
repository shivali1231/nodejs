const DeptSchema = require('../Model/DeptSchema');

 
module.exports.addDepartment = (req,res)=>{
    const dept = new DeptSchema(req.body);
    dept.save((err,data)=>
    {
        if(err)
        {
            res.status(500).json({
                message: "error adding deprtment"
            })
        }
        else 
        {
            res.status(200).json(
                {
                    message:"record updated",
                    Data : data 
                }
            )
        }
    })
}

module.exports.getDepartment = (req, res)=>{
    DeptSchema.find((err,data)=>{
        if(err){
            res.status(500).json({
                message : "cannot find any record"
            })
        }
        else {
            res.status(200).json(
                {
                    message : "record retrieved",
                    data : data
                }
            )
        }
    })
}

module.exports.getDepartmentbyId = (req, res)=>{
    const id = req.params.id
    DeptSchema.findById(id,(err, data)=>{
        if(err)
        {
            res.status(500).json({
                message : "user not found"
            })
        }
        else {
            res.status(200).json({
                message : "user data retrieved",
                data : data
            })
        }
    })
}

module.exports.updateDepartmentByid = (req, res)=>{
    const id = req.params.id;
    DeptSchema.findByIdAndUpdate(id,req.body, (err, data)=>
    {
        if(err)
        {
            res.status(500).json({
                message : "user not found"
            })
           
        }
        else 
        {
            res.status(200).json({
                message : "user updated",
                data : data
            })
        }
    })
}

// exports.module.deleteById = (req, res)=>{
//     const id = req.params.id
//     DeptSchema.deleteByID(id,(err, data)=>{
//         if(err)
//         {
//             res.status(500).json({
//                 message : "user not found"
//             })
//         }
//         else 
//         {
//             res.status(200).json({
//                 message : "user deleted"
//             })
//         }
//     })
// }

