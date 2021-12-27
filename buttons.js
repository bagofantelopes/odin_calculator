const calc_display = document.getElementById('calc-display');
let calc_str = '2';
calc_display.innerText = calc_str;
console.log(calc_display.innerText);


const nine = document.getElementById('nine');
nine.addEventListener('click', () => {
    calc_str = '9';
    console.log(calc_str);
});

const eight = document.getElementById('eight');
eight.addEventListener('click', () => {
    calc_display.value = '8';
    console.log(calc_display.value);
});

const seven = document.getElementById('seven');
seven.addEventListener('click', () => {

});

const six = document.getElementById('six');
six.addEventListener('click', () => {
    
});

const five = document.getElementById('five');
five.addEventListener('click', () => {
    
});

const four = document.getElementById('four');
four.addEventListener('click', () => {
    
});

const three = document.getElementById('three');
three.addEventListener('click', () => {
    
});

const two = document.getElementById('two');
two.addEventListener('click', () => {
    
});

const one = document.getElementById('one');
one.addEventListener('click', () => {
    
});

export default {
    nine,
    eight,
    seven,
    six,
    five,
    four,
    three,
    two,
    one,
    calc_display,
};