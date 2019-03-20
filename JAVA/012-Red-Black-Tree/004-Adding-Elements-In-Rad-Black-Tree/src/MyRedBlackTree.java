import java.util.ArrayList;

public class MyRedBlackTree<K extends Comparable<K>, V> implements IMyMap<K, V> {

    // 一个静态同时是不可以修改的bool型变量
    private static final boolean RED = true; // 红色
    private static final boolean BLACK = false; // 黑色

    private class Node {
        public K key;
        public V value;
        public Node left, right;
        public boolean color; // 指明这棵树是红色还是黑色

        public Node (K key, V value) {
            this.key = key;
            this.value = value;
            left = null;
            right = null;
            color = RED;
        }
    }

    // 在节点中搜索 key相同的节点 并返回 -私有方法
    private Node getNode (Node node, K key) {
        if (node == null) return null;

        if (key.compareTo(node.key) < 0)
            return getNode(node.left, key);
        else if (key.compareTo(node.key) > 0)
            return getNode(node.right, key);
        else //key.compareTo(node.key) == 0
            return node;
    }

    private Node root;
    private int size;

    public MyRedBlackTree () {
        root = null;
        size = 0;
    }

    // 判断节点node的颜色
    private boolean isRed (Node node) {
        if (node == null)
            return BLACK;
         return node.color;
    }

    //   node                     x
    //  /   \     左旋转         /  \
    // T1   x   --------->   node   T3
    //     / \              /   \
    //    T2 T3            T1   T2
    private Node leftRotate (Node node) {
        Node x = node.right;

        // 左旋转过程
        node.right = x.left;
        x.left = node;

        // 染色过程
        x.color = node.color;
        node.color = RED;

        // 返回x
        return x;
    }

    // 颜色翻转
    private void flipColors (Node node) {
        node.color = RED;
        node.left.color = BLACK;
        node.right.color = BLACK;
    }

    //     node                   x
    //    /   \     右旋转       /  \
    //   x    T2   ------->   y   node
    //  / \                       /  \
    // y  T1                     T1  T2
    private Node rightRotate (Node node) {
        Node x = node.left;

        // 右旋转过程
        node.left = x.right;
        x.right = node;

        // 染色过程
        x.color = node.color;
        node.color = RED;

        // 返回新节点
        return x;
    }

    /**
     * @param key   键
     * @param value 值
     * 向二分搜索树中添加一条信息(key/value)
     */
    @Override
    public void add(K key, V value) {
        root = add(root, key, value);
        // 保持根节点是黑色的
        root.color = BLACK;
    }

    // 向以node为根的二分搜索树中添加一条信息(key/value)，递归算法
    // 改进：返回插入的新节点后二分搜索树的根
    private Node add(Node node, K key, V value) {

        // 处理最基本的问题
        if (node == null) {
            size ++;
            return new Node(key, value);
        }

        // 空的二叉树也是二叉树。
        if (key.compareTo(node.key) < 0) {
            // 将处理后的结果赋值给node的左子树
            node.left =  add(node.left, key, value);
        } else if (key.compareTo(node.key) > 0) {
            // 将处理后的结果赋值给node的右子树
            node.right =  add(node.right, key, value);
        } else // 如果相同 就赋值
            node.value = value;

        // 红黑树性质的维护

        // 是否需要左旋转
        // 如果当前节点的右孩子是红色 并且 左孩子不是红色
        if (isRed(node.right) && !isRed(node.left))
            node = leftRotate(node);

        // 是否需要右旋转
        // 如果当前节点的左孩子是红色 并且 左孩子的左孩子也是红色
        if (isRed(node.left) && isRed(node.left.left))
            node = rightRotate(node);

        // 是否需要颜色的翻转
        // 当前节点的左孩子和右孩子全都是红色
        if (isRed(node.left) && isRed(node.right))
            flipColors(node);

        // 最后返回这个node
        return node;
    }

    /**
     * @param key 键
     * @return 移除后的值
     * 删除字典中指定键的数据 并返回
     */
    @Override
    public V remove(K key) {
        Node node = getNode(root, key);
        if (node == null) return null;

        root = remove(root, key);
        return node.value;

    }

    // 删除掉以node为根的二分搜索树中值为e的节点 递归算法
    // 返回删除节点后新的二分搜索树的根
    private Node remove(Node node, K key) {

        if (node == null) return null;

        if (key.compareTo(node.key) < 0) {
            node.left = remove(node.left, key);
            return node;
        } else if (key.compareTo(node.key) > 0) {
            node.right = remove(node.right, key);
            return node;
        } else { // e == node.e

            // 待删除的节点左子树为空
            if (node.left == null) {
                Node rightNode = node.right;
                node.right = null;
                size --;
                return rightNode;
            }

            // 待删除的节点右子树为空
            if (node.right == null) {
                Node leftNode = node.left;
                node.left = null;
                size --;
                return leftNode;
            }

            // 待删除的节点左右子树都不为空的情况
            // 找到比待删除节点大的最小节点，即待删除节点右子树的最小节点
            // 用这个节点顶替待删除节点的位置
            Node successor = minimum(node.right);
            successor.right = removeMin(node.right);

            // 在removeMin这个操作中维护了一次size --，但是并没有删除节点
            // 所以这里要进行一次size ++操作
            size ++;
            successor.left = node.left;

            // 让node这个节点与当前这个二分搜索树脱离关系
            node.left = node.right = null;
            // 维护一下size
            size --;

            return successor;
        }
    }

    // 返回以node为根的二分搜索树的最小值所在的节点
    private Node minimum (Node node) {
        // 向左走再也走不动了，就返回这个节点。
        if (node.left == null) return node;

        return minimum(node.left);
    }

    // 删除掉以node为根的二分搜索树中的最小节点
    // 返回删除节点后新的二分搜索树的根
    private Node removeMin (Node node) {
//        if (node.left == null) {
//            node = node.right;
//            size --;
//            return node;
//        }
//
//        return removeMin(node.left);

        if (node.left == null) {
            Node rightNode = node.right;
            node.right = null;
            size --;
            return rightNode;
        }

        node.left = removeMin(node.left);
        return node;
    }

    /**
     * @param key 键
     * @return contain key
     * 字典中是否包含这个键对应的数据
     */
    @Override
    public boolean contains(K key) {
        return getNode(root, key) != null;
    }

    /**
     * @param key 键
     * @return 键对应的数据
     * 获取字典中键对应的数据值
     */
    @Override
    public V get(K key) {
        Node node = getNode(root, key);
        if (node == null) return null;

        return node.value;
    }

    /**
     * @param key   键
     * @param value 值
     */
    @Override
    public void set(K key, V value) {
        Node node = getNode(root, key);
        if (node == null)
            throw new IllegalArgumentException(key + " doesn't exist!");
        else
            node.value = value;
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

            MyRedBlackTree<String, Integer> myRedBlackTree = new MyRedBlackTree<String, Integer>();

            for (String word : words) {
                if (myRedBlackTree.contains(word)) {
                    myRedBlackTree.set(word, myRedBlackTree.get(word) + 1);
                } else {
                    myRedBlackTree.add(word, 1);
                }
            }
            System.out.println("No Repeat Total Words:" + myRedBlackTree.getSize());
            System.out.println("Frequency of Pride(Ppride 的 词频次数):" + myRedBlackTree.get("pride"));
            System.out.println("Frequency of Prejudice(Prejudice 的 词频次数):" + myRedBlackTree.get("prejudice"));
        }

        System.out.println("-----------------------------------------");

        // 狄更斯的双城记
        System.out.println("a-tale-of-two-cities.");
        words = new ArrayList<String>();
        if (FileOperation.readFile("./file/a-tale-of-two-cities.txt",words)) {
            System.out.println("Total Words:" + words.size());

            MyRedBlackTree<String, Integer> myRedBlackTree = new MyRedBlackTree<String, Integer>();

            for (String word : words) {
                if (myRedBlackTree.contains(word)) {
                    myRedBlackTree.set(word, myRedBlackTree.get(word) + 1);
                } else {
                    myRedBlackTree.add(word, 1);
                }
            }
            System.out.println("Total different Words:" + myRedBlackTree.getSize());
            System.out.println("Frequency of tale(tale 的 词频次数):" + myRedBlackTree.get("tale"));
            System.out.println("Frequency of two(two 的 词频次数):" + myRedBlackTree.get("two"));
        }
    }
}
