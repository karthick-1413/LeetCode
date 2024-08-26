/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function (words) {
    for (let index = 0; index < words.length; index++) {
        if (words[index + 1] && words[index + 1].length === words[index].length) {
            let currValue = words[index];
            let nextValue = words[index + 1];
            let count = 0;
            for (let i = 0; i < currValue.length; i++) {
                if (nextValue.includes(currValue[i])) {
                    count++;
                    nextValue = nextValue.replace(currValue[i], "");
                } else {
                    break;
                }
            }
            if (count === currValue.length) {
                words.splice(index + 1, 1);
                index = -1;
            }
        }
    }
    return words;
};