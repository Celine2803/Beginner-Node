//http is to create a webserver with Node js
const http=require("http");
const fs=require('fs');
// const server=http.createServer((req,res)=>{
//     if (req.url ==='/'){
// res.writeHead(200,'text/html');
// res.write('hey i am changing');
// res.end()}
//   else{
// res.write("another port here");
// res.end()
// }
// })
    
// server.listen('5000',()=>console.log("it is on this server"))

const server=http.createServer((req,res)=>{
    const readStream=fs.createReadStream('./static/wall.jpg');
    res.writeHead(200,{'Content-type':'image/jpg'});//to let the client know which client they are expecting
    readStream.pipe(res);
    
}).listen(4000,()=>{console.log("sent to this server 4000")});
