// const tinderUser = new Object ()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularuser = {
    email : "someone@gmail.com",
    fullname : {
        userfullname : {
            firstname: "Deven",
            lastname: "Mehta"
        }
    }
} 

// console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1 : "a", 2 : "b",}
const obj2 = {3 : "c", 4 : "d",}

// const obj3 = { obj1 , obj2}
// const obj3 = Object.assign({},obj1, obj2) //optional perntases({}) Curly Bracket's
const obj3 = {...obj1, ...obj2}
// console.log(obj3)


const users = [
    {
        id : 1,
        email : "unkown@gmail.com"
    },
    {
        id : 2,
        email : "unkown2@gmail.com"
    },
    {
        id : 3,
        email : "unkown3@gmail.com"
    },
]

users [1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course ={
    coursename : "Js in Hindi",
    price : "999",    
    courseInstrutor : "Mehta Deven"
}

// course.courseInstrutor

// const {courseInstrutor} = course
const {courseInstrutor : Instrutor} = course //We can DeStructure The Variable

// console.log(courseInstrutor);
console.log(Instrutor);

// {
//     course : "JS hindi",
//     "name" : "Js Hindi",
//     price : "free",
// }

[
    {},
    {},
    {}
]