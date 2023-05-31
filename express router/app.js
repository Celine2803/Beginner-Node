//separate the routes into different files for easy management

const express= require("express");
const app = express();
const path=require("path");//is a utility model




app.use('public',express.static(path.join(__dirname,'static')));
app.set("view engine",'ejs');
// a simple templating language that lets you 
//generate HTML markup with plain JavaScript.

const people=require('./routes/people')
app.use('/people',people);

app.listen(4001,()=>{console.log("runs on a certain 4001")});
