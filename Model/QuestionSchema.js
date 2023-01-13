const mongoose = require('mongoose')
const schema = mongoose.Schema
const question = schema({
    question:{
       type:String
    }
})
module.exports = mongoose.model('question', question)