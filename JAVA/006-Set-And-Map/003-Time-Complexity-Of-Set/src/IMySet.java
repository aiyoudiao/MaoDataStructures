public interface IMySet<E> {
    /**
     * @param e
     * 添加操作
     */
    void add(E e);

    /**
     * @param e
     * 移除操作
     */
    void remove(E e);

    /**
     * @param e
     * @return contain
     * 是否包含指定元素
     */
    boolean contains(E e);

    /**
     * @return size
     * 获取实际元素个数
     */
    int getSize();

    /**
     * @return isempty
     * 集合是否为空
     */
    boolean isEmpty();
}
