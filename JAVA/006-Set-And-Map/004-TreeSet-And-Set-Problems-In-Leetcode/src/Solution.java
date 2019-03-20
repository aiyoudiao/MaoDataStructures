import java.util.TreeSet;

public class Solution {
    public int uniqueMorseRepresentations(String[] words) {
        String[] codes = {".-","-...","-.-.","-..",".","..-.","--.","....","..",".---",
                "-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",
                ".--","-..-","-.--","--.."};

        // 字母字符减去字符a后，可以得到这个字符位于字母字符表中对应的索引位置
        // 这个位置可以作为 摩尔斯密码表的索引
//        System.out.println(words[0].charAt(0) - 'a');

        TreeSet<String> treeSet = new TreeSet<String>();

        // 方式一
//        int index = 0;
//        String str = "";
//
//        for (int i = 0; i < words.length; i++) {
//            for (int j = 0; j < words[i].length() ; j++) {
//                index = words[i].charAt(j) - 'a';
//                str += codes[index];
//            }
//            treeSet.add(str);
//            str = "";
//        }

//        // 方式二
//        StringBuilder sb = new StringBuilder();
//        for (String word: words) {
//            for (int i = 0; i < word.length(); i++) {
//                sb.append(codes[word.charAt(i) - 'a']);
//            }
//            treeSet.add(sb.toString());
//            sb.delete(0, sb.length());
//        }

        // 方式三
        StringBuilder sb = new StringBuilder();
        for (String word: words) {
            for (char c: word.toCharArray())
                sb.append(codes[c - 'a']);

            treeSet.add(sb.toString());
            sb.delete(0, sb.length());
        }

        return treeSet.size();
    }
    public static void main(String[] args) {

        String[] words = {"gin", "zen", "gig", "msg"};
        int count = (new Solution()).uniqueMorseRepresentations(words);
        System.out.println(count);
    }
}