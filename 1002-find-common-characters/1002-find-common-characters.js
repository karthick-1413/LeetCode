/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
    let first = words[0];
    for (let i = 1; i < words.length; i++) {
        const word = words[i]
        let temp = "";
        word.split("").forEach((x) => {
            if (first.includes(x)) {
                temp += x;
                first = first.replace(x, "");
            }
        })
        first = temp
    }
    return first.split("");
}
