/**
 * @param {number} numRows
 * @return {number[][]}
 */


var generate = function (numRows) {
    let devArray = [];
    let prevInd = 0;
    for (let i = 0; i < numRows; i++) {
        let tempArr = [];
        tempArr.length = i + 1;
        const gArr = genArr(tempArr, i, devArray);
        devArray.push(gArr);
    }
    return devArray;
};

var genArr = (tempArr, currInd, devArray) => {
    tempArr[0] = 1;
    if (tempArr.length > 0) {
        tempArr[tempArr.length - 1] = 1;
    }
    for (let j = 1; j < tempArr.length - 1; j++) {
        const tot = findSum(currInd, devArray);
        tempArr[j] = tot;
    }
    prevInd = 0;
    return tempArr;
}

var findSum = (currInd, devArray) => {
    let sumArr = devArray[currInd - 1];
    for (let k = 0; k < sumArr.length; k++) {
        if (sumArr[prevInd + 1]) {
            const sum = sumArr[prevInd] + sumArr[prevInd + 1];
            prevInd++;
            return sum;
        }
    }
}