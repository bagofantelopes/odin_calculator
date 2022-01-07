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

// rounds to two decimal places 
// apparently this method avoids some obscure rounding errors?
const calc_round = a => +(Math.round(a + "e+2")  + "e-2");

const big_brain_math = {
    operations: {
        cos(a) {
            return calc_round(Math.cos(a));
        },
        sin(a) {
            return calc_round(Math.sin(a));
        },
        tan(a) {
            return calc_round(Math.tan(a));
        },
        logTen(a) {
            return calc_round(Math.log10(a));
        },
        ln(a) {
            return calc_round(Math.log(a));
        },
    },
    handle(nums) {

        if (nums[0] == 'C') {   
            nums = nums.split("");     
            nums.splice(0, 3);
            nums = nums.join('');
            return this.operations.cos(nums);

        } else if (nums[0] == 'S') {
            nums = nums.split("");
            nums.splice(0, 3);
            nums = nums.join('');
            return this.operations.sin(nums);

        } else if (nums[0] == 'T') {
            nums = nums.split("");
            nums.splice(0, 3);
            nums = nums.join('');
            return this.operations.tan(nums);

        } else if (nums[0] == 'L') {
            if (nums[1] == 'N') {
                nums = nums.split("");
                nums.splice(0, 2);
                nums = nums.join('');
                return this.operations.ln(nums);

            } else {
                nums = nums.split("");
                nums.splice(0, 3);
                nums = nums.join('');
                return this.operations.logTen(nums);    

            }

        }
    }
    
}


export default {
    calc_add, 
    calc_subtract, 
    calc_multiply, 
    calc_divide,
    calc_pow,
    calc_round,
    big_brain_math,
    // logTen,
    // ln,
    // cos,
    // sin,
    // tan,

};
