// 自定义RedBlack映射 RedBlackMap
class MyRedBlackMap {
  constructor () {
    this.myRedBlackMap = new MyRedBlackMap();
  }

  // 添加操作
  add (key, value) {
    this.myRedBlackMap.add(key, value);
  }

  // 查询操作
  get (key) {
    return this.myRedBlackMap.get(key);
  }

  // 删除操作
  remove (key) {
    return this.myRedBlackMap.remove(key);
  }

  // 查看key是否存在
  contains (key) {
    return this.myRedBlackMap.contains(key);
  }

  // 更新操作
  set (key, value) {
    this.myRedBlackMap.set(key, value);
  }

  // 获取映射Map中实际元素个数
  getSize () {
    return this.myRedBlackMap.getSize();
  }

  // 查看映射Map中是否为空
  isEmpty () {
    return this.myRedBlackMap.isEmpty();
  }
}

