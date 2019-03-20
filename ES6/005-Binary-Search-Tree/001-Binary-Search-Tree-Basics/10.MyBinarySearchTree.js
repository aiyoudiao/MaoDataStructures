// 自定义二分搜索树
class MyBinarySearchTree {
  constructor () {
    this.root = null;
    this.size = 0;
  }

  // 获取二分搜索树中节点个数
  getSize () {
    return this.size;
  }

  // 返回二分搜索树是否为空的bool值
  isEmpty () {
    return this.size === 0;
  }
}

