public class MyLinkedList<E> {

    // 隐藏内部实现，不需要让用户知道
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

    private Node head;
    private int size;

    public MyLinkedList () {
        head = null;
        size = 0;
    }

    // ...
    // 其它的构造函数，例如传进来一个数组，将数组转换为链表

    // 获取链表中元素的个数
    public int getSize () {
        return size;
    }

    // 返回当前链表是否为空
    public boolean isEmpty () {
        return size == 0;
    }

    // 在链表头部添加一个元素 e
    public void addFirst (E e) {
//        写法一
//        Node node = new Node(e, head);
//        head = node;

//        写法二
//        Node node = new Node(e);
//        node.next = head;
//        head = node;

//        写法三
        head = new Node(e, head);
        size ++;
    }

    // 在链表指定索引出插入一个元素
    public void insert (int index, E e) {

        if (index < 0 || index > size) {
            throw new IllegalArgumentException("add error. index < 0 or index > size");
        }
        if (index == 0) {
            addFirst(e);
        }else {
            // 第一个prev就是head
            Node prev = head;
//            不断的搜索 一直通过next来进行检索
            for (int i = 0; i < index - 1 ; i++) {
                prev = prev.next;
            }
//            第一种方式
//            Node node = new Node(e);
//            node.next = prev.next;
//            prev.next = node;

//            第二种方式
            prev.next = new Node(e, prev.next);
            size ++;

        }
    }

    // 在链表尾部添加一个元素
    public void addLast (E e) {

        insert(size, e);
    }
}
