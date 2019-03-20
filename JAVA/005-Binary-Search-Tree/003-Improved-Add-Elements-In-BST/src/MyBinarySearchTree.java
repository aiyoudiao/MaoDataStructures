public class MyBinarySearchTree<E extends Comparable<E>> {

    private class Node {
       public E e;
       public Node left, right;

       public Node (E e) {
           this.e = e;
           left = null;
           right = null;
       }
    }

    private Node root;
    private int size;

    public MyBinarySearchTree () {
        root = null;
        size = 0;
    }

    public int getSize() {
        return size;
    }

    public boolean isEmpty () {
        return size == 0;
    }


    // 向二分搜索树中添加一个元素 e
    // 改进：直接调用add
    public void add (E e) {
        root = add(root, e);
    }

    // 向以node为根的二分搜索树种插入元素E，递归算法
    // 改进：返回插入的新节点后二分搜索树的根
    private Node add (Node node, E e) {

        // 处理最基本的问题
        if (node == null) {
            size ++;
            return new Node(e);
        }

        // 空的二叉树也是叉树。
        if (e.compareTo(node.e) < 0) {
            // 将处理后的结果赋值给node的左子树
            node.left =  add(node.left, e);
        } else if (e.compareTo(node.e) > 0) {
            // 将处理后的结果赋值给node的右子树
            node.right =  add(node.right, e);
        } // 如果相同 就什么都不做

        // 最后返回这个node
        return node;
    }

//    // 向二分搜索树中添加一个元素 e
//    public void add (E e) {
//        if (root == null) {
//            root = new Node(e);
//            size ++;
//        } else {
//            add(root, e);
//        }
//    }

//    // 向以node为根的二分搜索树种插入元素E，递归算法
//    private void add (Node node, E e) {
//        // node 是对用户屏蔽的，用户不用知道二分搜索树中有怎样一个节点结构
//
//        // 如果出现相同的元素就不进行操作了
//        if (e.equals(node.e)) {
//            return;
//        } else if (e.compareTo(node.e) < 0 && node.left == null) {
//            // 给左孩子赋值
//            node.left = new Node(e);
//            return;
//        } else if (e.compareTo(node.e) > 0 && node.right == null) {
//            // 给右海子赋值
//            node.right = new Node(e);
//            return;
//        }
//
//        // 这里是处理节点被占了，那就进入下一个层的二叉树中
//        if (e.compareTo(node.e) < 0) {
//            // 去左子树
//            add(node.left, e);
//        } else { // e.compareTo(node.e) > 0
//            // 去右子树
//            add(node.right, e);
//        }
//    }
}
