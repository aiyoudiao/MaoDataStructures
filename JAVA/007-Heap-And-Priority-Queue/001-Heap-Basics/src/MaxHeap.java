public class MaxHeap<E extends Comparable<E>> {

    private MyArray<E> data;

    public MaxHeap (int capacity) {
        data = new MyArray<E>(capacity);
    }

    public MaxHeap () {
        data = new MyArray<E>();
    }

    // 返回堆中的元素个数
    public int size () {
        return data.getSize();
    }

    // 返回一个布尔值 表示堆中是否为空
    public boolean isEmpty () {
        return data.isEmpty();
    }

    // 返回一个完全二叉树的数组表示中，一个索引所表示的元素的父节点索引
    private int parent (int index) {
        if (index == 0)
            throw new IllegalArgumentException("index is 0. doesn't have parent.");
        return (index - 1) / 2;
    }

    // 返回一个完全二叉树的数组表示中，一个索引所表示的元素的左孩子节点索引
    private int leftChild (int index) {
        return index * 2 + 1;
    }

    // 返回一个完全二叉树的数组表示中，一个索引所表示的元素的右孩子节点索引
    private int rightChild (int index) {
        return index * 2 + 2;
    }
}
