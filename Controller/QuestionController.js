const  question = require('../Model/QuestionSchema')

module.exports.addQuestion = (req, res)=>{
    const add = new question(req.body)
    add.save((err, data)=>{
        if(err)
        {
            res.status(500).json({
                message : "question not added"
            })
        }
        else 
        {
            res.status(200).json({
                message:"added",
                data : data
            })
        }
    })
}

