import java.util.TreeMap;

/**
 * Created by LENOVO on 2018/11/9.
 */
public class MyTrie<E> {
    // 字典树节点
    private class TrieNode {
        public boolean isWord; // 是否是要给单词的结尾
        public TreeMap<Character, TrieNode> next;
        public E element;

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

    // 向Trie中添加一个新的单词word 及 对的element值
    public void add (String word, E element) {
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
            cur.element = element;
            size ++;
        }
    }

    // 向Trie中添加一对键值，如果key存在就覆盖，如果key不存在就添加
    public void put (String word, E element) {
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


        // 如果当前这个单词存在就覆盖 element值
        if (cur.isWord)
            cur.element = element;
        else { // 不存在就添加这个单词
            // 当前这个字符是这个单词的结尾
            cur.isWord = true;
            cur.element = element;
            size ++;
        }
    }

    // 删除Trie中的一条信息 有bug。
    public E remove (String word) {
//        TrieNode cur = root;
//        // 遍历出当前单词的每一个字符
//        for (int i = 0; i < word.length(); i++) {
//            char c = word.charAt(i);
//            // 下一个字符所对应的映射是否为空
//            if (cur.next.get(c) == null)
//                throw new IllegalArgumentException("word is not exists.");
//            // 切换到下一个节点
//            cur = cur.next.get(c);
//        }
//
//        // 单词存在的话 清除当前节点存储的信息
//        cur.isWord = false;
//        E element = cur.element;
//        cur.element = null;
//        size --;
//
//        // 如果当前节点后面没有任何映射的话，就需要开始自底向上的进行删除每一个与单词相关的节点。
//        if(cur.next.keySet().size() == 0) {
//            cur = root;
//            // 再自底向上的进行删除与单词有关的节点 底是当前节点的上一层， 顶是 第一层节点的上一层root
//            for (int i = word.length() - 1 - 1; i > - 1; i --) {
//                char c = word.charAt(i);
//                cur = cur.next.get(c);
//                if (cur.next.keySet().size() == 1) // 下一层的集合中的keys为1，说明没有涉及到其它单词
//                    cur.next = null; // 直接将下一层的映射Map直接赋值为空即可。
//                else {// 下一层的集合中keys不为1，说明涉及到了其它单词
//                    // 那么就直接终止循环
//                    break;
//                }
//            }
//        }
//
//        return element;
        // 暂时顶用
        return recursiveRemove(word);
    }

    // 删除Trie中的一条信息 递归删除
    public E recursiveRemove (String word) {
        return recursiveRemove(root, word, 0);
    }

    // 删除Trie中的一条信息 删除操作 递归算法
    private E recursiveRemove (TrieNode node, String word, int index) {
        E element = null;

        // 递归到底了
        if (index == word.length()) {
            if (node.isWord) {
                element = node.element;
                node.isWord = false;
                size --;
            }
            return element;
        }

        char c = word.charAt(index);
        TrieNode newNextNode = node.next.get(c);
        if (newNextNode == null)
            return element;
        element =  recursiveRemove(newNextNode, word, index + 1);

        // 回溯检查
        if (element != null) {
            // 下一个节点的映射为空
            if (!newNextNode.isWord && newNextNode.next.isEmpty()) {
                // 清空当前这个节点的信息
//                newNextNode.element = null;
//                newNextNode.next = null;

                // 在当前节点中剔除下一个节点 字符->映射的信息
                node.next.remove(c);
            }
        }

        return element;
    }

    // 向Trie中添加一个新的单词word 递归算法
    public void recusiveAdd (String word, E element) {
        recusiveAdd(root, word, 0, element);
    }

    // 向Trie中添加一个新的单词word 添加操作 递归算法
    private void recusiveAdd (TrieNode node,String word, int index,E element) {
        // 解决基本的问题，因为已经到底了
        if (index == word.length()) {
            if (!node.isWord) {
                node.isWord = true;
                node.element = element;
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
        recusiveAdd(node.next.get(c), word, index + 1, element);
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

    // 获取单词word中的element值
    public E get (String word) {
        TrieNode cur = root;
        for (int i = 0; i < word.length() ; i++) {
            char c = word.charAt(i);
            if (cur.next.get(c) == null)
                return null;
            cur = cur.next.get(c);
        }
//        if (!cur.isWord) {
//            return false;
//        } else {
//            return  true;
//        }
        return cur.element;
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

    // 正则表达式 查询单词word是否在Trie中，目前只支持 统配符 "."
    public boolean regexSearch (String regexWord) {
        return match(root, regexWord, 0);
    }

    // 正则表达式 匹配单词 递归算法
    private boolean match (TrieNode node, String word, int index) {
        if (index == word.length()) {
            return node.isWord;
        }

        char c = word.charAt(index);
        if (c != '.') {
            if (node.next.get(c) == null)
                return false;
            return match(node.next.get(c), word, index + 1);
        } else { // 如果这个字符为 .
            for (char nextChar: node.next.keySet()) {
                // 对下一个映射中所有的字符进行匹配，如果有一个匹配成功就返回true
                if (match(node.next.get(nextChar), word, index + 1))
                    return true;
            }

            // 到这里说明没有一个匹配成功，那么就是失败。
            return false;
        }
    }

    // 查询在Trie中是否有单词以 prefix 为前缀
    public boolean isPrefix (String prefix) {
        TrieNode cur = root;
        for (int i = 0; i < prefix.length() ; i++) {
            char c = prefix.charAt(i);
            if (cur.next.get(c) == null)
                return false;
            cur = cur.next.get(c);
        }
        return true;
    }



    // 获取字典树中存储的单词数量
    public int getSize () {
        return this.size;
    }
}
