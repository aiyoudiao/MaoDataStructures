// 自定义的哈希表 HashTable 基于使系统的Map 底层是哈希表+红黑树
// 自定义的哈希表 HashTable 基于自己的AVL树
class MyHashTableByAVLTree {
  constructor (M = 97) {
    this.M = M; // 空间大小
    this.size = 0; // 实际元素个数
    this.hashTable = new Array(M); // 哈希表
    this.hashCalc = new MyHash(); // 哈希值计算

    // 初始化哈希表
    for (var i = 0; i < M; i++) {
      // this.hashTable[i] = new MyAVLTree();
      this.hashTable[i] = new MyAVLTreeMap();
    }
  }

  // 根据key生成 哈希表索引
  hash (key) {
    // 获取哈希值
    let hash = this.hashCalc.hashCode(key);
    // 对哈希值转换为32位的整数  再进行取模运算
    return  (hash & 0x7fffffff) % this.M;
  }

  // 获取实际存储的元素个数
  getSize () {
    return this.size;
  }

  // 添加元素
  add (key, value) {
    const map = this.hashTable[this.hash(key)];

    // 如果存在就覆盖
    if (map.contains(key))
      map.set(key, value);
    else { // 不存在就添加
      map.add(key, value);
      this.size ++;
    }
  }

  // 删除元素
  remove (key) {
    const map = this.hashTable[this.hash(key)];

    let value = null;
    // 存在就删除
    if (map.contains(key)) {
      value = map.remove(key);
      this.size --;
    }

    return value;
  }

  // 修改操作
  set (key, value) {
    const map = this.hashTable[this.hash(key)];

    if (!map.contains(key))
      throw new Error(key + " doesn't exist!");

    map.set(key, value);
  }

  // 查找是否存在
  contains (key) {
    return this.hashTable[this.hash(key)].contains(key);
  }

  // 查找操作
  get (key) {
    return this.hashTable[this.hash(key)].get(key);
  }
}

