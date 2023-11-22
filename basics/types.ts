 
let age:number = 23;
let nameUser:string = 'Emilio Senguana'
let isSenior:boolean = true;
let person:Object = {};
let fruits:Object[] = [{}, {name:'maanzama'}]

let response:any = 'Payload';
response = 20;
response = true;
response = ['Hola'];

function sayHello():void{
    console.log('Hello') 
}

let responseTwo: unknown;
responseTwo = 20; 

let response3 = null; //no tiene valor 
let response4= undefined; // no esta declarada 


//Combinación de tipos
type ReponseSvc = string | null;

let responseSvc: ReponseSvc;
 

//Type Assertion 
let message: any = "";
let messageUppercase = <string> message;

messageUppercase.replace('d', 'f')
