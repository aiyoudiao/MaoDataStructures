public class MyBSTSet<E extends Comparable<E>> implements IMySet<E> {

    // 二分搜索树对象
    private MyBinarySearchTree<E> myBST;

    public MyBSTSet () {
        myBST = new MyBinarySearchTree<E>();
    }

    /**
     * @param e 添加操作
     */
    @Override
    public void add(E e) {
        myBST.add(e);
    }

    /**
     * @param e 移除操作
     */
    @Override
    public void remove(E e) {
        myBST.remove(e);
    }

    /**
     * @param e
     * @return contain
     * 是否包含指定元素
     */
    @Override
    public boolean contains(E e) {

        return myBST.contains(e);
    }

    /**
     * @return size
     * 获取实际元素个数
     */
    @Override
    public int getSize() {
        return myBST.getSize();
    }

    /**
     * @return isempty
     * 集合是否为空
     */
    @Override
    public boolean isEmpty() {
        return myBST.isEmpty();
    }
}
