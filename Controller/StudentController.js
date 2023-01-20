const student = require('../Model/StudentSchema')
const email = require('../util/nodeMailer')
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
            res.status(200).json({ message : "successfull"})
            email.send().then((info)=>{console.log("info", info)}).catch((err)=>{console.log(err)})
        }
    })
}