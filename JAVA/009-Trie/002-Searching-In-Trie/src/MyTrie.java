import java.util.TreeMap;

/**
 * Created by LENOVO on 2018/11/9.
 */
public class MyTrie {
    // 字典树节点
    private class TrieNode {
        public boolean isWord; // 是否是要给单词的结尾
        public TreeMap<Character, TrieNode> next;

        public TrieNode (boolean isWord) {
            this.isWord = isWord;
            next = new TreeMap<Character, TrieNode>();
        }
        public TrieNode () {
            this(false);
        }
    }

    private TrieNode root;
    private int size;

    public MyTrie () {
        root = new TrieNode();
        size = 0;
    }

    // 向Trie中添加一个新的单词word
    public void add (String word) {
        // 指定游标
        TrieNode cur = root;
        // 遍历出当前单词的每一个字符
        for (int i = 0; i < word.length(); i++) {
            char c = word.charAt(i);
            // 下一个字符所对应的映射是否为空
            if (cur.next.get(c) == null)
                cur.next.put(c, new TrieNode());
            // 切换到下一个节点
            cur = cur.next.get(c);
        }
        // 如果当前这个单词是一个新的单词
        if (!cur.isWord) {
            // 当前这个字符是这个单词的结尾
            cur.isWord = true;
            size ++;
        }
    }

    // 向Trie中添加一个新的单词word 递归算法
    public void recusiveAdd (String word) {
        recusiveAdd(root, word, 0);
    }

    // 向Trie中添加一个新的单词word 添加操作 递归算法
    private void recusiveAdd (TrieNode node,String word, int index) {
        // 解决基本的问题，因为已经到底了
        if (index == word.length()) {
            if (!node.isWord) {
                node.isWord = true;
                size ++;
            }
            return;
        }

        // 获取指定索引位置的字符
        char c = word.charAt(index);
        // 下一个字符所对应的映射是否为空 为空就添加
        if (node.next.get(c) == null)
            node.next.put(c, new TrieNode());
        // 继续递归
        recusiveAdd(node.next.get(c), word, index + 1);
    }

    // 查询单词word是否在Trie中
    public boolean contains (String word) {
        TrieNode cur = root;
        for (int i = 0; i < word.length() ; i++) {
            char c = word.charAt(i);
            if (cur.next.get(c) == null)
                return false;
            cur = cur.next.get(c);
        }
//        if (!cur.isWord) {
//            return false;
//        } else {
//            return  true;
//        }
        return cur.isWord;
    }

    // 查询单词word是否在Trie中 递归算法
    public boolean recursiveContains (String word) {
        return recursiveContains(root, word, 0);
    }

    // 查询单词word是否在Trie中 查询操作 递归算法
    private boolean recursiveContains (TrieNode node, String word, int index) {
        if (index == word.length())
            return node.isWord;

        // 获取指定索引位置的字符
        char c = word.charAt(index);
        if (node.next.get(c) == null)
            return false;
        return recursiveContains(node.next.get(c), word, index + 1);
    }

    // 获取字典树中存储的单词数量
    public int getSize () {
        return this.size;
    }
}
