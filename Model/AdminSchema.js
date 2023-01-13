const mangoose = require('mongoose')

const schema = mangoose.Schema

const admin = schema({
    name:{
        type:String
    },
    role_id:{
        type:schema.Types.ObjectId,
        ref :'role',
        required:true
    
    }
})
module.exports = mangoose.model('admin', admin)