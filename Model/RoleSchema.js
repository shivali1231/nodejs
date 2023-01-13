const mongoose = require('mongoose')
const schema = mongoose.Schema

const role = schema(
    {
        name : {
            type:String
        }
    }
)

module.exports = mongoose.model('role', role)