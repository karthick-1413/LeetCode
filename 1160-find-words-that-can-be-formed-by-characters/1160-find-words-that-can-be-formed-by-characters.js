/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
    let total = 0;
    words.forEach((x) => {
        let value = 0;
        let cloned = chars;
        for (let i = 0; i < x.length; i++) {
            if (cloned.includes(x[i])) {
                cloned = cloned.replace(x[i], "")
                value++;
            } else {
                break;
            }
        }
        console.log("x=>", x, " xlength=>", x.length, " value=>", value, " total=>", total)
        if (x.length === value) {

            console.log("chars =>", cloned)
            console.log("matching string =>", x)
            total += value;
        } else {
            console.log("false =>", x)
        }

        console.log("end loop total=>", total)
    })
    return total;
};