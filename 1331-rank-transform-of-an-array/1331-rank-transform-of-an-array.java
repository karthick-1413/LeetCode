class Solution {
    public int[] arrayRankTransform(int[] arr) {
        int[] finalArr = new int[arr.length];
        int[] copyArr = arr.clone();
        int val = 1;
        Arrays.sort(copyArr);

        System.out.println(Arrays.toString(copyArr));

        Map<Integer, Integer> mapVal = new HashMap<>();
        
        for (int i = 0; i < copyArr.length; i++) {
            if (!mapVal.containsKey(copyArr[i])) {
                mapVal.put(copyArr[i], val);
                val++;
            }
        }
        System.out.println("map =>" + mapVal);

        for (int j = 0; j < arr.length; j++) {
            if (mapVal.containsKey(arr[j])) {
                finalArr[j] = mapVal.get(arr[j]);
            }
        }
        return finalArr;
    }
}