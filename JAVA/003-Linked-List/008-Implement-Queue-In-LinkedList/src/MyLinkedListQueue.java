public class MyLinkedListQueue<E> implements IMyQueue<E> {

    private class Node {
        public E e;
        public Node next;

        public Node (E e, Node next) {
            this.e = e;
            this.next = next;
        }

        public Node (E e) {
            this(e, null);
        }

        public Node () {
            this(null, null);
        }

        @Override
        public String toString () {
            return e.toString();
        }
    }

    private Node head, tail;
    private int size;

    public MyLinkedListQueue () {
        head = tail = null;
        size = 0;
    }

    /**
     * @param e 入队
     */
    @Override
    public void enqueue(E e) {
//        // 第一种方式
//        Node node = new Node(e);
//        node.next = tail;
//        tail = node;

//        第二种方式
//        head = new Node(e, head);

        // 链表尾部为空
        if (tail == null) {
            tail = new Node(e);
            head = tail;
        } else {
            tail.next = new Node(e);
            tail = tail.next;
        }
        size ++;

        // 不需要管头节点，因为头节点是不需要动的。

    }

    /**
     * @return e
     * 出队
     */
    @Override
    public E dequeue() {

        if (isEmpty()) {
            throw new IllegalArgumentException("can not dequeue from an empty queue.");
        }

        Node node = head;
        head = head.next;
        node.next = null;
        if (head == null) {
            tail = null;
        }
        size --;

        return node.e;
    }

    /**
     * @return e
     * 查看队首的元素
     */
    @Override
    public E getFront() {

        if (isEmpty()) {
            throw new IllegalArgumentException("can not dequeue from an empty queue.");
        }

        return head.e;
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
        return size == 0;
    }

    @Override
    public String toString () {

        StringBuilder sb = new StringBuilder();
        sb.append("MyLinkedListQueue: 元素个数=" + size);
        sb.append(", queue front [ ");

        for (Node node = head; node != null; node = node.next) {
            sb.append(node);
            sb.append("->");
        }
        sb.append("NULL ] tail");

        return sb.toString();
    }

    public static void main(String[] args) {
        MyLinkedListQueue<Integer> mkls = new MyLinkedListQueue<Integer>();

        for (int i = 1; i <= 5 ; i++) {
            mkls.enqueue(i);
            System.out.println(mkls);
        }

        System.out.println(mkls.getFront());

        for (int i = 0; i < 5 ; i++) {
            System.out.println(mkls);
            mkls.dequeue();
        }
    }
}
