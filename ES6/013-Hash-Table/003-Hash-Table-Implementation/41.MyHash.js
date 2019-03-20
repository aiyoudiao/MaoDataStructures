// 自定义的hash生成类。
class MyHash {
  constructor () {
    this.store = new Map();
  }

  // 生成hash
  hashCode (key) {
    let hash = this.store.get(key);
    if (hash !== undefined)
      return hash;
    else { // 如果 这个hash没有进行保存 就生成，并且记录
      let hash = this.calcHashTwo(key)

      // 记录
      this.store.set(key, hash);

      // 返回hash
      return hash;
    }
  }

  // 得到的数字比较小 六七位数 以下  辅助函数：生成hash -
  calcHashOne (key) {
    // 生成hash 随机小数 * 当前日期毫秒 * 随机小数
    let hash = Math.random() * Date.now() * Math.random();

    // hash 取小数部分的字符串
    hash = hash.toString().replace(/^\d*\.\d*?([1-9]+)$/, "$1");

    hash = parseInt(hash); // 取整

    return hash;
  }

  // 得到的数字很大 十几位数 左右  辅助函数：生成hash -
  calcHashTwo (key) {
    // 生成hash 随机小数 * 当前日期毫秒 * 随机小数
    let hash = Math.random() * Date.now() * Math.random();

    // hash 向下取整
    hash = Math.floor(hash);
    return hash;
  }
}

class MyHashTableBySystem{
  constructor (M = 97) {
    this.M = M; // 空间大小
    this.size = 0; // 实际元素个数
    this.hashTable = new Array(M); // 哈希表
    this.hashCalc = new MyHash(); // 哈希值计算

    // 初始化哈希表
    for (var i = 0; i < M; i++) {
      // this.hashTable[i] = new MyAVLTree();
      this.hashTable[i] = new Map();
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
    if (map.has(key))
      map.set(key, value);
    else { // 不存在就添加
      map.set(key, value);
      this.size ++;
    }
  }

  // 删除元素
  remove (key) {
    const map = this.hashTable[this.hash(key)];

    let value = null;
    // 存在就删除
    if (map.has(key)) {
      value = map.delete(key);
      this.size --;
    }

    return value;
  }

  // 修改操作
  set (key, value) {
    const map = this.hashTable[this.hash(key)];

    if (!map.has(key))
      throw new Error(key + " doesn't exist!");

    map.set(key, value);
  }

  // 查找是否存在
  contains (key) {
    return this.hashTable[this.hash(key)].has(key);
  }

  // 查找操作
  get (key) {
    return this.hashTable[this.hash(key)].get(key);
  }
}

