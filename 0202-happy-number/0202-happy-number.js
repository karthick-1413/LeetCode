/**
 * @param {number} n
 * @return {boolean}
 */

var set = new Set();
var final = 0;


var isHappy = function (n) {
    set = new Set();
    return calculate(n);

};


function calculate(n) {
    final =0;

    if (n === 1) {
        return true;
    }
    while (n > 0) {
        let mod = n % 10;
        y = (mod * mod);
        final += y;
       
        n = parseInt(n / 10);
        
    }
    if (final === 1) {
        return true;
    } else if ( final === 0) {
        return false;
    }
    if ( !set.has(final)) {
        set.add(final);
    }
    else {
        return false;
    }
    return calculate(final);
}