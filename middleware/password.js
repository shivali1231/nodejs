const emp = require('../Model/EmpSchema')
const validate = (schema) => async(req, res, next)=>{
    try{
        await schema.parseAsync({
            
            body:req.body,
            query : req.query,
            params : req.params
        })//is it neccessary to take data ?
        emp.insertMany({}, (err, data)=>{
            if(data){
                res.status(500).json({
                    message:"already exists"}
                )
            }
          else{  return next()
         }
        })
      
  
    }
    
    catch(err)
    {
        return res.status(500).json({
            message : err
        })
    }
}

module.exports = {validate}