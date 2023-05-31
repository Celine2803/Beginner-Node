const sum=(num1,num2)=> num1+num2;
const PI=3.14;
class MathObject {
    constructor(){
        console.log("Hi there");
    }
}

// module.exports.sum=sum;
// module.exports.PI=PI;
// module.exports.MathObject=MathObject;
//refactoring below:
module.exports={sum:sum,PI:PI,MathObject:MathObject};