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

    private Node dummyHead;
    private int size;

    public MyLinkedList () {
        dummyHead = new Node(null, null);
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
//        node.next = dummyHead.next;
//        dummyHead.next = node;

//        写法三
//        dummyHead.next = new Node(e, dummyHead.next);
//        size ++;

//        写法四
        insert(0, e);
    }

    // 在链表指定索引出插入一个元素
    public void insert (int index, E e) {

        if (index < 0 || index > size) {
            throw new IllegalArgumentException("add or insert error. index < 0 or index > size");
        }

        // 第一个prev就是dummyHead
        Node prev = dummyHead;
//            不断的搜索 一直通过next来进行检索，找指定索引的节点的前一个元素
        for (int i = 0; i < index ; i++) {
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

    // 在链表尾部添加一个元素
    public void addLast (E e) {

        insert(size, e);
    }

    // get
    public E get (int index) {

        if (index < 0 || index > size) {
            throw new IllegalArgumentException("get error. index < 0 or index > size");
        }

        Node cur = dummyHead.next;
        for (int i = 0; i < index ; i++) {
            cur = cur.next;
        }

        return cur.e;
    }

    // getFirst
    public E getFirst () {
        return get(0);
    }

    // getLast
    public E getLast () {
        return get(size - 1);
    }

    // set
    public void set (int index, E e) {

        if (index < 0 || index > size) {
            throw new IllegalArgumentException("set error. index < 0 or index > size");
        }

        Node node = dummyHead.next;
        for (int i = 0; i < index; i++) {
            node = node.next;
        }
        node.e = e;
    }

    // contains
    public boolean contains (E e) {

//        第一种方式
//        Node node = dummyHead;
//        for (int i = 0; i < size - 1 ; i++) {
//            node = node.next;
//
//            if (node.e.equals(e)) {
//                return true;
//            }
//        }

//        第二种方式
        Node node = dummyHead.next;
        while (node != null) {
            if (node.e.equals(e)) {
                return true;
            } else {
                node = node.next;
            }
        }
        return  false;
    }

    // remove
    public E remove (int index) {

        if (index < 0 || index > size) {
            throw new IllegalArgumentException("remove error. index < 0 or index > size");
        }

        Node prev = dummyHead;
        for (int i = 0; i < index ; i++) {
            prev = prev.next;
        }
        Node delNode = prev.next;
        prev.next = delNode.next;
        size --;

        E e = delNode.e;
        delNode.next = null;

        return e;
    }

    // removeFirst
    public E removefirst () {
       return remove(0);
    }

    // removeLast
    public E removeLast () {
        return remove(size - 1);
    }

    // 从链表中删除元素e (这个方法是新增的，根据元素删除元素)
    public void removeElement(E e){

        Node prev = dummyHead;
        while(prev.next != null){
            if(prev.next.e.equals(e))
                break;
            prev = prev.next;
        }

        if(prev.next != null){
            Node delNode = prev.next;
            prev.next = delNode.next;
            delNode.next = null;
            size --;
        }
    }

    @Override
    public String toString () {

        StringBuilder sb = new StringBuilder();
        sb.append("链表长度：" + size + "，链表信息：");
//        // 写法一
//        Node node = dummyHead.next;
//        while (node != null) {
//            sb.append(node + "->");
//            node = node.next;
//        }
//        写法二
        for (Node node = dummyHead.next; node != null ; node = node.next) {
            sb.append(node + "->");
        }

        sb.append("NULL");
        return sb.toString();
    }
}
