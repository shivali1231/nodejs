// var http = require('http');

// const fh = require('./app.js');

// console.log(fh.readdata())
// var PORT = 3000
// var server = http.createServer()

// server.listen(PORT,()=>{console.log("server runnning on ", PORT)})

const express = require('express');
const mongoose =require('mongoose')
const app = express();
const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
app.use(express.json())
const department  = require('./Router/DeptRouter');
const employee = require('./Router/EmpRouter');
const exam = require('./Router/ExamRouter');
const role = require('./Router/RoleRouter');
const admin = require('./Router/AdminRouter');
const student = require('./Router/StudentRouter');
const question = require('./Router/QuestionRouter')
app.use('/que',question)
app.use('/department',department);
app.use('/emp',employee);
app.use('/st', student);
app.use('/role', role);
app.use('/exam', exam);
app.use('/admin', admin);



// app.get('/user/:id', (req, res)=>{
    
//     let data = search.searchById(req.params.id)
//     try{

//         res.json({
//         message : "data found",
//         data :data
//      })
//     }

// catch(error)
// {

// }
// })

// app.put('/user/:id', (req, res)=>{
//     let data = search.searchById(req.params.id)
//     req.body= data
//     try{
        
//         res.json({
//             message:"data updated",
//             data : data
//         })
//     }
//     catch(error)
//     {
//             res.status(201)
//     }
// })
mongoose.connect("mongodb+srv://shivali:Ygz5fVTOHVhauedL@cluster0.yc1reu2.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    socketTimeoutMS: 30000,
    keepAlive: true,
},(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Connected to DB")
    }
}
);