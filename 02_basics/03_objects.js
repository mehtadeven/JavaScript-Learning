// Singleton

// Object.create
// object literals 

const mySym = Symbol("Key1")

const JsUser = {
    name:"Deven",
    age:19,
    [mySym]: "myKey1",
    location:"Ahemedabad",
    "full name":"Mehta Deven",
    email : "devenmehta@gmail.com",
    isLoggedIn:false,
    lastLoginDays: ["Monday","tuesday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "deven@mehta.com" 
// Object.freeze(JsUser)
JsUser.email = "deven@microsoft.com" 
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Object");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Object 2, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
