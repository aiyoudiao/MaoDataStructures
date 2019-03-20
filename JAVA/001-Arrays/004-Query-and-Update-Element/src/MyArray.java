
public class MyArray {
    private int [] data;
    private int size;

    // 构造函数，传入数组的容量capacity构造Array
    public MyArray (int capacity) {
        data = new int[capacity];
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
    public void add (int e) {

        if (size == data.length) {
            throw new IllegalArgumentException("add error. Array is full.");
        }

        data[size] = e;
        size++;
    }

    // 向所有元素后添加一个新元素 （与 add方法功能一样）
    public void addLast (int e) {

        // 复用插入元素的方法
        insert(size, e);
    }

    // 在所有元素前添加一个新元素
    public void addFirst (int e) {

        insert(0, e);
    }

    // 在index索引的位置插入一个新元素e
    public void insert (int index, int e) {

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
    public int get (int index) {

        if (index < 0 || index >= size) {
            throw new IllegalArgumentException("get error. index < 0 or index >= size ");
        }
        return data[index];
    }

    // 修改index索引位置的元素为e
    public void  set (int index, int e) {

        if (index < 0 || index >= size) {
            throw new IllegalArgumentException("get error. index < 0 or index >= size ");
        }
        data[index] = e;
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
