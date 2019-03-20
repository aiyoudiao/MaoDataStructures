/**
 * Created by LENOVO on 2018/11/10.
 */
public interface IMyUnionFind {
    /**
     * @param q
     * @param p
     * 功能：将元素p和元素q这两个数据以及他们所在的集合进行合并
     */
    void unionElements (int q, int p);

    /**
     * @param q
     * @param p
     * @return is connected
     * 功能：查询元素p和元素q这两个数据是否在同一个集合中
     */
    boolean isConnected (int q, int p);

    /**
     * @return size
     * 功能：当前并查集一共考虑多少个元素
     */
    int getSize();

}
