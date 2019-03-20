public class MySegmentTree<E> {

    private E[] tree;
    private E[] data;
    public MySegmentTree (E[] arr) {
        // 拷贝一份数组元素
        data =(E[]) new Object[arr.length];
        for (int i = 0; i < arr.length; i++)
            data[i] = arr[i];

        // 初始化线段树 4倍空间足以存储线段树上所有的节点了。
        tree = (E[]) new Object[4 * arr.length];
    }

    public int getSize () {
        return data.length;
    }

    public E get (int index) {
        if (index < 0 || index >= data.length)
            throw new IllegalArgumentException("index is illegal.");
        return data[index];
    }

    // 辅助函数：返回完全二叉树的数组表示中，一个索引所表示的元素的左孩子节点的索引
    private int leftChild (int index) {
        return index * 2 + 1;
    }

    // 辅助函数：返回完全二叉树的数组表示中，一个索引所表示的元素的右孩子节点的索引
    private int rightChild (int index) {
        return index * 2 + 2;
    }

}
