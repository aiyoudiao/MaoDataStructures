public interface IMyLinkedListStack<E> {

    /**
     * @param e
     * 入栈
     */
    void push (E e);


    /**
     * @return e
     * 出栈
     */
    E pop ();


    /**
     * @return e
     * 查看栈顶的一个元素
     */
    E peek ();


    /**
     * @return size
     * 查看栈中实际元素的个数
     */
    int getSize ();


    /**
     * @return not empty
     * 判断栈中是否为空
     */
    boolean isEmpty ();
}
