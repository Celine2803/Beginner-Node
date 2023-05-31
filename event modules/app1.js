const EventEmitter=require('events');//a class being imported.
const eventEmitter=new EventEmitter() //an object.

eventEmitter.on('tutorial',()=>{
    console.log("This is events");
})

eventEmitter.emit('tutorial');//the tutorial is an event that gets triggered.

eventEmitter.on('tutorial',(num1,num2)=>{
    console.log(num1+num2);
})

eventEmitter.emit('tutorial',1,2);


// class Person extends EventEmitter{
//     constructor(name){
//     super();
//     this._name= name;
//     }
//      get name() {
//         return this._name;
//     }
// }

// let celine=new Person ('Celine');
// celine.on('name',()=>{//this on is a listener
//     console.log('my name is'+celine.name);
// })
// celine.emit('name');