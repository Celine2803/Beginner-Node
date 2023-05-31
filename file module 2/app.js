const fs=require('fs');
// fs.mkdir('tutorial',(err)=>{
//     if(err)throw err;
//     console.log('folder successfully created');
// })
// fs.rmdir('tutorial',(err)=>{
//     if (err)throw err;
//     console.log('folder deleted');
// }) is to delete the folder of tutorial that is empty
// fs.writeFile('./tutorial/example.txt','456',(err)=>{
//     if(err)throw err;
//     console.log('file inside the tutorial folder');
// })
// fs.unlink('./tutorial/example.txt',(err)=>{
//     if(err)throw err;
//     else{
//     }
// })
//the correct way to delete a file
//one can use fs.rmdir inside the fs.unlink to also delete the folder that holds the file

fs.readdir('hey',(err,files)=>{
    if (err){
    console.log(err);
    }
    else{
        for(let file of files){
            fs.unlink('./hey/'+file,(err)=>{
                if(err){
                    console.log(err);
                }
                else{
                    console.log('files deleted');
                }
            })
        }
    }

    
})


