// http post request is mostly used when working with forms
const express= require("express");
const app = express();
const path=require("path");//is a utility model
const Joi=require('joi');
const bodyParser=require('body-parser');

app.use('public',express.static(path.join(__dirname,'static')));
app.use(bodyParser.urlencoded({extended:false}));
// the above is to parse urlencoded forms as it parses the data and attaches to the request.
//it is in extended false as it not complicated objects
//only the email and passwords which are both strings

app.use(bodyParser.json());

app.get('/',(req,res)=>//the get request is to present form to the user
{res.sendFile(path.join(__dirname,'static','index.html'))})

app.post('/',(req,res)=>//the post request is to get result from the user
//validate the response with a schema that is a blueprint required of both email and password
{   console.log(req.body);
    const schema=Joi.object().keys({
        email:Joi.string().trim().email().required(),
    password:Joi.string().min(5).max(10).required()
});
schema.validate(req.body,(err,result)=>{
    if(err){
        console.log(err);
        res.send('an error has occurred');
    }
        console.log(result);
        res.send('succesfully posted data');
})
    
})
app.listen(4002,()=>{console.log("runs on a certain port")});
