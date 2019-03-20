/**
 * Created by LENOVO on 2018/11/11.
 * 第三个版本的并查集 Quick Union优化版
 * 解决方案：考虑size 也就是某一棵树从根节点开始一共有多少个节点
 */
public class MyUnionFindThree implements IMyUnionFind {
    // 存储当前节点所指向的父节点
    private int[] parent;
    private int[] count; //count[i]中表示以i为根的集合元素的个数

    public MyUnionFindThree (int size) {
        parent = new int[size];
        count = new int[size];

        // 在初始的时候每一个节点都指向它自己
        // 也就是每一个节点都是独立的一棵树
        for (int i = 0; i < size; i++) {
            parent[i] = i;
            count[i] = 1;
        }
    }

    /**
     * @param q
     * @param p
     * 功能：将元素q和元素p这两个数据以及他们所在的集合进行合并
     * 时间复杂度：O(h) h 为树的高度
     */
    @Override
    public void unionElements(int q, int p) {
        int qRoot = find(q);
        int pRoot = find(p);

        // 如果两个节点的父节点相同 就不合并
        if (qRoot == pRoot)
            return;

        // 让元素比较少的根节点去指向元素比较大的根节点
        // 只有这样才会有比较大的概率在最终得到这棵树的深度不会发生太大的改变
        if (count[qRoot] < count[pRoot]) {
            parent[qRoot] = parent[pRoot];
            // 维护一下这个大的树的节点个数
            count[pRoot] += count[qRoot];
        } else { // height[qRoot] <= height[pRoot]
            // 如果元素个数一样的根节点，那谁指向谁都无所谓

            parent[pRoot] = parent[qRoot];
            count[qRoot] += count[pRoot];
        }
    }

    /**
     * @param q
     * @param p
     * @return is connected
     * 功能：查询元素q和元素p这两个数据是否在同一个集合中
     * 时间复杂度：O(h) h 为树的高度
     */
    @Override
    public boolean isConnected(int q, int p) {
        return find(q) == find(p);
    }

    // 查找元素所对应的集合编号
    private int find (int p) {
        if (p < 0 || p >= parent.length)
            throw new IllegalArgumentException("p is out of bound.");

        // 不断的去查查找当前节点的根节点
        // 根节点的索引是指向自己，如果根节点为 1 那么对应的索引也为 1。
        while (p != parent[p])
            p = parent[p];
        return p;
    }

    /**
     * @return size
     * 功能：当前并查集一共考虑多少个元素
     */
    @Override
    public int getSize() {
        return parent.length;
    }
}
