'use strict'

//wybranie pól
const number1 = document.querySelector('input'[0]);
const number2 = document.querySelector('input'[1]);
const score = document.querySelector('#score');


console.log(number1, number2);

//zabezpieczenie przed przeładowaniem strony
const form = document.querySelector('form');
form.addEventListener('submit', (e)=>{
    e.preventDefault;

    // przycisk dodawania
    const plus = document.querySelector('#plus');
    function add_numbers() {
        score.innerHTML = parsefloat(number1.value) + parsefloat(number2.value);
    }
    plus.addEventListener('submit', add_numbers);

});



// przycisk odejmowania
const minus = document.querySelector('#minus');
function odd_numbers() {
    score.innerHTML = parsefloat(number1.value) - parsefloat(number2.value);
}
minus.addEventListener('submit', odd_numbers);

