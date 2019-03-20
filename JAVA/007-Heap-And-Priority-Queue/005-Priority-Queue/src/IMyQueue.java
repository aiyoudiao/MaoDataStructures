public interface IMyQueue<E> {
    /**
     * @param e
     *  入队
     */
    void enqueue (E e);

    /**
     * @return e
     *  出队
     */
    E dequeue ();

    /**
     * @return e
     *  查看队首的元素
     */
    E getFront ();

    /**
     * @return number
     *  获取队列中的实际元素个数
     */
    int getSize ();

    /**
     * @return bool
     *   获取队列是否为空的bool值
     */
    boolean isEmpty ();
}
