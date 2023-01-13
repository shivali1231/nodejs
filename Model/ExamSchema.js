const mongoose = require('mongoose')
const schema = mongoose.Schema

const exam = schema({
    name:{
        type:String
    },
 
    Question_id:[{
        type:schema.Types.ObjectId,
        ref : 'question'
    }]
})
module.exports = mongoose.model('exam', exam)