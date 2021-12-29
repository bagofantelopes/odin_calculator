// object containing all our lovely maths :)
import operations from './operations.js';

let re = /[^0-9]/g;

const operate = (num1, char, num2) => {
    clear_display(); // clear out display to make room for answer!
    if (char == '+') {
        return operations.calc_add(num1, num2+1);
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

const generate_equation = (arr) => {

    let str = arr.join('');

    let operators = [...str.matchAll(re)]; // makes an array of our operators
    console.log(operators);

    str = str.split(re); // makes an array of our operands
    console.log(str);
    
    return str;
}

const calc_display = document.getElementById('calc-display');

const display = () => {
    let nodelist = calc_display.querySelectorAll('li');
    let display_arr = Array.from(nodelist, item => item.innerText);

    generate_equation(display_arr);

    //calc_display.innerText = operate(numA, operator, numB);

    // this is the bare minimum to make it work in a janky way
    // let numA = parseInt(display_arr[0]);
    // let operator = display_arr[1];
    // let numB = parseInt(display_arr[2]);
    // calc_display.innerText = operate(numA, operator, numB);
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
    li.innerText = '-';
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
    // let display_arr = Array.from(nodelist, item => {
    //     if(isNaN(item)) {
    //         console.log('ahh');
    //         return parseInt(item.innerText);
    //     } else {
    //         return item.innerText;
    //     }
    // });
    // console.log(display_arr);
});