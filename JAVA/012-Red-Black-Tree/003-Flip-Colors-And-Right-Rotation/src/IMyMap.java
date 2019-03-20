public interface IMyMap<K, V> {
    /**
     * @param key 键
     * @param value 值
     *   在字典中添加数据
     */
    void add (K key, V value);

    /**
     * @param key 键
     * @return 移除后的值
     *  删除字典中指定键的数据 并返回
     */
    V remove (K key);

    /**
     * @param key 键
     * @return contain key
     * 字典中是否包含这个键对应的数据
     */
    boolean contains (K key);

    /**
     * @param key 键
     * @return 键对应的数据
     * 获取字典中键对应的数据值
     */
    V get (K key);

    /**
     * @param key 键
     * @param value 值
     *  给字典中某个键设置相应的值
     */
    void set (K key, V value);

    /**
     * @return size
     * 返回字典中实际元素的个数
     */
    int getSize ();

    /**
     * @return is empty
     * 字典是否为空
     */
    boolean isEmpty ();
}
