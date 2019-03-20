
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

        // 空的二叉树也是二叉树。
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

    // 寻找二分搜索树的最小值元素
    public E minimum () {
        if (size == 0) {
            throw new IllegalArgumentException("BST is empty.");
        }

        return minimum(root).e;
    }

    // 返回以node为根的二分搜索树的最小值所在的节点
    private Node minimum (Node node) {
        // 向左走再也走不动了，就返回这个节点。
        if (node.left == null) return node;

        return minimum(node.left);
    }

    // 从二分搜索树种删除最小值所在节点，返回这个最小值
    public E removeMin () {
        E result = minimum();
//        removeMin(root);
        root = removeMin(root);
        return result;
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

    // 寻找二分搜索树的最大值元素
    public E maximum () {
        if (size == 0) {
            throw new IllegalArgumentException("BST is empty.");
        }

        return maximum(root).e;
    }

    // 返回以node为根的二分搜索树的最大值所在的节点
    private Node maximum (Node node) {
        // 向右走再也走不动了，就返回这个节点。
        if (node.right == null) return node;

        return maximum(node.right);
    }

    // 从二分搜索树种删除最大值所在节点，返回这个最大值
    public E removeMax () {
        E result = maximum();
        root = removeMax(root);
        return result;
    }

    // 删除掉以node为根的二分搜索树中的最大节点
    // 返回删除节点后新的二分搜索树的根
    private Node removeMax (Node node) {

        if (node.right == null) {
            Node leftNode = node.left;
            node.left = null;
            size --;
            return leftNode;
        }

        node.right = removeMax(node.right);
        return node;
    }

    // 从二分搜索树中删除元素e的节点
    public void remove (E e) {
        root = remove(root, e);
    }

    // 删除掉以node为根的二分搜索树中值为e的节点 递归算法
    // 返回删除节点后新的二分搜索树的根
    private Node remove(Node node, E e) {

        if (node == null) return null;

        if (e.compareTo(node.e) < 0) {
            node.left = remove(node.left, e);
            return node;
        } else if (e.compareTo(node.e) > 0) {
            node.right = remove(node.right, e);
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
