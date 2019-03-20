import java.util.TreeMap;

public class MyHashTable<K, V> {

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
        this(97);
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
        }
    }

    // 删除元素
    public V remove (K key) {
        TreeMap<K, V> map = hashTable[hash(key)];

        V value = null;
        if (map.containsKey(key)) {
            value = map.remove(key);
            size --;
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
}
