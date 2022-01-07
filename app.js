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
    //console.log(arr);
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

// object to handle all events
const eventHandler = {
    handlers: {
        click(e) {
            let li = document.createElement('li');
            li.innerText = e.target.innerText;
            calc_display.appendChild(li);
        },
        keydown(e) {
            
            if (e.key == '=') {
                display();
            } else { 
                let li = document.createElement('li');
                li.innerText = e.key;
                calc_display.appendChild(li);
            }
        },
        default(e) {
            console.log("unhandled event: %s", e.type);
        },
    },
    handleEvent(e) {
        let b = document.querySelectorAll('button'); // gets a nodelist of all the buttons
        switch (e.type) {
            case "keydown":
                b.forEach(button => {
                    if (e.key === button.innerText) {
                        this.handlers.keydown(e);
                    }
                });
                break;
            case "click":
                switch (e.target.innerText) {
                    case "=":
                        display()
                        break;
                    case "Clear":
                        clear_display();
                        break;
                    default:
                        this.handlers.click(e);
                        break;
                }
                break;
            default:
                this.handlers.default(e);
                break;
        }
    },
}

// window.addEventListener('keydown', eventHandler, true);

// Generates event handlers for the number buttons
document.querySelectorAll('.num-buttons-container button').forEach(button => {
    window.addEventListener('keydown', eventHandler, true)
    button.addEventListener('click', eventHandler)
});

// Generates event handlers for the operations buttons
document.querySelectorAll('.operations-buttons-container button').forEach(button => {
    window.addEventListener('keydown', eventHandler, true);
    button.addEventListener('click', eventHandler)

});


// OTHER BUTTONS

// if these aren't declared at window scope they don't seem to fire correctly
window.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
        calc_display.removeChild(calc_display.lastChild);
    } else if (e.key === 'Enter') {
        display();
    }
});

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