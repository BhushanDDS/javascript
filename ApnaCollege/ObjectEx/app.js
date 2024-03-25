/* Write a JavaScript program to list the properties of a JavaScript object.
Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

let student = {
    name: "bhushan",
    sclass: "Mca",
    age: 12

};*/


/*Write a JavaScript program to delete the rollno property from the following object. 
Also print the object before or after deleting the property.

let student = {
    name: "abc",
    class: "4th",
    rollno: 34
};

console.log(student);
delete student.rollno;
console.log(student);*/

/*Write a JavaScript program to get the length of a JavaScript object.
Sample object :
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

let student = {
    name: "bhushan",
    class: "5th",
    rollno: 12,
    age: 8
};

let count = 0;
for (i in student) {
    count++;
}
console.log(count);*/

/*Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];
var library = [{
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }
];

for (i in library) {
    var book = "book by : " + library[i].author + "  named  " + library[i].title;
    if (library[i].readingStatus) {
        console.log("aleready comleted   " + book);
    } else {
        console.log("You have to read this    " + book);
    }
}*/

/*
Write a JavaScript program to get the volume of a cylindrical with four decimal places using object classes.
Volume of a cylinder : V = πr2h
where r is the radius and h is the height of the cylinder.
function Cylinder(hei, dim) {
    this.height = hei;
    this.dimeter = dim;
}

Cylinder.prototype.Volume = function() {
    var redius = this.dimeter / 2;
    return this.height * 3.14 * redius * redius;

}

var cyl = new Cylinder(7, 4);
console.log(cyl.Volume().toFixed(4));*/

/*Write a bubble sort algorithm in JavaScript.
let arr = [5, 4, 3, 2, 1];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

for (i in arr) {
    console.log(arr[i]);
}*/


/*Write a JavaScript program that returns a subset of a string.
Sample Data: dog
Expected Output: ["d", "do", "dog", "o", "og", "g"]

let str = "dog";
chk(str);

function chk(str) {
    let ans = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length + 1; j++) {
            ans.push(str.slice(i, j))
                // ans += str.substring(i, j);
        }
    }

    console.log(ans);

}*/