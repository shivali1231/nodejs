const jwt = require('jsonwebtoken')
//const secret = "secret" //secret key 

module.exports.generateToken = (data, secret) =>{
    //payload equivalent to object = data which is converted to token
     
    jwt.sign(data, secret, {expiresIn: '1h' },(err, data)=>{
       if(err){
           return err
       }
       else 
       {return data;}
    })//by defual  algorithm:'HS256' 
}
 module.exports.verifyToken = (token) =>{
    jwt.verify(token , secret , (err, data)=>{
        if(err){
            return err;
        }
        else 
        {
            return data;
        }
    })
 }