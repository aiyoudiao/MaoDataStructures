// 自定义二分搜索树集合Set
class MyBinarySearchTreeSet {
  constructor () {
    // 借用二分搜索树来实现这个接口
    this.myBinarySearchTree = new MyBinarySearchTree();
  }

  // 添加元素
  add (element) {
    this.myBinarySearchTree.add(element);
  }

  // 移除元素
  remove (element) {
    this.myBinarySearchTree.remove(element);
  }

  // 是否包含这个元素
  contains (element) {
    return this.myBinarySearchTree.contains(element);
  }

  // 遍历操作 
  // 第一个参数 是回掉函数，
  // 第二个参数 是遍历的方式 深度优先遍历(前pre、中in、后post)，广度优先遍历(层序level)
  each (operator, method) {
    // 遍历方式默认是非递归的前序遍历，
    // 其它的遍历方式就是递归的前、中、后、层序遍历。
    switch (method) {
      case 'pre': this.myBinarySearchTree.preOrder(operator);
      break;
      case 'in': this.myBinarySearchTree.inOrder(operator);
      break;
      case 'post': this.myBinarySearchTree.postOrder(operator);
      break;
      case 'level': this.myBinarySearchTree.levelOrder(operator);
      break;
      default:  this.myBinarySearchTree.nonRecursivePreOrder(operator);
      break;
    }
  }

  // 获取集合中实际的元素个数
  getSize () {
    return this.myBinarySearchTree.getSize();
  }

  // 返回集合是否为空的bool值
  isEmpty () {
    return this.myBinarySearchTree.isEmpty();
  }
}

