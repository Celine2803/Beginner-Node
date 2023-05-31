//pipe is make the readstream to directly go to workstream
// const fs=require("fs");
// const zlib=require('zlib');//is a module of compressing the file
// const gzip=zlib.createGzip();//is to return the transformed stream
// const readStream=fs.createReadStream('./example.txt','utf8');
// const writeStream=fs.createWriteStream('./example2.txt.gz');
// readStream.pipe(gzip).pipe(writeStream);

const fs=require("fs");
const zlib=require('zlib');//is a module of compressing the file
const gunzip=zlib.createGunzip();//is to return the transformed stream to uncompress the file
const readStream=fs.createReadStream('./example2.txt.gz');
const writeStream=fs.createWriteStream('uncompressed.txt');
readStream.pipe(gunzip).pipe(writeStream);