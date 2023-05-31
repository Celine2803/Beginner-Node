//is a framework that uses less code to serve static files 
//as compared to using fs and http
const express= require("express");
const app = express();

app.get('/',(req,res)=>{
    res.send('hello celine,this express');
})

app.get('/example',(req,res)=>{
    res.send('another route is added here');
})

app.get('/example/:name/:age',(req,res)=>{
    console.log(req.params);//used when you must get the data
    console.log(req.query);//it is optional when to get the data
    //above is a query string parameter
    res.send(req.params.name+":"+req.params.age);
})
app.listen(4000,()=>{console.log("runs on a certain port")});
