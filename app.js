const express = require('express');
const bodyParse = require('body-parser')
require("dotenv").config();

const port = process.env.PORT || 3000;

const app = express();
app.use(bodyParse.json())


//annonymous funtion 

// const get = function get(res, req){
//     console.log('Hello World');
//     res.send('Hello World');
// } 

// get kiyn function eka methnata pass krla thiyenw 
// apita eeka annonimous widiyt krnn puluwn nisa kelinma meekt pass krnw 
// app.get('/',(get)=>{
//     res.send('Hello World');
// })



app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.post('/product/create/:id',(req,res)=>{
    let body =  req.body;
    let id= req.params.id;

    console.log(body);
    console.log(id);
    res.send(body);

})



app.listen(3000,()=>{
    console.log(`Server is running on port ${port}`);
});