// object containing all our lovely maths :)
import operations from './operations.js';
import buttons from './buttons.js';

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

const display = () => {

}

console.log(buttons.calc_display.innerText);
