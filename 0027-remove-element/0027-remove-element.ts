function removeElement(nums: number[], val: number): number {
     const length =  nums.length;
    let value = 0;
    for(let i=0; i <  length; i++){
      if (nums[i] !== val) {
        nums[value++] = nums[i];
      } else {
        
      }
    }
    console.log(`nums ${nums}`);
    
    return value;
};