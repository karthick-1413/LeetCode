/**
 * @param {number} n
 * @return {boolean}
 */

var set = new Set();


var isHappy = function (n) {
     let number = n.toString()
    
    let seen = new Set();
    
    while(!seen.has(number)){
        let result = 0;

        for(let i = 0; i < number.length; i++){
            result += Math.pow(parseInt(number[i]), 2)
        }

        if(result == 1) return true
            
        seen.add(number)
        
        number = result.toString();
    }

    return false;

};
function calculate(n) {
    let final = 0;

    if (n === 1) {
        return true;
    } else {
        while (n > 0) {
            let mod = n % 10;
            y = (mod * mod);
            final += y;
            n = parseInt(n / 10);
        }
        if (final === 1) {
            return true;
        }
        if (!set.has(final)) {
            set.add(final);
        }
        else {
            return false;
        }
        return calculate(final);
    }

}
