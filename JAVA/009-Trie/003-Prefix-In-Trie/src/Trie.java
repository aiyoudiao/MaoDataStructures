import java.util.TreeMap;

class Trie {
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

    /** Initialize your data structure here. */
    public Trie() {
        root = new TrieNode();
        size = 0;
    }

    /** Inserts a word into the trie. */
    public void insert(String word) {
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

    /** Returns if the word is in the trie. */
    public boolean search(String word) {
        TrieNode cur = root;
        for (int i = 0; i < word.length() ; i++) {
            char c = word.charAt(i);
            if (cur.next.get(c) == null)
                return false;
            cur = cur.next.get(c);
        }
        return cur.isWord;
    }

    /** Returns if there is any word in the trie that starts with the given prefix. */
    public boolean startsWith(String prefix) {
        TrieNode cur = root;
        for (int i = 0; i < prefix.length() ; i++) {
            char c = prefix.charAt(i);
            if (cur.next.get(c) == null)
                return false;
            cur = cur.next.get(c);
        }
        return true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * Trie obj = new Trie();
 * obj.insert(word);
 * boolean param_2 = obj.search(word);
 * boolean param_3 = obj.startsWith(prefix);
 */