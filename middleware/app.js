//middleware is the code that gets executed between the user request and the server itself 
const express= require("express");
const app = express();
const bodyParser=require('body-parser');


app.use(bodyParser.json());
app.use((req,res,next)=>{
    console.log(req.url,req.method);
    next();
});

app.get('/',(req,res)=>
{ res.send('Middleware');})


app.listen(4001,()=>{console.log("runs on a certain 4001")});
