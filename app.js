// object containing all our lovely maths :)
import operations from './operations.js';

// RegEx that finds all characters not numbers or decimal points (math operators!)
let re = /[^0-9\.  ]/g; 

// function which calls the correct mathematical operations
const operate = (num1, char, num2) => {
    clear_display(); // clear out display to make room for answer!
    if (char == '+') {
        return operations.calc_add(num1, num2);
    } else if (char == '-') {
        return operations.calc_subtract(num1, num2);
    } else if (char == 'x') {
        return operations.calc_multiply(num1, num2);
    } else if (char == '/') {
        return operations.calc_divide(num1, num2);
    } else if (char == '^') {
        return operations.calc_pow(num1, num2);
    } else {
        return 'ERR: SYNTAX'
    }
} 

// function which generates the equations that are passed to the 
// mathematical operations
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
// function for the main display
// called when equals button is pressed
const display = () => {
    let nodelist = calc_display.querySelectorAll('li');
    let display_arr = Array.from(nodelist, item => item.innerText);

    let li = document.createElement('li');
    li.innerText = calculate(display_arr);
    calc_display.appendChild(li);
};


// simple function to clear the display
// called when clear button is pressed
const clear_display = () => {
    while(calc_display.firstChild) {
        calc_display.removeChild(calc_display.firstChild);
    };
}

// general purpose object to handle all events
const eventHandler = {
    handlers: {
        click(e) {
            let li = document.createElement('li');
            li.innerText = e.target.innerText;
            calc_display.appendChild(li);
        },
        keydown(e) {
            let li = document.createElement('li');
            li.innerText = e.target.innerText;
            calc_display.appendChild(li);
        },
        default(e) {
            console.log("unhandled event: %s", e.type);
        },
    },
    handleEvent(e) {
        console.log(e.type);
        switch (e.type) {
            case "keydown":
                if (e.key == e.target.innerText)
                    this.handlers.keydown(e);
                break;
            case "click":
                this.handlers.click(e);
                break;
            default:
                this.handlers.default(e);
        }
    },
}

// Generates event handlers for the number buttons
document.querySelectorAll('.num-buttons-container button').forEach(button => {
    button.addEventListener('click', eventHandler)
    button.addEventListener('keydown', eventHandler, true)
});

// OPERATION BUTTONS

const clear = document.getElementById('clear-btn');
clear.addEventListener('click', () => {
    clear_display();
});

const pow = document.getElementById('pow-btn');
pow.addEventListener('click', (e) => {
    let li = document.createElement('li');
    li.innerText = e.target.innerText;
    calc_display.appendChild(li);
});

const divide = document.getElementById('division-btn');
divide.addEventListener('click', (e) => {
    let li = document.createElement('li');
    li.innerText = e.target.innerText;
    calc_display.appendChild(li);
});

const multiply = document.getElementById('multiplication-btn');
multiply.addEventListener('click', (e) => {
    let li = document.createElement('li');
    li.innerText = e.target.innerText;
    calc_display.appendChild(li);
});

const subtract = document.getElementById('subtraction-btn');
subtract.addEventListener('click', (e) => {
    let li = document.createElement('li');
    li.innerText = e.target.innerText;
    calc_display.appendChild(li);
});

const add = document.getElementById('addition-btn');


add.addEventListener('click', eventHandler);
add.addEventListener('keydown', eventHandler);

const equals = document.getElementById('equals-btn');
equals.addEventListener('click', () => {
    display();
});



// OTHER BUTTONS

const backSpace = document.getElementById('backspace-btn');
backSpace.addEventListener('click', () => {
    calc_display.removeChild(calc_display.lastChild);
});

const LOG = document.getElementById('log10');
LOG.addEventListener('click', () => {
    let li = document.createElement('li');
});

const LN = document.getElementById('ln');
LN.addEventListener('click', () => {
    let li = document.createElement('li');
});