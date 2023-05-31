// http post request is mostly used when working with forms
const express= require("express");
const app = express();
const path=require("path");//is a utility model
const bodyParser=require('body-parser');

app.use('public',express.static(path.join(__dirname,'static')));
app.use(bodyParser.urlencoded({extended:false}));
// the above is to parse urlencoded forms as it parses the data and attaches to the request.
//it is in extended false as it not complicated objects
//only the email and passwords which are both strings

app.use(bodyParser.json());

app.get('/',(req,res)=>
{res.sendFile(path.join(__dirname,'static','index.html'))})

app.post('/',(req,res)=>{
    console.log(req.body);
    //database work here
    res.json({success:true});//take a javascript object and convert it to json.
})
app.listen(4002,()=>{console.log("runs on a certain port")});
