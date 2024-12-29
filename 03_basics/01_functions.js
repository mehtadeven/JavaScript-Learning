// console.log("D");
// console.log("E");
// console.log("V");
// console.log("E");
// console.log("N");

function myName() {
  console.log("D");
  console.log("E");
  console.log("V");
  console.log("E");
  console.log("N");
}

// myName()

// function sumNumber ( num1, num2){
//     console.log(num1 + num2);
// }

function sumNumber ( num1, num2){
    
    // let result = num1 + num2
    // return result;

    return num1 + num2
}

const result = sumNumber(2, 3)

// console.log("Result :",result);

function loginUserMessage(username) {
    if (username === undefined) {
        // We can check the Upper values By (!username)
        console.log("Please Enter the UserName");
        return        
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Deven"));
console.log(loginUserMessage());
