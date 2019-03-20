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

    // Sift Up 上浮操作
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
//        if (data.get(index).compareTo(data.get(parent(index))) > 0) {
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
        data.swap(index, parentIndex);
    }

    // 找到堆中最大的元素
    public E findMax () {
        if (data.getSize() == 0)
            throw new IllegalArgumentException("can not findMax when heap is empty.");
        return data.getFirst();
    }

    // 取出堆中最大元素
    public E extractMax () {
        // 找到堆中最大的元素
        E result = findMax();

        // 将最底层节最后一个节点放到 根节点处
//        data.set(0,data.removeLast());
        swap(0, data.getSize() - 1);
        data.removeLast();

        siftDown(0);

        return result;
    }

    // Sift Down 下沉操作
    private void siftDown (int index) {
        // 递归写法
//        int max = 0;
//        // 左孩子节点的索引越界了，那么一定没有右孩子节点，所以可以直接终止
//        if (leftChild(index) >= size()) return;
//
//        // 如果右孩子索引越界了，那么最大值的索引一定是左孩子节点的索引
//        if (rightChild(index) >= size())
//            max = leftChild(index);
//        else { // 两个孩子都有
//            // 左孩子是否大于等于右孩子，如果大的话最大的索引还是左孩子，反之为右孩子
//            if (data.get(leftChild(index)).compareTo(data.get(rightChild(index))) >= 0 )
//                max = leftChild(index);
//            else
//                max = rightChild(index);
//        }
//
//        // 判断当前节点的值是否大于等于当前 左右孩子节点中最大的那个节点的值
//        if (data.get(index).compareTo(data.get(max)) >= 0)
//            return; // 大的话可以直接终止
//        else
//            swap(index, max); // 否则就交换位置
//        siftDown(max); // 继续做下沉处理

//        // 递归简写
//        if (leftChild(index) >= data.getSize()) return;
//
//        int max = leftChild(index);
//
//        if (max + 1 < data.getSize() && data.get(max + 1).compareTo(data.get(max)) > 0)
//            max ++;
//        if (data.get(max).compareTo(data.get(index)) > 0)
//            swap(max, index);
//        siftDown(max);

        // 非递归写法
        // 左孩子节点的索引没有越界，就有下沉的可能
        while (leftChild(index) < data.getSize()) {
            // 默认左孩子节点的索引为 左右孩子中节点值最大的那个节点的索引
            int max = leftChild(index);

            // max + 1 表示的是 右孩子的节点的索引
            if (max + 1 < data.getSize() &&
                data.get(max + 1).compareTo(data.get(max)) > 0)
                max ++; // 右孩子存在并且还比左孩子值要大，那么最大值索引就是右孩子节点的索引
            if (data.get(max).compareTo(data.get(index)) > 0) {
              swap(max, index);
              // 赋值 交换位置后的索引
              index = max;
              continue;
            } else
              break;
        }
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
