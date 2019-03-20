/**
 * 677. 键值映射
 * https://leetcode-cn.com/problems/map-sum-pairs/
 */
public class Solution {
    public static void main(String[] args) {
    // write your code here
        MapSum trie = new MapSum();
//        MapSum2 trie = new MapSum2();
        trie.insert("apple", 3);
        System.out.println(trie.sum("ap"));   // 返回 3

        trie.insert("app", 2);
        System.out.println(trie.sum("ap"));     // 返回 5

    }
}
