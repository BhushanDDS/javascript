// const URL = "https://cat-fact.herokuapp.com/facts";

// // let para = document.querySelector("#para");
// // let btn = document.querySelector("#bt1");

// // const getInfo = async() => {
// //     console.log("getting values...");
// //     let response = await fetch(URL);
// //     let data = await response.json();

// //     para.innerText = data[1].text;
// //     console.log

// //         (data[1].text);
// // }


// // function getin() {
// //     fetch(URL).then((response) => {
// //         return response.json();
// //     }).then((data) => {
// //         console.log(data[1].text)
// //         para.innerText = data[1].text;

// //     })
// // }

// btn.addEventListener = ("click", getInfo);


// const button = document.querySelector('#wrapper button');

// const changeInput = () => {
//     const input = document.querySelector('#inputEl');
//     if (input) {
//         input.value = 'Hello World';
//     }
// };

// button.addEventListener('click', changeInput);

const button = document.getElementById('button');
let i1 = document.getElementById("firstName");
let i2 = document.getElementById("lastName");
let i3 = document.getElementById("fullName");
i3.innertText = i1.value + i2.value;
button.addEventListener('click', () => {
    // type in your code here

});