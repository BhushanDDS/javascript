//Project01
const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        if (e.target.id === "grey") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "white") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "blue") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "yellow") {
            body.style.backgroundColor = e.target.id;
        }
    })
})


//Project
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === ' ' || isNaN(height) || height < 0) {
        results.innerHTML = `Enter Valid Height ${height}`;
    } else if (weight === ' ' || isNaN(weight) || weight < 0) {
        results.innerHTML = `Enter Valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `The BMI Is = ${bmi}`;

        if (bmi < 18.6) {
            results.innerHTML = `The BMI Is = ${bmi} Under Weight`;
        }
        if (18.6 < bmi < 24.9) {
            results.innerHTML = `The BMI Is = ${bmi} Normal Weight`;
        }
        if (24.9 > bmi) {
            results.innerHTML = `The BMI Is = ${bmi} Over Weight`;
        }
    }
});