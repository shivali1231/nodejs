const fs = require('fs')


var ar=[];

function readData()
{
    let a= fs.readFileSync('./employeeData.JSON', 'utf8')
    ar = JSON.parse(a);
}

 
function searchById(Id)
{
    readData()
    return ar.filter((x)=>{
        return x.id==Id;
    })
}

function saveData(data)
{
    readData()
    
 
}
module.exports = {searchById, saveData}