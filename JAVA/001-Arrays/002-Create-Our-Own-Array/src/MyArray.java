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

    // 获取数组中的元素个数
    public int getSize () {
        return size;
    }

    // 获取数组的容量
    public int getCapacity () {
        return data.length;
    }

    // 返回数组是否为空
    public boolean isEmpty () {
        return size == 0;
    }
}
