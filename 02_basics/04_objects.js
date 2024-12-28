// const tinderUser = new Object ()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isloggedin = false

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
