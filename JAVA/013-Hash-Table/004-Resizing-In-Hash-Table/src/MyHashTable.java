import java.util.TreeMap;

public class MyHashTable<K, V> {

    private static final int upperTolerance = 10;
    private static final int lowerTolerance = 2;
    private static final int initCapacity = 7;

    private TreeMap<K, V>[] hashTable;
    private int M;
    private int size;

    public MyHashTable (int M) {
        this.M = M;
        this.size = 0;
        this.hashTable = new TreeMap[M];

        for (int i = 0; i < M; i++)
            hashTable[i] = new TreeMap<>();
    }

    public MyHashTable () {
        this(initCapacity);
    }

    // 根据key生成 哈希表索引
    private int hash (K key) {
        return (key.hashCode() & 0x7fffffff) % M;
    }

    // 获取实际存储的元素个数
    public int getSize () {
        return size;
    }

    // 添加元素
    public void add (K key, V value) {
//        int index = hash(key);
        TreeMap<K, V> map = hashTable[hash(key)];

        if (map.containsKey(key))
            map.put(key, value);
        else {
            map.put(key, value);
            size ++;

            // N / M >= upperTolerance
            // size / M >= upperTolerance
            if (size >= upperTolerance * M)
                resize(2 * M);
        }
    }

    // 删除元素
    public V remove (K key) {
        TreeMap<K, V> map = hashTable[hash(key)];

        V value = null;
        if (map.containsKey(key)) {
            value = map.remove(key);
            size --;

            // N / M < lowerTolerance
            // size / M < lowerTolerance
            if (size < lowerTolerance * M && M / 2 >= initCapacity)
                resize(M / 2);
        }

        return value;
    }

    // 修改操作
    public void set (K key, V value) {
        TreeMap<K, V> map = hashTable[hash(key)];

        if (!map.containsKey(key))
            throw new IllegalArgumentException(key + " doesn't exist!");

        map.put(key, value);
    }

    // 查找是否存在
    public boolean contains (K key) {
        return hashTable[hash(key)].containsKey(key);
    }

    // 查找操作
    public V get (K key) {
        return hashTable[hash(key)].get(key);
    }

    // 重置哈希表空间大小
    public void resize (int newM) {
        TreeMap<K, V>[] newHashTable = new TreeMap[newM];
        for (int i = 0; i < newM; i++)
            newHashTable[i] = new TreeMap<>();

        // 存一下之前的空间大小，因为需要遍历这个空间每一个位置
        int oldM = this.M;

        // 重新设置一下这M值，这样计算新的哈希表中数组的索引时不会是之前那个哈希表数组的索引
        this.M = newM;

        // 遍历原来的空间中每一个位置
        for (int i = 0; i < oldM; i++) {
            TreeMap<K, V> map = hashTable[i];

            // 遍历每一个TreeMap中的元素
            for (K key: map.keySet())
                newHashTable[hash(key)].put(key, map.get(key));
        }

        // 重新设置当前hashTable
        this.hashTable = newHashTable;
    }
}
