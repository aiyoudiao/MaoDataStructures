// 自定义AVLTree映射 AVLTreeMap
class MyAVLTreeMap {
  constructor () {
    this.myAVLTree = new MyAVLTree();
  }

  // 添加操作
  add (key, value) {
    this.MyAVLTree.add(key, value);
  }

  // 查询操作
  get (key) {
    return this.MyAVLTree.get(key);
  }

  // 删除操作
  remove (key) {
    return this.MyAVLTree.remove(key);
  }

  // 查看key是否存在
  contains (key) {
    return this.MyAVLTree.contains(key);
  }

  // 更新操作
  set (key, value) {
    this.MyAVLTree.set(key, value);
  }

  // 获取映射Map中实际元素个数
  getSize () {
    return this.MyAVLTree.getSize();
  }

  // 查看映射Map中是否为空
  isEmpty () {
    return this.MyAVLTree.isEmpty();
  }
}

