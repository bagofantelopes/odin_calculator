// object containing all our lovely maths :)
import operations from './operations.js';

// RegEx that finds all characters not numbers or decimal points (math operators!)
let re = /[^0-9\.]/g; 

const operate = (num1, char, num2) => {
    clear_display(); // clear out display to make room for answer!
    if (char == '+') {
        return operations.calc_add(num1, num2);
    } else if (char == '-') {
        return operations.calc_subtract(num1, num2);
    } else if (char == '*') {
        return operations.calc_multiply(num1, num2);
    } else if (char == '/') {
        return operations.calc_divide(num1, num2);
    } else if (char == '^') {
        return operations.calc_pow(num1, num2);
    } else {
        return 'ERR: SYNTAX'
    }
} 


const calculate = (arr) => {
    // join the array into a single string
    let nums = arr.join('');
    // makes an array of operators based on the RegEx
    let operators = [...nums.matchAll(re)]; 
    // makes an array of operands
    nums = nums.split(re); 

    return nums.reduce((prevValue, currValue, currIndex) => {
        return operate(parseFloat(prevValue), operators[currIndex-1], parseFloat(currValue));
    });
}

const calc_display = document.getElementById('calc-display');

const display = () => {
    let nodelist = calc_display.querySelectorAll('li');
    let display_arr = Array.from(nodelist, item => item.innerText);

    let li = document.createElement('li');
    li.innerText = calculate(display_arr);
    calc_display.appendChild(li);
};


// simple function to clear the display
// called on clear-btn event
const clear_display = () => {
    while(calc_display.firstChild) {
        calc_display.removeChild(calc_display.firstChild);
    };
}

// NUMBER BUTTONS

const nine = document.getElementById('nine');
nine.addEventListener('click', () => {
    let li = document.createElement('li');
    li.innerText = '9';
    calc_display.appendChild(li);
});

const eight = document.getElementById('eight');
eight.addEventListener('click', () => {
    let li = document.createElement('li');
    li.innerText = '8';
    calc_display.appendChild(li);
});

const seven = document.getElementById('seven');
seven.addEventListener('click', () => {
    let li = document.createElement('li');
    li.innerText = '7';
    calc_display.appendChild(li);
});

const six = document.getElementById('six');
six.addEventListener('click', () => {
    let li = document.createElement('li');
    li.innerText = '6';
    calc_display.appendChild(li);
});

const five = document.getElementById('five');
five.addEventListener('click', () => {
    let li = document.createElement('li');
    li.innerText = '5';
    calc_display.appendChild(li);
});

const four = document.getElementById('four');
four.addEventListener('click', () => {
    let li = document.createElement('li');
    li.innerText = '4';
    calc_display.appendChild(li);
});

const three = document.getElementById('three');
three.addEventListener('click', () => {
    let li = document.createElement('li');
    li.innerText = '3';
    calc_display.appendChild(li);
});

const two = document.getElementById('two');
two.addEventListener('click', () => {
    let li = document.createElement('li');
    li.innerText = '2';
    calc_display.appendChild(li);
});

const one = document.getElementById('one');
one.addEventListener('click', () => {
    let li = document.createElement('li');
    li.innerText = '1';
    calc_display.appendChild(li);
});

const zero = document.getElementById('zero');
zero.addEventListener('click', () => {
    let li = document.createElement('li');
    li.innerText = '0';
    calc_display.appendChild(li);
});

const decimal = document.getElementById('decimal');
decimal.addEventListener('click', () => {
    let li = document.createElement('li');
    li.innerText = '.';
    calc_display.appendChild(li);
});

const negative = document.getElementById('negative');
negative.addEventListener('click', () => {
    let li = document.createElement('li');
    li.innerText = '(-';
    calc_display.appendChild(li);
});

// OPERATION BUTTONS

const clear = document.getElementById('clear-btn');
clear.addEventListener('click', () => {
    clear_display();
});

const pow = document.getElementById('pow-btn');
pow.addEventListener('click', () => {
    let li = document.createElement('li');
    li.innerText = '^';
    calc_display.appendChild(li);
});

const divide = document.getElementById('division-btn');
divide.addEventListener('click', () => {
    let li = document.createElement('li');
    li.innerText = '/';
    calc_display.appendChild(li);
});

const multiply = document.getElementById('multiplication-btn');
multiply.addEventListener('click', () => {
    let li = document.createElement('li');
    li.innerText = '*';
    calc_display.appendChild(li);
});

const subtract = document.getElementById('subtraction-btn');
subtract.addEventListener('click', () => {
    let li = document.createElement('li');
    li.innerText = '-';
    calc_display.appendChild(li);
});

const add = document.getElementById('addition-btn');
add.addEventListener('click', () => {
    let li = document.createElement('li');
    li.innerText = '+';
    calc_display.appendChild(li);
});

const equals = document.getElementById('equals-btn');
equals.addEventListener('click', () => {
    display();
});