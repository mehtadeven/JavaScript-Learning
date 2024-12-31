//var c = 300
let a = 300

if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

function one () {
    const username = "Deven" 
    
    function two (){
        const Website = "Youtube" 
        console.log(username);
    }
    // console.log(Website);
    two()
}
// one()

if (true) {
    const username = "Deven"
    if (username === "Deven") {
        const website = "Youtube"
        // console.log(username + website); 
    }
    // console.log(website);
}
// console.log(username);

// ++++++++++   Intersiting Example    ++++++++++++

function addone(num) {
    return num + 1
}

addone(5)


const addtwo = function addtwo(num) {
    return num + 1
}

console.log(addtwo(4));
