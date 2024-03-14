class Solution {
    public List<Integer> findDisappearedNumbers(int[] nums) {
     int a[] = new int[nums.length];
        List<Integer> list = new ArrayList<>();
        
        for(int i=0; i < nums.length; i++){
            a[nums[i]-1]++;
        }
        
        for(int i =0 ; i < a.length; i++ ){
            if(a[i] == 0) list.add(i+1);
        }
        return list;
    }
}
