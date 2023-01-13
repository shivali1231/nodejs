const exam = require('../Model/ExamSchema')

module.exports.addexam = (req, res)=>{
    const add  = new exam(req.body)
    console.log(req.body)
    add.save((err, data)=>{
        if(err){
            res.status(500).json({
                message : err
            })
        }
        else 
        {
            res.status(200).json({
                message : "successful",
                data : data
            })
        }
    })
}

module.exports.findExambyId = (req, res)=>{
    const id = req.params.id
    exam.findOne({_id:id},(err, data)=>{
        if(err)
        {
            res.status(500).json({
                message:"error"
            })
        }
        else {
            res.status(200).json({
                message:"accepted",
                data : data
            })
        }
    })
}
module.exports.addExamByid = (req, res)=>{
    const id = req.params.id
    exam.findByIdAndUpdate(req.params.id, {$push:{"Question_id": req.body.Question_id}}, (err, data)=>{
        if(err)
        {
            res.status(500).json({
                message : "failed"
            })
        }
        res.status(200).json({
            message:"success", 
            data : data
        })
    })
  
}
module.exports.removeQuestion= (req, res)=>{
    exam.findByIdAndUpdate(req.params.id,{$pull:{"Question_id":req.body.Question_id}}, (err, data)=>{
        if(err){
            res.status(500).json({
                message : " error "
            })
        }
        else 
        {
            res.status(200).json({
                message:"success",
                data : data
            })
        }
    })
}
//$pull : {facutly : req.body.id}