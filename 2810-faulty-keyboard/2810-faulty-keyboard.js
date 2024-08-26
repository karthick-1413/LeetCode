/**
 * @param {string} s
 * @return {string}
 */
var finalString = function (s) {
    let value = "";
    s.split("").forEach((x)=>{
        if(x === "i"){
           value = value.split("").reverse().join(""); 
        }else{
            value+=x;
        }
    })
    return value;
};