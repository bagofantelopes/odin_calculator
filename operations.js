// Declare all math wizardry here!

const calc_add = (a, b) => a + b;

const calc_subtract = (a, b) => a - b;

const calc_multiply = (a, b) => a * b;

const calc_divide = (a, b) => a / b;

const calc_pow = (a, b) => Math.pow(a, b);

// rounds to two decimal places 
// apparently this way avoids some obscure rounding errors?
// probably wont even need this function in the end
const calc_round = a => +(Math.round(a + "e+2")  + "e-2");



export default {
    calc_add, 
    calc_subtract, 
    calc_multiply, 
    calc_divide,
    calc_pow,
    calc_round,
};
