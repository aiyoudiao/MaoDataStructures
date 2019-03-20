public class MyLinkedListStack<E> implements IMyLinkedListStack<E> {
    private MyLinkedList<E> mkl;

    public MyLinkedListStack () {
        mkl = new MyLinkedList<E>();
    }

    /**
     * @param e 入栈
     */
    @Override
    public void push (E e) {
        mkl.addFirst(e);
    }

    /**
     * @return e
     * 出栈
     */
    @Override
    public E pop () {
        return mkl.removefirst();
    }

    /**
     * @return e
     * 查看栈顶的一个元素
     */
    @Override
    public E peek () {
        return mkl.getFirst();
    }

    /**
     * @return size
     * 查看栈中实际元素的个数
     */
    @Override
    public int getSize () {
        return mkl.getSize();
    }

    /**
     * @return not empty
     * 判断栈中是否为空
     */
    @Override
    public boolean isEmpty () {
        return mkl.isEmpty();
    }

    @Override
    public String toString () {
        int size = getSize();

        StringBuilder sb = new StringBuilder();
        sb.append("MyLinkedlistStack: 元素个数=" + size);
        sb.append(", stack top=[ ");
        for (int i = 0; i < size ; i++) {
            sb.append(mkl.get(i));
            sb.append("->");
        }
        sb.append("NULL ]");

        return sb.toString();
    }
}
