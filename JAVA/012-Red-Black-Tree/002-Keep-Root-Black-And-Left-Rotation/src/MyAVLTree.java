import java.util.ArrayList;

public class MyAVLTree<K extends Comparable<K>, V> {

    private class Node {
        public K key;
        public V value;
        public Node left, right;
        public int height;

        public Node (K key, V value) {
            this.key = key;
            this.value = value;
            left = null;
            right = null;
            height = 1;
        }
    }

    // 传入一个节点，然后返回这个节点的高度值
    private int getHeight (Node node) {
        // 如果一个node为空的话直接返回0
        if (node == null)
            return 0;
        return node.height;
    }

    // 获得 node 节点的平衡因子
    private int getBalanceFactor (Node node) {
        if (node == null)
            return 0;
        int leftHeight = getHeight(node.left);
        int rightHeight = getHeight(node.right);
        // 左子树的高度 - 右子树高度的值 = 平衡因子
        return leftHeight - rightHeight;
//        return Math.abs(leftHeight - rightHeight);
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

    public MyAVLTree() {
        root = null;
        size = 0;
    }

    // 对节点y进行向右旋转操作，返回旋转后新的根节点x
    //        y                              x
    //       / \                           /   \
    //      x   T4     向右旋转 (y)        z     y
    //     / \       - - - - - - - ->    / \   / \
    //    z   T3                       T1  T2 T3 T4
    //   / \
    // T1   T2
    private Node rightRotate (Node y) {
//        Node right = node.left.right;
//        node.left.right = node;
//        node = node.left;
//        node.right = right;
//        return node;

        Node x = y.left;
        Node T3 = x.right;

        // 向右旋转的过程
        x.right = y;
        y.left = T3;

        // 更新节点的height值，只需要更新x和y的即可
        y.height = Math.max(getHeight(y.left), getHeight(y.right)) + 1;
        x.height = Math.max(getHeight(x.left), getHeight(x.right)) + 1;

        return x;
    }

    // 对节点y进行向左旋转操作，返回旋转后新的根节点x
    //    y                             x
    //  /  \                          /   \
    // T1   x      向左旋转 (y)       y     z
    //     / \   - - - - - - - ->   / \   / \
    //   T2  z                     T1 T2 T3 T4
    //      / \
    //     T3 T4
    private Node leftRotate (Node y) {
        Node x = y.right;
        Node T2 = x.left;

        // 向左旋转的过程
        x.left = y;
        y.right = T2;

        // 更新节点的height值，只需要更新x和y的即可
        y.height = Math.max(getHeight(y.left), getHeight(y.right)) + 1;
        x.height = Math.max(getHeight(x.left), getHeight(x.right)) + 1;

        return x;
    }

    /**
     * @param key   键
     * @param value 值
     * 向二分搜索树中添加一条信息(key/value)
     */
    public void add(K key, V value) {
        root = add(root, key, value);
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

        // 更新 node的 height , 1 + 左右子树的height值最大的那个height值
        node.height = 1 + Math.max(getHeight(node.left), getHeight(node.right));

        // 计算平衡因子
        int balanceFactor = getBalanceFactor(node);
//        // 如果平衡因子的绝对值大于1 说明不满足AVL平衡二叉树的性质了
//        if (Math.abs(balanceFactor) > 1)
//            System.out.println("unbalanced : " + balanceFactor);

        // 平衡维护 右旋转操作 LL情况
        if (balanceFactor > 1 && getBalanceFactor(node.left) >= 0)
            return rightRotate(node);

        // 平衡维护 左旋转操作 RR情况
        if (balanceFactor < -1 && getBalanceFactor(node.right) <=0)
            return leftRotate(node);

        // 平衡维护 LR情况，先转换为LL情况
        if (balanceFactor > 1 && getBalanceFactor(node.left) < 0) {
            node.left = leftRotate(node.left);
            return rightRotate(node);
        }

        // 平衡维护 RL情况，先转换为RR情况
        if (balanceFactor < -1 && getBalanceFactor(node.right) > 0) {
            node.right = rightRotate(node.right);
            return leftRotate(node);
        }

        // 最后返回这个node
        return node;
    }

    /**
     * @param key 键
     * @return 移除后的值
     * 删除字典中指定键的数据 并返回
     */
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

        Node returnNode;
        if (key.compareTo(node.key) < 0) {
            node.left = remove(node.left, key);
            returnNode = node;
        } else if (key.compareTo(node.key) > 0) {
            node.right = remove(node.right, key);
            returnNode = node;
        } else { // e == node.e

            // 待删除的节点左子树为空
            if (node.left == null) {
                Node rightNode = node.right;
                node.right = null;
                size--;
                returnNode = rightNode;
            } else if (node.right == null) {// 待删除的节点右子树为空
                Node leftNode = node.left;
                node.left = null;
                size --;
                returnNode = leftNode;
            } else {

                // 待删除的节点左右子树都不为空的情况
                // 找到比待删除节点大的最小节点，即待删除节点右子树的最小节点
                // 用这个节点顶替待删除节点的位置
                Node successor = minimum(node.right);
//                successor.right = removeMin(node.right);
                successor.right = remove(node.right, successor.key);

                // 在removeMin这个操作中维护了一次size --，但是并没有删除节点
                // 所以这里要进行一次size ++操作
                size++;
                successor.left = node.left;

                // 让node这个节点与当前这个二分搜索树脱离关系
                node.left = node.right = null;
                // 维护一下size
                size--;

                returnNode = successor;
            }
        }

        // 当 待返回的returnNode 不为null时才进行这个节点的平衡性维护，否则不维护
        if (returnNode == null)
            return null;

        // 更新 returnNode 的 height , 1 + 左右子树的height值最大的那个height值
        returnNode.height = 1 + Math.max(getHeight(returnNode.left),
                getHeight(returnNode.right));

        // 计算平衡因子
        int balanceFactor = getBalanceFactor(returnNode);

//        // 如果平衡因子的绝对值大于1 说明不满足AVL平衡二叉树的性质了
//        if (Math.abs(balanceFactor) > 1)
//            System.out.println("unbalanced : " + balanceFactor);

        // 平衡维护 右旋转操作 LL情况
        if (balanceFactor > 1 && getBalanceFactor(returnNode.left) >= 0)
            return rightRotate(returnNode);

        // 平衡维护 左旋转操作 RR情况
        if (balanceFactor < -1 && getBalanceFactor(returnNode.right) <=0)
            return leftRotate(returnNode);

        // 平衡维护 LR情况，先转换为LL情况
        if (balanceFactor > 1 && getBalanceFactor(returnNode.left) < 0) {
            returnNode.left = leftRotate(returnNode.left);
            return rightRotate(returnNode);
        }

        // 平衡维护 RL情况，先转换为RR情况
        if (balanceFactor < -1 && getBalanceFactor(returnNode.right) > 0) {
            returnNode.right = rightRotate(returnNode.right);
            return leftRotate(returnNode);
        }

        // 最后返回这个returnNode
        return returnNode;
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
    public boolean contains(K key) {
        return getNode(root, key) != null;
    }

    /**
     * @param key 键
     * @return 键对应的数据
     * 获取字典中键对应的数据值
     */
    public V get(K key) {
        Node node = getNode(root, key);
        if (node == null) return null;

        return node.value;
    }

    /**
     * @param key   键
     * @param value 值
     */
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
    public int getSize() {
        return size;
    }

    /**
     * @return is empty
     * 字典是否为空
     */
    public boolean isEmpty() {
        return size == 0;
    }

    // 判断该二叉树是否是一棵二分搜索树
    public boolean isBinarySearchTree () {
        ArrayList<K> list = new ArrayList<K>();
        // 中序遍历后，添加到动态数组中的值会是以从小到大升序的样子排列
        inOrder(root ,list);
        for (int i = 1; i < list.size() ; i++)
            if (list.get(i - 1).compareTo(list.get(i)) > 0)
                return false;
        return true;

    }

    // 中序遍历
    private void inOrder (Node node, ArrayList<K> list) {
        // 递归到底的情况
        if (node == null)
            return;

        inOrder(node.left, list);
        list.add(node.key);
        inOrder(node.right, list);
    }

    // 判断该二叉树是否一棵平衡二叉树
    public boolean isBalanced () {
         return isBalanced(root);
    }

    // 辅助函数 递归判断某一个节点是否符合平衡二叉树的定义
    private boolean isBalanced (Node node) {
        // 能够递归到底，说明符合要求
        // 空的节点左右孩子高度差肯定为0，
        // 因为空树没有左右子树，更加谈不上下面去判断它的左右子树高度差是否会超过一。
        if (node == null)
            return true;

        // 如果当前节点的高度差大于1 说明不符合要求
        if (Math.abs(getBalanceFactor(node)) > 1)
            return false;

        // 递归的去判断当前节点的左右子树是否符合要求
        return isBalanced(node.left) && isBalanced(node.right);

        // 这种写法可以进行优化，就是优化成上面那样
//        if (isBalanced(node.left)) {
//            if (isBalanced(node.right))
//                return true;
//            else
//                return false;
//        } else
//            return false;
    }

    public static void main(String[] args) {

        // 傲慢与偏见
        System.out.println("Pride and Prejudice.");

        ArrayList<String> words = new ArrayList<String>();
        if (FileOperation.readFile("./file/pride-and-prejudice.txt",words)) {
            System.out.println("Total Words:" + words.size());

            MyAVLTree<String, Integer> myAvlTree = new MyAVLTree<String, Integer>();

            for (String word : words) {
                if (myAvlTree.contains(word)) {
                    myAvlTree.set(word, myAvlTree.get(word) + 1);
                } else {
                    myAvlTree.add(word, 1);
                }
            }
            System.out.println("No Repeat Total Words:" + myAvlTree.getSize());
            System.out.println("Frequency of Pride(Ppride 的 词频次数):" + myAvlTree.get("pride"));
            System.out.println("Frequency of Prejudice(Prejudice 的 词频次数):" + myAvlTree.get("prejudice"));
            System.out.println("Is Binary Search Tree : " + myAvlTree.isBinarySearchTree());
            System.out.println("Is Balanced : " + myAvlTree.isBalanced());

            // 进行删除操作
            for (String word: words) {
                myAvlTree.remove(word);

                // 删除元素之后，继续判断它是否保持的二分搜索树和平衡二叉树的性质
                if (!myAvlTree.isBinarySearchTree() || !myAvlTree.isBalanced())
                    throw new RuntimeException("Error");
            }

            // 删除所有的单词后，查看AVL树中单词的个数。
            System.out.println("Total Words:" + myAvlTree.getSize());
        }

        System.out.println("-----------------------------------------");

        // 狄更斯的双城记
        System.out.println("a-tale-of-two-cities.");
        words = new ArrayList<String>();
        if (FileOperation.readFile("./file/a-tale-of-two-cities.txt",words)) {
            System.out.println("Total Words:" + words.size());

            MyAVLTree<String, Integer> myAvlTree = new MyAVLTree<String, Integer>();

            for (String word : words) {
                if (myAvlTree.contains(word)) {
                    myAvlTree.set(word, myAvlTree.get(word) + 1);
                } else {
                    myAvlTree.add(word, 1);
                }
            }
            System.out.println("Total different Words:" + myAvlTree.getSize());
            System.out.println("Frequency of tale(tale 的 词频次数):" + myAvlTree.get("tale"));
            System.out.println("Frequency of two(two 的 词频次数):" + myAvlTree.get("two"));
            System.out.println("Is Binary Search Tree : " + myAvlTree.isBinarySearchTree());
            System.out.println("Is Balanced : " + myAvlTree.isBalanced());

            // 进行删除操作
            for (String word: words) {
                myAvlTree.remove(word);

                // 删除元素之后，继续判断它是否保持的二分搜索树和平衡二叉树的性质
                if (!myAvlTree.isBinarySearchTree() || !myAvlTree.isBalanced())
                    throw new RuntimeException("Error");
            }

            // 删除所有的单词后，查看AVL树中单词的个数。
            System.out.println("Total Words:" + myAvlTree.getSize());
        }
    }
}
