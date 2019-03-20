public class MyStack<E> implements IMyStack<E> {
    // 借用自定义个动态数组
    private MyArray<E> ma;

    public MyStack () {
       ma = new MyArray<E>();
    }

    public MyStack (int capacity) {
        ma = new MyArray<E>(capacity);
    }

    /**
     * @param e
     * @return 入栈
     */
    @Override
    public void push(E e) {
        ma.addLast(e);
    }

    /**
     * @return 出栈
     */
    @Override
    public E pop() {
        return ma.removeLast();
    }

    /**
     * @return 查看栈顶的元素
     */
    @Override
    public E peek() {
        return ma.getLast();
    }

    /**
     * @return 获取栈中实际元素的个数
     */
    @Override
    public int getSize() {
        return ma.getSize();
    }

    /**
     * @return 判断栈是否为空
     */
    @Override
    public boolean isEmpty() {
        return ma.isEmpty();
    }

    // 返回栈的容量
    public int getCapacity () {
        return ma.getCapacity();
    }

    @Override
    // @Override: 方法名 日期-开发人员
    public String toString () {
        int size = ma.getSize();
//        int capacity = ma.getCapacity();

        StringBuilder sb = new StringBuilder();
//        String arrInfo = "Stack: size = %d，capacity = %d\n";
//        sb.append(String.format(arrInfo, size, capacity));
        sb.append("Stack: [");
        for (int i = 0; i < size - 1; i ++) {
            sb.append(ma.get(i));
            sb.append(',');
        }
        if (!ma.isEmpty()) {
            sb.append(ma.getLast());
        }
        sb.append("] right is stack top !");

        return sb.toString();
    }
}
