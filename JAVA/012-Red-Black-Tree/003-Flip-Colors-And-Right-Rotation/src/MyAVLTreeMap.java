/**
 * Created by LENOVO on 2018/11/16.
 */
public class MyAVLTreeMap<K extends Comparable<K>, V> implements IMyMap<K, V> {

    private MyAVLTree<K, V> avl;

    public MyAVLTreeMap () {
        avl = new MyAVLTree<K, V>();
    }
    /**
     * @param key   键
     * @param value 值
     */
    @Override
    public void add(K key, V value) {
        avl.add(key, value);
    }

    /**
     * @param key 键
     * @return 移除后的值
     * 删除字典中指定键的数据 并返回
     */
    @Override
    public V remove(K key) {
        return avl.remove(key);
    }

    /**
     * @param key 键
     * @return contain key
     * 字典中是否包含这个键对应的数据
     */
    @Override
    public boolean contains(K key) {
        return avl.contains(key);
    }

    /**
     * @param key 键
     * @return 键对应的数据
     * 获取字典中键对应的数据值
     */
    @Override
    public V get(K key) {
        return avl.get(key);
    }

    /**
     * @param key   键
     * @param value 值
     */
    @Override
    public void set(K key, V value) {
        avl.set(key, value);
    }

    /**
     * @return size
     * 返回字典中实际元素的个数
     */
    @Override
    public int getSize() {
        return avl.getSize();
    }

    /**
     * @return is empty
     * 字典是否为空
     */
    @Override
    public boolean isEmpty() {
        return avl.isEmpty();
    }
}
