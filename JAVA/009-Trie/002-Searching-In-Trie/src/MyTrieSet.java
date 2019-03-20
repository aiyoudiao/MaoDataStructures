/**
 * Created by LENOVO on 2018/11/9.
 */
public class MyTrieSet implements IMySet<String> {
    private MyTrie trie;

    public MyTrieSet () {
        trie = new MyTrie();
    }

    /**
     * @param s 添加操作
     */
    @Override
    public void add(String s) {
//        this.trie.add(s);
        this.trie.recusiveAdd(s);
    }

    /**
     * @param s 移除操作
     */
    @Override
    public void remove(String s) {

    }

    /**
     * @param s
     * @return contain
     * 是否包含指定元素
     */
    @Override
    public boolean contains(String s) {
//        return this.trie.contains(s);
        return this.trie.recursiveContains(s);
    }

    /**
     * @return size
     * 获取实际元素个数
     */
    @Override
    public int getSize() {
        return this.trie.getSize();
    }

    /**
     * @return isempty
     * 集合是否为空
     */
    @Override
    public boolean isEmpty() {
        return this.trie.getSize() == 0;
    }
}
