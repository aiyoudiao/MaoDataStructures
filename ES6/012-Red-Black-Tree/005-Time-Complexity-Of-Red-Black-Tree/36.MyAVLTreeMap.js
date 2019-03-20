// 自定义AVLTree映射 AVLTreeMap
class MyAVLTreeMap {
  constructor () {
    this.myAVLTree = new MyAVLTree();
  }

  // 添加操作
  add (key, value) {
    this.myAVLTree.add(key, value);
  }

  // 查询操作
  get (key) {
    return this.myAVLTree.get(key);
  }

  // 删除操作
  remove (key) {
    return this.myAVLTree.remove(key);
  }

  // 查看key是否存在
  contains (key) {
    return this.myAVLTree.contains(key);
  }

  // 更新操作
  set (key, value) {
    this.myAVLTree.set(key, value);
  }

  // 获取映射Map中实际元素个数
  getSize () {
    return this.myAVLTree.getSize();
  }

  // 查看映射Map中是否为空
  isEmpty () {
    return this.myAVLTree.isEmpty();
  }
}

