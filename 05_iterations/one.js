//  For  Loop 

for (let i = 0; i < 10; i++) {
    const element =i;
    if (element == 5) {
        // console.log("5 is Best number");
    }
    // console.log(element);
}


for (let i = 0; i < 10; i++) {
    // console.log(`Table of ${i}`);
    for (let j = 0; j < 10; j++) {
        // console.log(`Inner Loop ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + '=' + i*j);
    }
}

let myArray = ["flash", "Batman", "Superman"]
// console.log(myArray.length);
for (let j = 0; j < myArray.length; j++) {
    const element = myArray[j];
    // console.log(element);
}

// break & Continue

// for (let i = 0; i <= 20; i++) {
//     if (i == 5) {
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`value of I is ${i}`);
// }

for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected 5`);
        break;
    }
    console.log(`value of I is ${i}`);
}
 