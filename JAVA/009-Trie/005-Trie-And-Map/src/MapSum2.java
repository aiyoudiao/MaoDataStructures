class MapSum2 {
    // 字典树节点
    private class TrieNode {
        public int val; //作为映射所需要存储的值value
        public TrieNode[] next;

        public TrieNode (int value) {
            this.val = value;
            next = new TrieNode[26];
        }

        public TrieNode () {
            this(0);
        }
    }

    private TrieNode root;
    /** Initialize your data structure here. */
    public MapSum2() {
        root = new TrieNode();
    }

    public void insert(String key, int val) {
        insert(root, key, 0, val);
    }

    // 向Trie中添加一个新的单词word 添加操作 递归算法
    private void insert (TrieNode node,String word, int index, int value) {
        // 解决基本的问题，因为已经到底了
        if (index == word.length()) {
            node.val = value;
            return;
        }

        // 获取指定索引位置的字符
        int i = word.charAt(index) - 'a';
        // 下一个字符所对应的映射是否为空 为空就添加
        if (node.next[i] == null)
            node.next[i] = new TrieNode();
        // 继续递归
        insert(node.next[i], word, index + 1, value);
    }

    // 单词匹配 求和
    public int sum(String prefix) {
        int result = 0;
        TrieNode cur = root;
        // 正常匹配
        for (int i = 0; i < prefix.length() ; i++) {
            int index = prefix.charAt(i) - 'a';
            if (cur.next[index] == null)
                return result;
            cur = cur.next[index];
        }

        // 以上匹配完成后，就可以开始模糊匹配了，匹配到所有单词就返回那个单词后返回最后的结果
//        result = sum(cur, result);
//        return result;
        return sum(cur, result);
    }

    // 模糊匹配 求和 递归算法
    private int sum (TrieNode node,int result) {
        // 如果是一个单词val不为 0，就将单词的val值进行相加
        if (node.val != 0) {
            result += node.val;
        }

        // 如果下一个映射的keys为空，说明不能再继续查找了
        for (TrieNode cur: node.next) {
            if (cur == null) continue;
            result = sum(cur, result);
        }

        // 返回结果
        return result;
    }
}

/**
 * Your MapSum object will be instantiated and called as such:
 * MapSum obj = new MapSum();
 * obj.insert(key,val);
 * int param_2 = obj.sum(prefix);
 */