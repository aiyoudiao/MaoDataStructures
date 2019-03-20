class WordDictionary2 {
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
    public WordDictionary2() {
        root = new TrieNode();
    }

    /** Adds a word into the data structure. */
    public void addWord(String word) {
        addWord(root, word, 0);
    }

    /** 向Trie中添加一个新的单词word 添加操作 递归算法 **/
    private void addWord(TrieNode node,String word, int index) {
        // 解决基本的问题，因为已经到底了
        if (index == word.length()) {
            if (!node.isWord) {
                node.isWord = true;
            }
            return;
        }
        int key = word.charAt(index) - 'a';
        // 下一个字符所对应的映射是否为空 为空就添加
        if (node.next[key] == null)
            node.next[key] = new TrieNode();
        // 继续递归
        addWord(node.next[key], word, index + 1);
    }

    /** Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. */
    public boolean search(String word) {
        return match(root, word, 0);
    }

    /** 正则表达式 匹配单词 递归算法 **/
    private boolean match (TrieNode node, String word, int index) {
        if (index == word.length()) {
            return node.isWord;
        }

        char c = word.charAt(index);
        if (c != '.') {
            if (node.next[c - 'a'] == null)
                return false;
            return match(node.next[c - 'a'], word, index + 1);
        } else { // 如果这个字符为 .
            for (TrieNode nextNode: node.next) {
                if (nextNode == null) continue;
                // 对下一个映射中所有的字符进行匹配，如果有一个匹配成功就返回true
                if (match(nextNode, word, index + 1))
                    return true;
            }

            // 到这里说明没有一个匹配成功，那么就是失败。
            return false;
        }
    }

}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * WordDictionary obj = new WordDictionary();
 * obj.addWord(word);
 * boolean param_2 = obj.search(word);
 */