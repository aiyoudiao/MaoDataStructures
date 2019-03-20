/**
 * Created by LENOVO on 2018/11/11.
 * 第一个版本的并查集 Quick Find版
 * isConnected 操作特别快
 */
public class MyUnionFindOne implements IMyUnionFind {
    // 存储数据所对应的集合的编号
    private int[] id;

    public MyUnionFindOne (int size) {
        for (int i = 0; i < size; i++) {
            id[i] = i;
        }
    }

    /**
     * @param q
     * @param p
     * 功能：将元素p和元素q这两个数据以及他们所在的集合进行合并
     * 时间复杂度：O(n)
     */
    @Override
    public void unionElements(int q, int p) {
        int pId = find(p);
        int qId = find(q);

        if (pId == qId)
            return;

        for (int i = 0; i < id.length; i++)
            if (id[i] == pId)
                id[i] = qId;
    }

    /**
     * @param q
     * @param p
     * @return is connected
     * 功能：查询元素p和元素q这两个数据是否在同一个集合中
     * 时间复杂度：O(1)
     */
    @Override
    public boolean isConnected(int q, int p) {
        return find(q) == find(p);
    }

    // 查找元素所对应的集合编号
    private int find (int p) {
        if (p < 0 || p >= id.length)
            throw new IllegalArgumentException("p is out of bound.");
        return id[p];
    }

    /**
     * @return size
     * 功能：当前并查集一共考虑多少个元素
     */
    @Override
    public int getSize() {
        return id.length;
    }
}
