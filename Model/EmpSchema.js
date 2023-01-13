const mongoose = require('mongoose')
const schema = mongoose.Schema

const Emp = schema(
    {
        name:{
            type:String,
            
            
        },
        email:{
            type:String,
 
        },
        password:{
            type:String,
        }
    }
)
module.exports = mongoose.model('Employee', Emp)