class Solution {
    public String[] findWords(String[] words) {
        String first = "qwertyuiop";
        String second = "asdfghjkl";
        String third = "zxcvbnm";
        List<String> finalVal = new ArrayList<>();

        for (int i = 0; i < words.length; i++) {
            String name = words[i];
            if (helper(first, name) == true) {
                finalVal.add(name);
            }
            if (helper(second, name) == true) {
                finalVal.add(name);
            }
            if (helper(third, name) == true) {
                finalVal.add(name);

            }
        }

        return finalVal.toArray(new String[finalVal.size()]);
    }

    static boolean helper(String keyBoard, String value) {
        boolean ret = true;
        value = value.toLowerCase();
        for (int i = 0; i < value.length(); i++) {
            if (keyBoard.contains(String.valueOf(value.charAt(i))) == true) {
                continue;
            } else {
                return false;
            }
        }
        return ret;
    }
}