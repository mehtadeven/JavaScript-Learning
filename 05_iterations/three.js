// for of 

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num)
}

const greetings = "hello world!"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('US', "United states of Americea")
map.set('FR', "Franch")

// console.log(map);

// for (const key of map) {
//     console.log(key);
// }


for (const [key,value] of map) {
    // console.log(key,":-",value);
}

const myObj = {
    'game1': 'NFS',
    'game2': 'spiderman'
}

// for (const [key,value] of myObj ) {
//     console.log(key,":-",value);
// }