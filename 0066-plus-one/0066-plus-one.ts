function plusOne(digits: number[]) {
     const numLength = digits.length;
    let nums = "";
    for(let i=0; i < numLength; i++){
      nums += digits[i]+"";
    //   console.log(`nums string ${nums}`);
      
    }
    console.log(`nums string ${nums}`);
    let strToNum = BigInt(nums)+1n;
    // console.log(`strToNum ${strToNum}`);

    return strToNum.toString().split('');
};