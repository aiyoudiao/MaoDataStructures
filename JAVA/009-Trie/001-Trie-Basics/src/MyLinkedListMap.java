import java.util.ArrayList;

public class MyLinkedListMap<K, V> implements IMyMap<K, V> {

    // 隐藏内部实现，不需要让用户知道
    private class Node {
        public K key;
        public V value;
        public Node next;

        public Node (K key,V value, Node next) {
            this.key = key;
            this.value = value;
            this.next = next;
        }

        public Node (K key) {
            this(key, null, null);
        }

        public Node () {
            this(null,null, null);
        }

        @Override
        public String toString () {
            return key.toString() + " ----> " + value.toString();
        }
    }

    // 根据key来找到对应的节点
    private Node getNode (K key) {
        Node cur = dummyHead.next;

        while (cur!= null) {
            if (key.equals(cur.key)) {
                return cur;
            }
            cur = cur.next;
        }
        return null;
    }

    private Node dummyHead;
    private int size;

    public MyLinkedListMap () {
        dummyHead = new Node();
        size = 0;
    }

    /**
     * @param key   键
     * @param value 值
     */
    @Override
    public void add(K key, V value) {
        Node node = getNode(key);
        // 如果这个节点存在就直接赋值
        if (node != null) {
            node.value = value;
        } else { // 如果这个节点不存在就创建新节点并添加
            Node newNode = new Node(key, value, null);
            newNode.next = dummyHead.next;
            dummyHead.next = newNode;
            size ++;
        }
    }

    /**
     * @param key 键
     * @return 移除后的值
     * 删除字典中指定键的数据 并返回
     */
    @Override
    public V remove(K key) {
        Node prev = dummyHead;

        // 循环查找
        while (prev.next != null) {
            if (prev.next.key.equals(key)) { // 找到直接终止循环
                break;
            } else {
                prev = prev.next;
            }
        }

        // 是否符合要求 如果不符合要求，就相当于没有进行break操作,
        if (prev.next != null) {
            Node delNode = prev.next;
            prev.next = delNode.next;
            delNode.next = null;
            size -- ;
            return delNode.value;
        }

        return null;
    }

    /**
     * @param key 键
     * @return contain key
     * 字典中是否包含这个键对应的数据
     */
    @Override
    public boolean contains(K key) {
        return getNode(key) != null;
    }

    /**
     * @param key 键
     * @return 键对应的数据
     * 获取字典中键对应的数据值
     */
    @Override
    public V get(K key) {
        Node node = getNode(key);

        return node == null ? null : node.value;
    }

    /**
     * @param key   键
     * @param value 值
     */
    @Override
    public void set(K key, V value) {
        Node node = getNode(key);
        if (node != null) {
            node.value = value;
        } else {
            throw new IllegalArgumentException(key + " doesn't exist.");
        }
    }

    /**
     * @return size
     * 返回字典中实际元素的个数
     */
    @Override
    public int getSize() {
        return size;
    }

    /**
     * @return is empty
     * 字典是否为空
     */
    @Override
    public boolean isEmpty() {
        return size == 0;
    }

    public static void main(String[] args) {

        // 傲慢与偏见
        System.out.println("Pride and Prejudice.");

        ArrayList<String> words = new ArrayList<String>();
        if (FileOperation.readFile("./file/pride-and-prejudice.txt",words)) {
            System.out.println("Total Words:" + words.size());

            MyLinkedListMap<String, Integer> myLinkedListMap = new MyLinkedListMap<String, Integer>();

            for (String word : words) {
                if (myLinkedListMap.contains(word)) {
                    myLinkedListMap.set(word, myLinkedListMap.get(word) + 1);
                } else {
                    myLinkedListMap.add(word, 1);
                }
            }
            System.out.println("No Repeat Total Words:" + myLinkedListMap.getSize());
            System.out.println("Frequency of Pride(Ppride 的 词频次数):" + myLinkedListMap.get("pride"));
            System.out.println("Frequency of Prejudice(Prejudice 的 词频次数):" + myLinkedListMap.get("prejudice"));
        }

        System.out.println("-----------------------------------------");

        // 狄更斯的双城记
        System.out.println("a-tale-of-two-cities.");
        words = new ArrayList<String>();
        if (FileOperation.readFile("./file/a-tale-of-two-cities.txt",words)) {
            System.out.println("Total Words:" + words.size());

            MyLinkedListMap<String, Integer> myLinkedListMap = new MyLinkedListMap<String, Integer>();

            for (String word : words) {
                if (myLinkedListMap.contains(word)) {
                    myLinkedListMap.set(word, myLinkedListMap.get(word) + 1);
                } else {
                    myLinkedListMap.add(word, 1);
                }
            }
            System.out.println("Total different Words:" + myLinkedListMap.getSize());
            System.out.println("Frequency of tale(tale 的 词频次数):" + myLinkedListMap.get("tale"));
            System.out.println("Frequency of two(two 的 词频次数):" + myLinkedListMap.get("two"));
        }
    }
}
