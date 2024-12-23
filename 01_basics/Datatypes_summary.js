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


// =============Stack & Heap=================
// Stack Holds all (Primitive) DataTypes, And Heap Holds (Non-primitive) DataTypes

let Youtubename = "Devenmehta"
let anothername = Youtubename

anothername = "HiteshChodury"

console.log(Youtubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}

let userTwo = userOne

userTwo.email = "deven@google.com"
console.log(userOne.email);
console.log(userTwo.email);
