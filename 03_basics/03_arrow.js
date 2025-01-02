const user = {
    username : "Deven",
    price : 999,

    welcomeMsg : function (){
        console.log(`${this.username}, Welcome to the website`);
        // console.log(this);
    }

}

// user.welcomeMsg()
// user.username = "Sam"
// user.welcomeMsg()

// console.log(this);

// function chai() {
//     const username = "Devvv"
//     console.log(this.username);
// }

// chai()

// const chai2 = function () {
//     const username = "Devvv"
//     console.log(this.username);
// }  

// chai2()

const chai3 =  () => {
    const username = "Devvv"
    console.log(this);
}  

// chai3() 

// const addTwo = (num1,num2) => {
//     return(num1 + num2) //Explicit Mehtod
// }

// const addTwo = (num1,num2) => num1 + num2 //implecit Method

// const addTwo = (num1,num2) =>( num1 + num2)

// const addTwo = (num1,num2) =>{username:"Deven"} //Well return Undefined because it Wright way to return object

const addTwo = (num1,num2) =>({username:"Deven"}) //Wrap into parentheses
console.log(addTwo(3,4));

// const myArray = [2, 5, 7, 8]

// myArray.forEach()