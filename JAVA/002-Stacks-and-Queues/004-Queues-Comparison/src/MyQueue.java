public class MyQueue<E> implements IMyQueue<E> {
    private MyArray<E> ma;

    public MyQueue () {
        ma = new MyArray<E>();
    }

    public MyQueue (int capacity) {
        ma = new MyArray<E>(capacity);
    }

    /**
     * @param e
     *  入队
     */
    @Override
    public void enqueue (E e) {
        ma.addLast(e);
    }

    /**
     * @return e
     *  出队
     */
    @Override
    public E dequeue () {
        return ma.removeFirst();
    }

    /**
     * @return e
     *  查看队首的元素
     */
    @Override
    public E getFront () {
        return ma.getFirst();
    }

    /**
     * @return number
     *  获取队列中的实际元素个数
     */
    @Override
    public int getSize () {
        return ma.getSize();
    }

    /**
     * @return bool
     *  获取队列是否为空的bool值
     */
    @Override
    public boolean isEmpty () {
        return ma.isEmpty();
    }

    // 获取队列容量
    public int getCapacity () {
        return ma.getCapacity();
    }

    @Override
    public String toString () {
        int size = ma.getSize ();
        StringBuilder sb = new StringBuilder();
        sb.append("Queue: head [");
        for (int i = 0; i < size - 1; i ++) {
            sb.append(ma.get(i));
            sb.append(',');
        }
        if(!isEmpty()) {
            sb.append(ma.getLast());
        }
        sb.append("] foot. left is queue top!");

        return sb.toString();
    }
}
