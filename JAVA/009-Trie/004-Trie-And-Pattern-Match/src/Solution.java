/**
 * 211.添加与搜索单词 - 数据结构设计
 * https://leetcode-cn.com/problems/add-and-search-word-data-structure-design/
 */
public class Solution {
    public static void main(String[] args) {
    // write your code here
//        WordDictionary trie = new WordDictionary();
        WordDictionary2 trie = new WordDictionary2();

        trie.addWord("bad");
        trie.addWord("dad");
        trie.addWord("mad");
        System.out.println(trie.search("pad"));   // 返回 false
        System.out.println(trie.search("bad"));     // 返回 true
        System.out.println(trie.search(".ad")); // 返回 true
        System.out.println(trie.search("b.."));     // 返回 true

    }
}
