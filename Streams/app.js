// enables reading data in chunks(streams)
// It is better as readFile tends to read the file at once than in chunks which makes it use all 
//the buffer as compared to stream which reads the large files in chunks
const fs= require("fs");
const readStream=fs.createReadStream('./example.txt','utf8');
const writeStream=fs.createWriteStream('./example2.txt')
readStream.on('data',(chunk)=>{
    writeStream.write(chunk) //stream enables one to fully write before the whole file is fully loaded
    // console.log(chunk);
})
