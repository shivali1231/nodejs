
const admin = require('../Model/AdminSchema')

module.exports.addAdmin=(req,res)=>{
    const admin1 = new admin(req.body);//?
    admin1.save((err,data)=>{
        if(err){
            res.status(500).json({
                message: "error"|| err
            })
        }
        else 
        {
            res.status(200).json({
                message:"record updated",
                Data : data
            })
        }
    })
}