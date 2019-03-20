/**
 * Created by LENOVO on 2018/11/16.
 */
public class MyAVLTreeSet<E extends Comparable<E>> implements IMySet<E> {
    private MyAVLTree<E, Object> avl;

    public MyAVLTreeSet () {
        avl = new MyAVLTree<E, Object>();
    }
    /**
     * @param e 添加操作
     */
    @Override
    public void add(E e) {
        avl.add(e, null);
    }

    /**
     * @param e 移除操作
     */
    @Override
    public void remove(E e) {
        avl.remove(e);
    }

    /**
     * @param e
     * @return contain
     * 是否包含指定元素
     */
    @Override
    public boolean contains(E e) {
        return avl.contains(e);
    }

    /**
     * @return size
     * 获取实际元素个数
     */
    @Override
    public int getSize() {
        return avl.getSize();
    }

    /**
     * @return isempty
     * 集合是否为空
     */
    @Override
    public boolean isEmpty() {
        return avl.isEmpty();
    }
}
