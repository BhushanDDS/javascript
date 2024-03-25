// for (let i = 1; i <= 100; i++) {

//     if (i % 2 == 0) {
//         console.log(i, "is even number");
//     }

// }



// let i = 1;

// while (i <= 10) {
//     console.log("hello");
//     i++
// }



// let i = 1;
// do {
//     console.log("hello");
//     i++;
// } while (i <= 10);





// let str = "HiiBhushan";

// for (let val of str) {
//     console.log(val);
// }



// let Student = {
//     name: "Bhushan",
//     age: 21
// };


// for (let key in Student) {
//     console.log(key);
// }

// for (let key in Student) {
//     console.log("key is ", key, "Value is ", Student[key]);
// }


let flag = 0;
while (flag == 0 && flag != 1) {
    let val = prompt("enter a number");
    if (val == 33) {
        flag = 1;
        console.log("You gussed it right");
    }
}