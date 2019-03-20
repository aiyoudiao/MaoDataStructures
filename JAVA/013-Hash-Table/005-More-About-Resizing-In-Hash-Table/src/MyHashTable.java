import java.util.TreeMap;

public class MyHashTable<K, V> {

    // 哈希表合理的素数表
    private static final int[] capacity = {
      53,97,193,389,769,1543,3079,6151,12289,
      24593,49157,98317, 196613,393241,786433,
      1572869,3145739,6291469,12582917,25165843,
      50331653,100663319,201326611,402653189,805306457,1610612741
    };
    private static final int upperTolerance = 10; // 上界
    private static final int lowerTolerance = 2; // 下限
    private int capacityIndex = 0; // 初始容量的索引

    private TreeMap<K, V>[] hashTable;
    private int M;
    private int size;

    public MyHashTable () {
        this.M = capacity[capacityIndex];
        this.size = 0;
        this.hashTable = new TreeMap[M];

        for (int i = 0; i < M; i++)
            hashTable[i] = new TreeMap<>();
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
            // 防止越界
            if (size >= upperTolerance * M && capacityIndex + 1 < capacity.length)
                resize(capacity[++ capacityIndex]);
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
            // 防止越界
            if (size < lowerTolerance * M && capacityIndex > 0)
                resize(capacity[-- capacityIndex]);
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
