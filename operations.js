// Declare all math wizardry here!

const calc_add = (a, b) => calc_round(a + b);

const calc_subtract = (a, b) => calc_round(a - b);

const calc_multiply = (a, b) => calc_round(a * b);

const calc_divide = (a, b) => {
    if (a == 0 && b == 0) {
        return "Nice try, chump!";
    };

    return calc_round(a / b);
}

const calc_pow = (a, b) => calc_round(Math.pow(a, b));

const logTen = (a) => Math.log10(a);

const ln = (a) => Math.log(a);

// rounds to two decimal places 
// apparently this way avoids some obscure rounding errors?
const calc_round = a => +(Math.round(a + "e+2")  + "e-2");



export default {
    calc_add, 
    calc_subtract, 
    calc_multiply, 
    calc_divide,
    calc_pow,
    calc_round,
    logTen,
    ln,

};
