// array 

const myArr = [0, 1, 2, 3 , 4, 5]
const myHeros = ["Superman", "Spiderman"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[2]);

// Array method

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(0)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr); 

//  slice, splice

console.log("A ",myArr);
const myNew1 = myArr.slice(1, 3)

console.log(myNew1);
console.log("B ",myArr);

const myNew2 = myArr.splice(1, 3)
console.log(myNew2);