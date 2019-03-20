public class MySegmentTree<E> {

    private E[] tree;
    private E[] data;
    private IMyMerger<E> myMerger;
    public MySegmentTree (E[] arr, IMyMerger<E> merger) {
        // 拷贝一份数组元素
        data =(E[]) new Object[arr.length];
        for (int i = 0; i < arr.length; i++)
            data[i] = arr[i];

        // 初始化融合器
        this.myMerger = merger;

        // 初始化线段树 4倍空间足以存储线段树上所有的节点了。
        tree = (E[]) new Object[4 * arr.length];
        // 开始构建
        buildingSegmentTree(0, 0, data.length - 1);
    }

    // 在treeIndex的位置创建表示区间[l...r]的线段树
    public void buildingSegmentTree (int treeIndex, int left, int right) {

        // 如果这个区间长度为1
        if (left == right) {
            // tree[treeIndex] = data[right]; // 都一样
            tree[treeIndex] = data[left];
            return;
        }

        // 如果真的要表示一个区间的话，那么相应的处理方式是这样的，
        // 1. 先获取这个区间的左右节点的索引，这个节点一定会有左右孩子
        // 2. 先创建和这个节点的左右子树，基于两个区间才能创建线段树
        //      1. 计算这个区间的左右范围
        //      2. 计算公式：
        //         mid =  (left + right) / 2，
        //      3. 可能会出现整型溢出的问题，但是概率很低，
        //      4. 那么计算公式可以换一种写法：mid = left + (right - left) / 2
        //      3. 左子树区间为 left至mid，
        //      4. 右子树区间为 mid+1至right,
        // 3. 递归创建线段树
        // 4. 之后进行业务处理操作

        // 第一步
        int leftTreeIndex = leftChild(treeIndex);
        int rightTreeIndex = rightChild(treeIndex);

        // 第二步
        int middle = left + (right - left) / 2;

        // 第三步
        buildingSegmentTree(leftTreeIndex, left, middle);
        buildingSegmentTree(rightTreeIndex, middle + 1, right);

        // 第四步 进行业务处理，例如 求和、取最大值、取最小值、
        // 综合左右两个线段的信息，来得到当前的更大的这个线段相应的信息，
        // 如果去综合，是根据你的业务逻辑来决定的,
        // 使用一个如何去综合的接口，这样一来就会根据你传入的方法来进行综合的操作。
        // 这个和 初始化java中的优先队列时传入comparator接口的方法的意义是一样的，
        // 只不过comparator是比较器，用来在优先队列中如何比较两个元素值，
        // 而myMerger是融合器，用来线段树中两个元素如何去融合。
        tree[treeIndex] = myMerger.merge(tree[leftTreeIndex], tree[rightTreeIndex]);

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

    @Override
    public String toString () {
        StringBuffer sb = new StringBuffer();

        // 输出头部信息
        sb.append("SegmentTree:");
        sb.append("size:" + getSize() + ",\r\n");

        // 输出传入的数据信息
        sb.append("data = [");
        for (int i = 0; i < data.length - 1; i++)
            sb.append(data[i] + ",");
        if (data != null && data.length != 0)
            sb.append(data[data.length - 1]);
        sb.append("],\r\n");

        // 输出生成的线段树信息
        sb.append("tree = [");
        for (int i = 0; i < tree.length - 1 ; i++)
            sb.append(tree[i] + ",");
        if (tree != null && tree.length != 0)
            sb.append(tree[tree.length - 1]);
        sb.append("]");

        // 返回输出的总信息
        return sb.toString();
    }
}
