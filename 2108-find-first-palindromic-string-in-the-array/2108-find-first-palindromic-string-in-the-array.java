class Solution {
    public String firstPalindrome(String[] words) {
        for (int i = 0; i < words.length; i++) {
            if (helper(words[i]) == true) {
                return words[i];
            }
                System.out.println(words[i]);
        }
        return "";
    }

    boolean helper(String ip) {
        String rev = "";
        for (int i = ip.length() - 1; i >= 0; i--) {
            rev += String.valueOf(ip.charAt(i));
        }
        if (rev.equals(ip)) {
            return true;
        } else {
            return false;
        }
    }
}