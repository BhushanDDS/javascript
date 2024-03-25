// Write a JavaScript function to clone an array.
// Test Data:
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]
// const clonearr = (arr1) => {
//     return arr1.slice(0);

// }
// console.log(clonearr([1, 2, 4, 0]));

/*Write a JavaScript function to get the first element of an array.
 Passing the parameter 'n' will return the first 'n' elements of the array
const getFirst = (arr) => {
    return arr[0];

}
console.log(getFirst([
    [], 1, 2, 3, 4, 5
]));*/

/*
Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
const getLast = (arr) => {

    return arr[arr.length - 1];

}
console.log(getLast([
    [], 1, 2, 3
]));*/


/*Write a simple JavaScript program to join all elements of the following array into a string.
Sample array : myColor = ["Red", "Green", "White", "Black"];
const convertInto = (arr) => {
    return arr.join();
}
myColor = ["Red", "Green", "White", "Black"];
console.log(convertInto(myColor));*/

/* Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. 
For example if you accept 025468 the output should be 0-254-6-8.
const insertDash = (n) => {
    let str = n.toString();
    let result = [str[0]];
    for (let index = 1; index < str.length; index++) {
        if (str[index - 1] % 2 === 0 && str[index] % 2 === 0) {
            result.push('-', str[index]);
        } else {
            result.push(str[index]);
        }

    }
    return result.join('');
}
let n = 123456;
console.log(insertDash(n));
*/

/*Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8

const sortArr = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j = 1]) {
                swap(arr[j], arr[j + 1]);
            }
        }
    }
    return arr;
}

var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
console.log(sortArr(arr1));*/

/* Write a JavaScript program that accepts a string as input and swaps the case of each character.
 For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'

const swapCase = (str) => {
    let UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let LOWER = "abcdefghijklmnopqrstuvwxyz"

    let result = [];
    for (let i = 0; i < str.length; i++) {

        if (UPPER.indexOf(str[i]) !== -1) {
            result.push(str[i].toLowerCase());

        } else if (LOWER.indexOf(str[i]) !== -1) {
            result.push(str[i].toUpperCase());
        } else {
            result.push(str[i]);
        }
    }
    return result.join('');
}
console.log(swapCase("aBcdEfgH"));*/


/*Write a JavaScript program to find a pair of elements (indices of the two numbers) in a given array whose sum equals a specific target number.

Input: numbers= [10,20,10,40,50,60,70], target=50
Output: 2, 3
const fun = (arr, nm) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + arr[i + 1] == nm) {
            console.log(arr[i]);
            console.log(arr[i + 1]);
        }
    }
}

let numbers = [10, 20, 10, 40, 50, 60, 70]
let target = 90;
fun(numbers, target);*/

/*Write a JavaScript function to retrieve the value of a given property from all elements in an array.
Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
Expected result : [15, -22, 47]

const truthyTest = (arr) => {
    let index = -1;
    let lengthOfArr = arr ? arr.length : 0;
    let resultIndex = -1;
    let result = [];
    while (index < lengthOfArr) {
        let value = arr[index];

        if (value) {
            result[resultIndex] = value;
            resultIndex++;
        }

        index++;
    }
    console.log(result);
}
const turthyDetector = (arr) => {
    let val = -1;
    let result = [];
    for (let i = -1; i < arr.length; i++) {
        if (arr[i]) {
            result[++val] = arr[i];
        }
    }

    console.log(result);
}
truthyTest([NaN, 0, 15, false, -22, '', undefined, 47, null]);
turthyDetector([NaN, 0, 15, false, -22, '', undefined, 47, null]);*/


/*Write a JavaScript function to find the longest common starting substring in a set of strings.
Sample array : console.log(longest_common_starting_substring(['go', 'google']));
Expected result : "go"



const getIt = (str) => {


    arr = str.concat().sort();


    a1 = arr[0];
    a2 = arr[arr.length - 1];


    let l = a1.length;

    let i = 0;
    while (i < l && a1.charAt(i) == a2.charAt(i)) {
        i++;
    }

    console.log(a1.substring(0, i));


}


getIt(['go', 'google']);*/