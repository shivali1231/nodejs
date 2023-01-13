const role = require('../Model/RoleSchema');
const { addAdmin } = require('./AdminController');

module.exports.addRole = (req, res)=>{
    const addrole = new role(req.body)
    addrole.save((err, data)=>
    {
        if(err){
            res.status(500).json({
                message : "error saving"|| err
            })
        }
        else 
        {
            res.status(200).json({
                message:"succesfully saved",
                data : data
            })
        }
    }); 
}

module.exports.verifyId = (req, res)=>{
    const id = req.params.id
   
    role.findById(id, (err, data)=>{
        if(err)
        {
            return false;
        }
        else 
        {
            if(data.id == 1){
                return true;
            }
        }
    })
}