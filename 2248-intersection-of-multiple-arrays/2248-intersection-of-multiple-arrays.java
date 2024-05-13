class Solution {
    public List<Integer> intersection(int[][] nums) {
        Map<Integer, Integer> unikMap = new HashMap();
        List<Integer> response = new ArrayList<>();
        for (int i = 0; i < nums.length; i++) {
            for (int j = 0; j < nums[i].length; j++) {
                // System.out.println("inner loop values=>" + nums[i][j]);
                int currentVal = nums[i][j];
                unikMap.putIfAbsent(currentVal, 0);
                if (unikMap.containsKey(currentVal)) {
                    int curVal = unikMap.get(currentVal);
                    unikMap.put(currentVal, curVal + 1);
                    if (unikMap.get(currentVal).intValue() > nums.length - 1) {
                        response.add(currentVal);
                    }
                }
            }
        }
        Collections.sort(response);
        return response;
    }
}
