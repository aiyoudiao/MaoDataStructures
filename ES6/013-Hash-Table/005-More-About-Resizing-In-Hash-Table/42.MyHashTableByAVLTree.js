// 自定义的哈希表 HashTable
// 基于系统的哈希表，用来测试
// 自定义的哈希表 HashTable
// 基于自己实现的AVL树
class MyHashTableByAVLTree {
  constructor () {
    // 设定扩容的上边界
    this.upperTolerance = 10;
    // 设定缩容的下边界
    this.lowerTolerance = 2;
    // 哈希表合理的素数表
    this.capacity = [
          53,97,193,389,769,1543,3079,6151,12289,
          24593,49157,98317, 196613,393241,786433,
          1572869,3145739,6291469,12582917,25165843,
          50331653,100663319,201326611,402653189,805306457,1610612741
        ];
    // 初始容量的索引
    this.capacityIndex = 0;

    this.M = this.capacity[this.capacityIndex]; // 空间大小
    this.size = 0; // 实际元素个数
    this.hashTable = new Array(this.M); // 哈希表
    this.hashCalc = new MyHash(); // 哈希值计算

    // 初始化哈希表
    for (var i = 0; i < this.M; i++) {
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

      // 平均元素个数 大于等于 当前容量的10倍，同时防止索引越界
      // 就以哈希表合理的素数表 为标准进行 索引的推移
      if (this.size >= this.upperTolerance * this.M && this.capacityIndex + 1 < this.capacity.length)
        this.resize(this.capacity[++ this.capacityIndex])
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

      // 平均元素个数 小于容量的2倍  当然无论怎么缩容，索引都不能越界
      if (this.size < this.lowerTolerance * this.M && this.capacityIndex > 0)
        this.resize(this.capacity[-- this.capacityIndex]);
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

  // 重置空间大小
  resize (newM) {
    // 初始化新空间
    const newHashTable = new Array(newM);
    for (var i = 0; i < newM; i++)
      newHashTable[i] = new MyAVLTree();

    const oldM = this.M;
    this.M = newM;

    // 方式一
    // let map;
    // let keys;
    // for (var i = 0; i < oldM; i++) {
    //   // 获取所有实例
    //   map = this.hashTable[i];
    //   keys = map.getKeys();
    //   // 遍历每一对键值对 实例
    //   for(const key of keys)
    //       newHashTable[this.hash(key)].add(key, map.get(key));
    // }
    
    // 方式二
    let etities;
    for (var i = 0; i< oldM; i++) {
      etities = this.hashTable[i].getEntitys();
      for (const entity of etities)
        newHashTable[this.hash(entity.key)].add(entity.key, entity.value);
    }

    // 重新设置当前hashTable
    this.hashTable = newHashTable;
  }
}

