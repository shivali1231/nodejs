

const authenticate = (auth) =>(req, res, next)=>
{
    
    try{
        if(auth==="ADMIN"|| auth==="admin"){
            console.log("success")
            return next()
    }
    else 
    {
        throw new Error("you are not authorized to access this route")
    }}catch(err){
        return res.status(400).json({
            message:"error accessing the route"
        })
    }
}
module.exports ={ authenticate}