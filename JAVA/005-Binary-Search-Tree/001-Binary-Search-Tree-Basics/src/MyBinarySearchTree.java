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
}
