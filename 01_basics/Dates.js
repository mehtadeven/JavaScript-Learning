// Dates

let myDate = new Date()
// console.log(myDate.toString()); // Thu Dec 26 2024 08:01:32 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // Thu Dec 26 2024
// console.log(myDate.toJSON()); // 2024-12-26T08:00:55.716Z
// console.log(myDate.toLocaleDateString()); // 12/26/2024
// console.log(typeof(myDate));

// let myCreatedDate = new Date(2024, 0, 23)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2024, 0, 23, 5, 3) //1/23/2024, 5:03:00 AM
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("01-14-2023") 
// console.log(myCreatedDate.toLocaleString());

let TimeStmap = Date.now()
// console.log(TimeStmap);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1); 
// console.log(newDate.getDate()); 
// console.log(newDate.getDay()); 

// console.log(`The weak Day is ${newDate.getDay()} and Month ${newDate.getMonth()+1}`);

// newDate.toLocalString('default', {
//     weekday: "long"
// })