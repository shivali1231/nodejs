

const { default: mongoose } = require('mongoose')
const mangoose = require('mongoose')
const schema = mangoose.Schema

const student = schema({
    name:{
        type:String
    },
    role_id:{
        type: schema.Types.ObjectId,
            ref : 'role'
    }
})
module.exports = mongoose.model('student', student)