class Solution {

    public int findPermutationDifference(String s, String t) {
        int tot = 0;

        for (int i = 0; i < s.length(); i++) {
            tot += Math.abs(i - t.indexOf(s.charAt(i)));
        }
        return tot;

    }
}