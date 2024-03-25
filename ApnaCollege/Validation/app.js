let name = document.getElementById("name");
let num = document.getElementById("num");
let gender = document.getElementById("gender");
let sub = document.getElementById("sub");

function validForm() {

    if (name.value === '' || num.value === '' || gender.value === '') {
        alert("please fill all the fields");
    } else {
        alert("submited")
    }
}