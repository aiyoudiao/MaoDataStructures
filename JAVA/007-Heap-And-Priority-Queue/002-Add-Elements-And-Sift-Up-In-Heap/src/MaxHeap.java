public class MaxHeap<E extends Comparable<E>> {

    private MyArray<E> data;

    public MaxHeap (int capacity) {
        data = new MyArray<E>(capacity);
    }

    public MaxHeap () {
        data = new MyArray<E>();
    }

    // 添加操作
    public void add (E e) {
        data.addLast(e);
        siftUp(data.getSize() - 1);
    }

    private void siftUp(int index) {
        // 递归写法
//        if (index <= 0) return;
//
//        int parentIndex = parent(index);
//        E current = data.get(index);
//        E parent = data.get(parentIndex);

//        if (current.compareTo(parent) > 0) {
//            data.set(index, parent);
//            data.set(parentIndex, current);
//            siftUp(parentIndex);
//        } else if (current.compareTo(parent) < 0) {
//            return;
//        } else { //current.compareTo(parent) == 0
//            return;
//        }

        // 非递归写法
//        int parentIndex = parent(index);
//        E current = data.get(index);
//        E parent = data.get(parentIndex);
//
//        while (index > 0 && current.compareTo(parent) > 0) {
//            data.set(index, parent);
//            data.set(parentIndex, current);
//            current = parent;
//            parentIndex = parent(parentIndex);
//            parent = data.get(parentIndex);
//        }

        // 递归简写
//        if (index <= 0) return;
//        if (data.get(index).compareTo(data.get(parent(index))) > 0){
//            swap(index, parent(index));
//            siftUp(parent(index));
//        }


        // 非递归简写
        while (index > 0 && data.get(index).compareTo(data.get(parent(index))) > 0) {
            swap(index, parent(index));
            index = parent(index);
        }
    }

    // 交换两个索引所对应的元素的位置
    public void swap (int index, int parentIndex) {

//        if (index < 0 || index >= size() || parentIndex < 0 || parentIndex >= size())
//            throw new IllegalArgumentException("Index is Illegal.");// 索引越界异常
//
//        // 获取这两个索引所对应的元素
//        E current = data.get(index);
//        E parent = data.get(parentIndex);
//
//        // 交换这两个索引所对应的值
//        data.set(index, parent);
//        data.set(parentIndex, current);

        // 直接复用数组中的方法
        swap(index, parentIndex);
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
