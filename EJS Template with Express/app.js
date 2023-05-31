const express= require("express");
const app = express();
const path=require("path");//is a utility model


app.use('public',express.static(path.join(__dirname,'static')));
app.set("view engine",'ejs');
// a simple templating language that lets you 
//generate HTML markup with plain JavaScript.


app.get('/:userQuery',(req,res)=>
{res.render('index',{data:{userQuery:req.params.userQuery,
                            searchResults :['book1','book2','book3'],
                            loggedIn:true,
                            username:'xcch'}});
                        });

app.post('/',(req,res)=>{
    console.log(req.body);
    //database work here
    res.send('successfully posted')
})
app.listen(4001,()=>{console.log("runs on port 4001")});
