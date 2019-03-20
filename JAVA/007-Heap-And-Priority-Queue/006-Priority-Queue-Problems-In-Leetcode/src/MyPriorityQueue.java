public class MyPriorityQueue<E extends Comparable<E>> implements IMyQueue<E>{
    private MaxHeap<E> maxHeap;
    public MyPriorityQueue () {
        maxHeap = new MaxHeap<>();
    }

    /**
     * @param e 入队
     */
    @Override
    public void enqueue(E e) {
        maxHeap.add(e);
    }

    /**
     * @return e
     * 出队
     */
    @Override
    public E dequeue() {
        return maxHeap.extractMax();
    }

    /**
     * @return e
     * 查看队首的元素
     */
    @Override
    public E getFront() {
        return maxHeap.findMax();
    }

    /**
     * @return number
     * 获取队列中的实际元素个数
     */
    @Override
    public int getSize() {
        return maxHeap.size();
    }

    /**
     * @return bool
     * 获取队列是否为空的bool值
     */
    @Override
    public boolean isEmpty() {
        return maxHeap.isEmpty();
    }
}
