const express=require ('express');
const route=express.Router();

route.use((req,res,next)=>{
    console.log('middleware being used');
    next ();//always use next when creating own middleware
})

route.get('/',(req,res)=>{
    res.send('/being hit');
});

route.get('/example',(req,res)=>{
    res.send('/example being hit');
});

module.exports=route;