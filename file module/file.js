// const fs = require('fs');
// const path=require('path');


// create a folder
// fs.mkdir(path.join(__dirname,'/test') ,{ },function(err){
//     if(err) throw err;
//     console.log('file created');
// })

// create a file
// fs.writeFile(path.join(__dirname,'/test','hello.txt') ,'hello world',function(err){
//     if(err) throw err;
//     console.log('file written'); })

//     // file append to avoid overwriting
//     fs.appendFile(path.join(__dirname,'/test','hello.txt') ,'hello world 2',function(err){
//         if(err) throw err;
//         console.log('file written');
//     })
// })

// readFile
// fs.readFile(path.join(__dirname,'/test','hello.txt') ,'utf8',function(err,data){
//     if(err) throw err;
//     console.log(data);
// })


const fs = require('fs');
fs.writeFile("hi.txt","hope you are doing great",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("written successfully");
       
    }
})
fs.readFile('hi.txt','utf8',(err,data)=>{
    if(err){
        console.log("error here");
    }
    else{
        console.log(data);
    }
})
// fs.rename('hi4.txt','hi.txt',(err)=>{
//     if (err )throw err;
//     console.log('file renamed');
// })
// fs.appendFile('hi.txt','appended data',(err)=>{
//     if(err)throw err;
//     console.log("appended data");
// })
fs.unlink('hi.txt',(err)=>{
    if(err) throw err;
    console.log('file got deleted');
})
