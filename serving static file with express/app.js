const express= require("express");
const app = express();
const path=require("path");//is a utility model


app.use('public',express.static(path.join(__dirname,'static')));//the use of middleware
app.get('/',(req,res)=>
{res.sendFile(path.join(__dirname,'static','example.html'))})

app.listen(4001,()=>{console.log("runs on a certain 4001")});
