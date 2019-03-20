import java.util.TreeMap;

class MapSum {
    // 字典树节点
    private class TrieNode {
        public int val; //作为映射所需要存储的值value
        public boolean isWord; // 是否是要给单词的结尾
        public TreeMap<Character, TrieNode> next;

        public TrieNode (boolean isWord, int value) {
            this.val = value;
            this.isWord = isWord;
            next = new TreeMap<Character, TrieNode>();
        }
        public TrieNode (int value) {
            this(false, value);
        }
        public TrieNode () {
            this(false, 0);
        }

    }

    private TrieNode root;
    private int size;
    /** Initialize your data structure here. */
    public MapSum() {
        root = new TrieNode();
        size = 0;
    }

    public void insert(String key, int val) {
        insert(root, key, 0, val);
    }

    // 向Trie中添加一个新的单词word 添加操作 递归算法
    private void insert (TrieNode node,String word, int index, int value) {
        // 解决基本的问题，因为已经到底了
        if (index == word.length()) {
            if (!node.isWord) {
                node.isWord = true;
                node.val = value;
                size ++;
            } else
                node.val = value;
            return;
        }

        // 获取指定索引位置的字符
        char c = word.charAt(index);
        // 下一个字符所对应的映射是否为空 为空就添加
        if (node.next.get(c) == null)
            node.next.put(c, new TrieNode());
        // 继续递归
        insert(node.next.get(c), word, index + 1, value);
    }

    // 单词匹配 求和
    public int sum(String prefix) {
        int result = 0;
        TrieNode cur = root;
        // 正常匹配
        for (int i = 0; i < prefix.length() ; i++) {
            char c = prefix.charAt(i);
            if (cur.next.get(c) == null)
                return result;
            cur = cur.next.get(c);
        }

        // 以上匹配完成后，就可以开始模糊匹配了，匹配到所有单词就返回那个单词后返回最后的结果
        result = sum(cur, result);
        return result;
    }

    // 模糊匹配 求和 递归算法
    private int sum (TrieNode node,int result) {
//         方式一
        // 如果是一个单词，就将单词的val值进行相加
        if (node.isWord)
            result += node.val;

        // 如果下一个映射的keys为空，说明不能再继续查找了
        for (char nextChar: node.next.keySet())
            result = sum(node.next.get(nextChar), result);

        // 返回结果
        return result;

//        方式二
//        result = node.val;
//        for (char nextChar: node.next.keySet())
//            result += sum(node.next.get(nextChar), 0);
//        return result;
    }

}

/**
 * Your MapSum object will be instantiated and called as such:
 * MapSum obj = new MapSum();
 * obj.insert(key,val);
 * int param_2 = obj.sum(prefix);
 */