

const emp = require('../Model/EmpSchema')
const encrypt = require('../util/PasswordDecryption')
const jwt = require('jsonwebtoken')
const secret = "secret"
module.exports.addemp = (req, res)=>{
    const password = encrypt.encrypt(req.body.password)
    req.body.password = password
    var emps = new emp(req.body);
    
    console.log(req.body)
    emps.save((err,data)=>
    {
        if(err)
        {
            res.status(500).json({
                message : "employee not added"
            })
        }
        else 
        {
            res.status(200).json({
                message:"employee added",
                data : data
            })
        }
    })

}

module.exports.getEmp= (req, res)=>{
    emp.find((err, data)=>{
        if(err)
        {
            res.status(500).json({
                message : "no employees found"
            })
        }
        else 
        {
            res.status(200).json({
                message : "employee data retrieved",
                data : data
            })
        }
    })
}

module.exports.getEmpById = (req, res)=>{
const id = req.params.id

emp.findById(id,(err, data)=>{
    if(err)
    {
        res.status(500).json({
            message:"employee didnt found"
        })
    }
    else 
    {
        res.status(200).json(
            {
                message:"data retrived",
                data : data
            }
        )
    }
})
}
module.exports.login = (req,res)=>{
    const email = req.body.email
    console.log(email)
    emp.findOne({"email":email},(err,data)=>{
        if(err){
            console.log("email")
            res.status(500).json({
                message:err
            })

        }
        else if( data == null){
            res.status(500).json({
                message : "email not found"
            })
        }
        else 
        {
            
            
            if(encrypt.dcrypt(req.body.password, data.password))
            {
                console.log(data._id);
                console.log(data);
                const token=jwt.sign({id:data._id},req.body.password,{expiresIn: '1h'})
                console.log(token);
                jwt.sign({id:data._id}, secret, {expiresIn: '1h'}, (err, data1)=>{
                    
                    if(err){
                        res.status(500).json({
                            message:"token not sent",
                            err:err
                        })
                    }
                    else 
                    {
                        res.status(200).json({
                            message :"login successful and token sent",
                            token : data1
                        })
                    }
                })
            }
                     else {
                         res.status(500).json({
                             message:"incorrect password"
                        })
                     }
                     
             }
           
            
       

    })
  
}
module.exports.verifyToken = (req, res)=>{
    jwt.verify(req.body.token, secret , (err, data)=>{
        if(err){
            res.status(500).json({
                message : "Token not sent"
            })
        }
        else{
             res.status(200).json({
                message : "verified"
             })
        } 
        
    })
}
//payload - object
//login user - verify password , password verified , generate token 
//api to verify token - if token verified,display data 
//secret key can be different for user . use password as secret key
//sign is method to generate token
//verify token method.