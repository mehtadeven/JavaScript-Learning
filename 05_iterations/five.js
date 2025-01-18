const coding = ["js","ruby","java","python","cpp"]

// coding.forEach(function(value){
//     console.log(value);
// })

coding.forEach( (greet) => {
    // console.log(greet);
})

function print (item) {
    // console.log(item);
}

// coding.forEach(print)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr); 
// } )

const Mycoding = [
    {
        laguageName : "javascript",
        laguagefileName : "js",
    },
    {
        laguageName : "java",
        laguagefileName : "java",
    },
    {
        laguageName : "python",
        laguagefileName : "py",
    }
]

Mycoding.forEach( (item) => {
    console.log(item.laguagefileName);
});