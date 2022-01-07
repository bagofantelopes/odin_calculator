// object containing all our lovely maths :)
import operations from './operations.js';

let big_math = operations.big_brain_math;

// RegEx that finds all characters not numbers or decimal points (math operators!)
let re = /[^0-9\.]/g;

let re2 = /^[a-z]+$/

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

    // this clunky thing will catch all our trigs and logs
    // Definitely a smoother way to do this with the RegEx but those hurt my brain
    if (nums[0] == 'C' || nums[0] == 'S' || nums[0] == 'T' || nums[0] == 'L') {
        return big_math.handle(nums);
    }

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
    let arr = Array.from(nodelist, item => item.innerText);
    clear_display();
    let li = document.createElement('li');
    li.innerText = calculate(arr);
    calc_display.appendChild(li);
};


// simple function to clear the display
// called when clear button is pressed
const clear_display = () => {
    while(calc_display.firstChild) {
        calc_display.removeChild(calc_display.firstChild);
    };
}

// object to handle most events
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
        special(str) {
            let li = document.createElement('li');
            li.innerText = str;
            calc_display.appendChild(li);
        },
        default(e) {
            console.log("unhandled event: %s", e.type);
        },
    },
    handleEvent(e) {
        if (e.key === 'Backspace') {
            calc_display.removeChild(calc_display.lastChild);
        } else if (e.key === 'Enter') {
            display();
        }

        // grabs certain keypresses and puts them in an array
        // lets us call the advanced operations buttons with the keyboard!
        if (re2.test(e.key)) {
            key_arr.push(e.key.toUpperCase());
        }

        let b = document.querySelectorAll('button'); // gets a nodelist of all the buttons
        switch (e.type) {

            case "keydown":
                let str = key_arr.join('');

                b.forEach(button => {
                    if (e.key === button.innerText) {
                        this.handlers.keydown(e);
                    }

                    if (str === button.innerText) {
                        this.handlers.special(str);
                        // empty the array when done so it can be filled again (to call another advanced operation)
                        key_arr = []; 
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

// Generate event handlers for the advanced operations buttons
document.querySelectorAll('.advanced-operations-container button').forEach(button => {
    button.addEventListener('click', eventHandler);
});

// generic top level event handler for a few tricksy keydown events that don't want to fire otherwise
window.addEventListener('keydown', eventHandler, true);
let key_arr = [];

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