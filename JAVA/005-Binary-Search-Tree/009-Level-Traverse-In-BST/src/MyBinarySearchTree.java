
import java.util.LinkedList;
import java.util.Queue;
import java.util.Stack;

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

    // 向以node为根的二分搜索树中插入元素E，递归算法
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

    // 查询二分搜索数中是否包含某个元素
    public boolean contains (E e) {
        return contains(root, e);
    }

    // 向以node为根的二分搜索树 进行查找  递归算法
    private boolean contains (Node node, E e) {

        // 解决最基本的问题 也就是遍历完所有节点都没有找到
        if (node == null) {
            return false;
        }

        // 如果 e 小于当前节点的e 则向左子树进发
        if (e.compareTo(node.e) < 0) {
           return contains(node.left, e);
        } else if (e.compareTo(node.e) > 0) { // 如果 e 大于当前节点的e 则向右子树进发
           return contains(node.right, e);
        } else { // 如果e 等于 当前节点 e 则直接返回true
            return true;
        }
    }

    // 二分搜索树的前序遍历
    public void preOrder () {
        preOrder(root);
    }

    // 前序遍历以node为根的二分搜索树 递归算法
    private void preOrder (Node node) {
        if (node == null) {
            return;
        }

        // 输出
        System.out.println(node.e);

        preOrder(node.left);
        preOrder(node.right);

//        // 这种逻辑也是可以的
//        if (node != null) {
//            // 输出
//            System.out.println(node.e);
//
//            preOrder(node.left);
//            preOrder(node.right);
//        }
    }

    // 二分搜索树的前序遍历 非递归算法
    public void preOrderNonRecursive () {

        Stack<Node> stack = new Stack<Node>();
        stack.push(root);

        Node node = null;
        while (!stack.isEmpty()) {
            node = stack.pop();

//            // 第一种写法 不符合要求也可以压入栈，但是不符合要求的在出栈后不处理它
//            if (node != null) {
//                System.out.println(node.e);
//                stack.push(node.right);
//                stack.push(node.left);
//            }

//            // 第二种写法 不符合要求也可以压入栈，但是不符合要求的在出栈后不处理它
//            if (node == null) continue;
//
//            System.out.println(node.e);
//            stack.push(node.right);
//            stack.push(node.left);

            // 写法三 不符合要求就不压入栈
            System.out.println(node.e);

            if (node.right != null) {
                stack.push(node.right);
            }
            if (node.left != null) {
                stack.push(node.left);
            }
        }
    }


    // 二分搜索树的中序遍历
    public void inOrder () {
        inOrder(root);
    }

    // 中序遍历以node为根的二分搜索树 递归算法
    private void inOrder (Node node) {
        if (node == null) return;

        inOrder(node.left);
        System.out.println(node.e);
        inOrder(node.right);

    }

    // 二分搜索树的中序遍历 非递归算法
    public void inOrderNonRecursive () {
    }

    // 二分搜索树的后序遍历
    public void postOrder () {
        postOrder(root);
    }

    // 后续遍历以node为根的二分搜索树 递归算法
    private void postOrder (Node node) {
        if (node == null) return;

        postOrder(node.left);
        postOrder(node.right);
        System.out.println(node.e);
    }

    // 二分搜索树的层序遍历
    public void levelOrder () {

        // java中的Queue是一个接口，但是它有链表和队列的实现，
        // 所以你可以new 一个子类链表类来进行进行使用，可以达到同样的效果
        Queue<Node> queue = new LinkedList<Node>();
        queue.add(root);

        while (!queue.isEmpty()) {
            Node node = queue.remove();
            System.out.println(node.e);

            if (node.left != null) {
                queue.add(node.left);
            }
            if (node.right != null) {
                queue.add(node.right);
            }
        }
    }

    @Override
    public String toString () {
        StringBuilder sb = new StringBuilder();
        generateBSTString(root, 0, sb);
        return sb.toString();
    }

    // 生成以node为根节点，深度为depth的描述二叉树的字符串
    private void generateBSTString (Node node, int depath, StringBuilder sb) {
        if (node == null) {
            sb.append(generateDepthString(depath) + "null\n");
            return;
        }

        sb.append(generateDepthString(depath) + node.e + "\n");

        generateBSTString(node.left, depath + 1, sb);
        generateBSTString(node.right, depath + 1, sb);

    }

    // 生成路径字符串
    private String generateDepthString (int depth) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < depth; i++) {
            sb.append("-- ");
        }
        return  sb.toString();
    }
}
