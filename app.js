// object containing all our lovely maths :)
const operations = require('./operations')

const operate = (num1, operation, num2) => {
    if (operation == '+') {
        return operations.calc_add(num1, num2);
    } else if (operation == '-') {
        return operations.calc_subtract(num1, num2);
    } else if (operation == '*') {
        return operations.calc_multiply(num1, num2);
    } else if (operation == '/') {
        return operations.calc_divide(num1, num2);
    } else if (operation == '^') {
        return operations.calc_pow(num1, num2);
    } else {
        return 'ERR: SYNTAX'
    }
}

// let equation = operate(2, '#', 8);
// console.log(equation);

const display = () => {
    
}