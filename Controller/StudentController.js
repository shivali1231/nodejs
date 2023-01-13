const student = require('../Model/StudentSchema')

module.exports.addstudent = (req, res)=>{
    const studentadd = new student(req.body)
    studentadd.save((err, data )=>{
        if(err)
        {
            res.status(500).json({
                message : err
            })
        }
        else 
        {
            res.status(200).json({
                message :"successfully ccreated", 
                data : data    
            })
        }
    })
}