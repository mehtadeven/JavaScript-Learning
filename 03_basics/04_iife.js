// Immediately Invoked Function Expressions

function Chai() {
    console.log(`DB CONNECTED`)
}

// Chai()

(function Chai() {
    // name IIFE
    console.log(`DB CONNECTED`)
})();

( (name) => {
    console.log(`My name us ${name} CONNECTED To DB`)
}) ('Deven')