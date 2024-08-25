/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    // console.log(word1.join("").toLowerCase())
    if(word1.join("").toLowerCase() === word2.join("").toLowerCase()){
        return true;
    }else{
        return false;
    }
};