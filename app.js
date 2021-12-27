// object containing all our lovely maths :)
import operations from './operations.js';

const clear_display = () => {
    while(calc_display.firstChild) {
        calc_display.removeChild(calc_display.firstChild);
    };
}

const operate = (num1, char, num2) => {
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

const calc_display = document.getElementById('calc-display');


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
})

const equals = document.getElementById('equals-btn');
equals.addEventListener('click', () => {
    let nodelist = calc_display.querySelectorAll('li');
    let display_arr = Array.from(nodelist, item => item.innerText);
    let numA = parseInt(display_arr[0]);
    let operator = display_arr[1];
    let numB = parseInt(display_arr[2]);
    clear_display();
    calc_display.innerText = operate(numA, operator, numB);
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