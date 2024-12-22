// Primitive & Non-Primitive

// 7 Types of Primitive DataType
// String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.33;

const isLoggedIn = false
const outsidetemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 34353454521324242n

//=======Refrence (Non-Primitive)=========

// Array, Object, Functions

const heros =["Ironman","Superman","Moneyman"]
let obj1 = { 
    name: "Deven",
    age : 31,
    IsLoggedIn: false,
}

const myfunction = function(){
    console.log("Hello World");
}

console.log(typeof outsidetemp);
