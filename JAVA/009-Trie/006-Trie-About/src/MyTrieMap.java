/**
 * Created by LENOVO on 2018/11/10.
 */
public class MyTrieMap<E> implements IMyMap<String, E>{
    // trie对象
    private MyTrie<E> trie;

    public MyTrieMap () {
        // 初始化
        trie = new MyTrie<E>();
    }
    /**
     * @param key   键
     * @param value 值
     */
    @Override
    public void add(String key, E value) {
        trie.add(key, value);
    }

    /**
     * @param key 键
     * @return 移除后的值
     * 删除字典中指定键的数据 并返回
     */
    @Override
    public E remove(String key) {
        return trie.remove(key);
    }

    /**
     * @param key 键
     * @return contain key
     * 字典中是否包含这个键对应的数据
     */
    @Override
    public boolean contains(String key) {
        return trie.contains(key);
    }

    /**
     * @param key 键
     * @return 键对应的数据
     * 获取字典中键对应的数据值
     */
    @Override
    public E get(String key) {
        return trie.get(key);
    }

    /**
     * @param key   键
     * @param value 值
     */
    @Override
    public void set(String key, E value) {
        trie.put(key, value);
    }

    /**
     * @return size
     * 返回字典中实际元素的个数
     */
    @Override
    public int getSize() {
        return trie.getSize();
    }

    /**
     * @return is empty
     * 字典是否为空
     */
    @Override
    public boolean isEmpty() {
        return trie.getSize() == 0;
    }
}
