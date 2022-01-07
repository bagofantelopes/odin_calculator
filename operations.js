// Declare all math wizardry here!

const calc_add = (a, b) => calc_round(a + b);

const calc_subtract = (a, b) => calc_round(a - b);

const calc_multiply = (a, b) => calc_round(a * b);

const calc_divide = (a, b) => {
    if (b == 0) {
        return "Nice try, champ!";
    };

    return calc_round(a / b);
}

const calc_pow = (a, b) => calc_round(Math.pow(a, b));

const logTen = (a) => Math.log10(a);

const ln = (a) => Math.log(a);

// rounds to two decimal places 
// apparently this method avoids some obscure rounding errors?
const calc_round = a => +(Math.round(a + "e+2")  + "e-2");

const sin = (a) => Math.sin(a);



export default {
    calc_add, 
    calc_subtract, 
    calc_multiply, 
    calc_divide,
    calc_pow,
    calc_round,
    logTen,
    ln,
    sin,

};
