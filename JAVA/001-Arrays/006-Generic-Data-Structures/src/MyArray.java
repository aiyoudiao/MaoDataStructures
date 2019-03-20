
public class MyArray<E> {
    private E [] data;
    private int size;

    // 构造函数，传入数组的容量capacity构造Array
    public MyArray (int capacity) {
        data = (E[])new Object[capacity];
        size = 0;
    }

    // 无参数的构造函数，默认数组的容量capacity=10
    public MyArray () {
//        this( capacity: 10);
        this(10);
    }

    // 获取数组中的元素实际个数
    public int getSize () {
        return size;
    }

    // 获取数组的总容量
    public int getCapacity () {
        return data.length;
    }

    // 返回数组是否为空
    public boolean isEmpty () {
        return size == 0;
    }

    // 给数组添加一个新元素
    public void add (E e) {

        if (size == data.length) {
            throw new IllegalArgumentException("add error. Array is full.");
        }

        data[size] = e;
        size++;
    }

    // 向所有元素后添加一个新元素 （与 add方法功能一样） push
    public void addLast (E e) {

        // 复用插入元素的方法
        insert(size, e);
    }

    // 在所有元素前添加一个新元素 unshift
    public void addFirst (E e) {

        insert(0, e);
    }

    // 在index索引的位置插入一个新元素e
    public void insert (int index, E e) {

        if (size == data.length) {
            throw new IllegalArgumentException("add error. Array is full.");
        }

        if (index < 0 || index > size) {
            throw new IllegalArgumentException("insert error. require index < 0 or index > size");
        }

        for (int i = size - 1; i >= index; i--) {
            data[i + 1] = data[i];
        }

        data[index] = e;
        size++;
    }

    // 获取index索引位置的元素
    public E get (int index) {

        if (index < 0 || index >= size) {
            throw new IllegalArgumentException("get error. index < 0 or index >= size ");
        }
        return data[index];
    }

    // 修改index索引位置的元素为e
    public void  set (int index, E e) {

        if (index < 0 || index >= size) {
            throw new IllegalArgumentException("get error. index < 0 or index >= size ");
        }
        data[index] = e;
    }

    // 查找数组中是否有元素e
    public boolean contain (E e) {

        for (int i = 0; i < size; i++) {
//            if (data[i] == e) { // 值比较 用 ==
            if (data[i].equals(e)) { // 引用比较 用 equals()

                    return true;
            }
        }
        return false;
    }

    // 查找数组中元素e所在的索引，如果不存在元素e，则返回-1
    public int find (E e) {

        for (int i = 0; i < size; i++) {
            if (data[i].equals(e)) {
                return i;
            }
        }
        return -1;
    }

    // 查找数组中所有元素e所在的索引，最后返回存放 所有索引值的 自定义数组
    public MyArray findAll (E e) {

        MyArray ma = new MyArray(20);

        for (int i = 0; i < size; i++) {
            if (data[i].equals(e)) {
                ma.add(i);
            }
        }

        return  ma;

//        int[] result = new int[ma.getSize()];
//        for (int i = 0; i < ma.getSize(); i++) {
//            result[i] = ma.get(i);
//        }
//
//        return  result;
    }

    // 从数组中删除第一个元素, 返回删除的元素
    public E removeFirst () {
        return remove(0);
    }

    // 从数组中删除最后一个元素, 返回删除的元素
    public E removeLast () {
        return remove(size - 1);
    }

    // 从数组中删除第一个元素e
    public void removeElement (E e) {
        int index = find(e);
        if (index != -1) {
            remove(index);
        }
//        if (contain(e)) {
//            int index = find(e);
//            remove(index);
//        }
    }

    // 从数组中删除所有元素e
    public void removeAllElement (E e) {

        int index = find(e);
        while (index != -1) {
            remove(index);
            index = find(e);
        }
//        while (contain(e)) {
//            removeElement(e);
//        }
    }

    // 从数组中删除index位置的元素, 返回删除的元素
    public E remove (int index) {

        if (index < 0 || index >= size) {
            throw new IllegalArgumentException("get error. index < 0 or index >= size ");
        }

        E temp = data[index];

        for (int i = index; i < size - 1; i++) {
            data[i] = data[i + 1];
        }
//        for (int i = index + 1; i < size; i++) {
//            data[i - 1] = data[i];
//        }
        size --;
//        data[size] = 0;
        data[size] = null;


        return temp;
    }

    @Override
    // @Override: 方法名 日期-开发人员
    public String toString () {

        StringBuilder sb = new StringBuilder();
        String arrInfo = "Array: size = %d，capacity = %d\n";
        sb.append(String.format(arrInfo, size, data.length));
        sb.append('[');
        for (int i = 0; i < size - 1; i ++) {
            sb.append(data[i]);
            sb.append(',');
        }
         if(!isEmpty()) {
            sb.append(data[size - 1]);
        }
        sb.append(']');

        return sb.toString();
    }
}
