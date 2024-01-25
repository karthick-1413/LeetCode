function longestCommonPrefix(strs: string[]): string {
    const strLength = strs.length;
    let commStr = "";
    let currValue = strs[0];

    for (let i = 0; i < strLength; i++) {

      if (i > 0) {
        currValue = commStr;
      }
      const nextVal = strs[i + 1];
    const nextValLength = nextVal?.length ?? 0;

      // console.log(`currValue -->${currValue} nextVal ${nextVal}`);

      if (currValue && nextVal) {
        let firstComm = "";
        for (let j = 0; j <nextValLength; j++) {
          // console.log(`currValue[j] ${currValue[j]} nextVal[j] ${nextVal[j]}`);

          if (currValue[j] === nextVal[j]) {
            firstComm += currValue[j];
            // console.log(`firstComm ${firstComm} commStr ${commStr}`);
          }else{
            commStr = firstComm;
            break;
          } if (nextValLength - 1 === j) {
            commStr = firstComm;
            firstComm = "";
          }
        }
      } else if(currValue && nextVal === undefined){
        commStr = currValue;
      }
      else{
        commStr = "";
      }
      // console.log(`common String ${commStr}`);
    }
    return commStr;
};