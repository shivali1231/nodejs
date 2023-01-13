 const mongoose = require('mongoose')
 const schema = mongoose.Schema
 //const objectId = Schema.ObjectId;


 const DepartmentSchema  = schema(
    {
    
        name:{
            type:String,
            required:true,
            unique : true,
            null : false 
        },
        description:{
            type:String, 
            required : true
        }

    }
 )

 module.exports = mongoose.model('Department', DepartmentSchema)