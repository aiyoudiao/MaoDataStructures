class Trie2 {
    // 字典树节点
    private class TrieNode {
        public boolean isWord; // 是否是要给单词的结尾
        public TrieNode[] next;

        public TrieNode (boolean isWord) {
            this.isWord = isWord;
            next = new TrieNode[26];
        }
        public TrieNode () {
            this(false);
        }
    }

    private TrieNode root;

    /** Initialize your data structure here. */
    public Trie2() {
        root = new TrieNode();
    }

    /** Inserts a word into the trie. */
    public void insert(String word) {
        // 指定游标
        TrieNode cur = root;
        // 遍历出当前单词的每一个字符
        for (short i = 0; i < word.length(); i++) {
            int index = word.charAt(i) - 'a';
            // 下一个字符所对应的映射是否为空
            if (cur.next[index] == null)
                cur.next[index] = new TrieNode();
            // 切换到下一个节点
            cur = cur.next[index];
        }
        // 如果当前这个单词是一个新的单词
        if (!cur.isWord) {
            // 当前这个字符是这个单词的结尾
            cur.isWord = true;
        }
    }

    /** Returns if the word is in the trie. */
    public boolean search(String word) {
        // 指定游标
        TrieNode cur = root;
        for (short i = 0; i < word.length() ; i++) {
            int index = word.charAt(i) - 'a';
            if (cur.next[index] == null)
                return false;
            cur = cur.next[index];
        }
        return cur.isWord;
    }

    /** Returns if there is any word in the trie that starts with the given prefix. */
    public boolean startsWith(String prefix) {
        TrieNode cur = root;
        for (short i = 0; i < prefix.length() ; i++) {
            int index = prefix.charAt(i) - 'a';
            if (cur.next[index] == null)
                return false;
            cur = cur.next[index];
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