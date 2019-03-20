public interface IMyStack<E> {

    /**
     * @return 入栈
     */
    void push(E e);

    /**
     * @return 出栈
     */
    E pop();

    /**
     * @return 查看栈顶的元素
     */
    E peek();

    /**
     * @return 获取栈中实际元素的个数
     */
    int getSize();

    /**
     * @return 判断栈是否为空
     */
    boolean isEmpty();
}
