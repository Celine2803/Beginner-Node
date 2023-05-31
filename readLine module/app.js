//readline is to prompt the user for an input
const readline= require('readline');
// an instance of the readline interface as process is a global object
const rl =readline.createInterface({input:process.stdin,
                          output:process.stdout});
let num1= Math.floor((Math.random()*10)+ 1);                       
let num2= Math.floor((Math.random()*10)+ 1);
let answer= num1+num2;

rl.question(`What is ${num1} +${num2} ? \n`,(userInput)=>{
    if(userInput.trim() == answer){//avoid whitespaces in the users answer
        rl.close();//this is to stop the server from running continously
    }
    else{
        rl.setPrompt('Incorrect response please try again\n');
        rl.prompt();
        rl.on('line',(userInput)=>{
            if(userInput.trim()==answer){
                rl.close();
            }
            else{
                rl.setPrompt(`your answer for ${userInput} is incorrect\n`);
                rl.prompt();
            }
        })
    }
    
    // console.log(userInput);
})

rl.on('close',()=>{
    console.log('correct!!');
})