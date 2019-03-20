public class MyLoopQueue<E> implements IMyQueue<E> {
    private E[] data;
    private int front, tail;
    private int size;

    public MyLoopQueue (int capacity) {
        // 这个数组的容量为 传进来的指定容量+1，
        // 因为会有意识的浪费一个空间，只有+1后，
        // 才能装下用户期望传进来的所有数据
        data = (E[])new Object[capacity + 1];

        front = tail = size = 0;
    }

    public MyLoopQueue () {
        this(10);
    }

    public int getCapacity () {
        return data.length - 1;
    }

    private void resize (int newCapacity) {

        E[] newData = (E[]) new Object[newCapacity + 1];
        for (int i = 0; i < size; i++) {
//            索引可能会越界，于是就要取余一下，
//            如果越界了，就从队首开始
            newData[i] = data[(front + i) % data.length];
        }
        data = newData;
        front = 0;
        tail = size;
    }

    /**
     * @param e 入队
     */
    @Override
    public void enqueue(E e) {

        if ((tail + 1) % data.length == front) {
            resize(getCapacity() * 2);
        }

        data[tail] = e;
//        tail在队列中循环
        tail = (tail + 1) % data.length;
        size ++;
    }

    /**
     * @return e
     * 出队
     */
    @Override
    public E dequeue() {

        if(isEmpty()) {
            throw new IllegalArgumentException("can't dequeue from an empty queue.");
        }

        E e = data[front];
        data[front] = null;
        front = (front + 1) % data.length;
        size -- ;

        if (getCapacity() / 4 == size && getCapacity() / 2 != 0) {
            resize(getCapacity() / 2);
        }

        return e;
    }

    /**
     * @return e
     * 查看队首的元素
     */
    @Override
    public E getFront() {
        if (isEmpty()) {
            throw new IllegalArgumentException("queue is empty.");
        }
        return data[front];
    }

    /**
     * @return number
     * 获取队列中的实际元素个数
     */
    @Override
    public int getSize() {
        return size;
    }

    /**
     * @return bool
     * 获取队列是否为空的bool值
     */
    @Override
    public boolean isEmpty() {
        return front == tail;
    }

    @Override
    public String toString () {
        StringBuilder sb = new StringBuilder();
        sb.append(String.format("Queue: size = %d，capacity = %d \n", size, getCapacity()));
        sb.append("Queue: head [");
//        第一种遍历方式
//        for (int i = 0; i < size - 1; i ++) {
//            sb.append(data[(front + i) % data.length]);
//            sb.append(',');
//        }
//        if(!isEmpty()) {
//            sb.append(data[(front + size - 1) % data.length]);
//        }

        // 第二种遍历方式
        for (int i = front; i != tail ; i = (i + 1) % data.length) {
            sb.append(data[i]);

            if ((i + 1) % data.length != tail) {
                sb.append(',');
            }
        }

        sb.append("] foot. left is queue top!");
        sb.append("\n");

        return sb.toString();
    }

}
