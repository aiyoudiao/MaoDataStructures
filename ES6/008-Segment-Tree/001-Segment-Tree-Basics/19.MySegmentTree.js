// 自定义线段树 SegmentTree
class MySegmentTree {
  constructor (array) {
    // 拷贝一份参数数组中的元素
    this.data = new Array(array.length);
    for (var i = 0; i < array.length; i++)
      this.data[i] = array[i];

    // 初始化线段树 开4倍的空间 这样才能在所有情况下存储线段树上所有的节点
    this.tree = new Array(4 * this.data.length);
  }

  // 获取线段树中实际的元素个数
  getSize () {
    return this.data.length;
  }

  // 根据索引获取元素
  get (index) {
    if (index < 0 || index >= this.getSize())
      throw new Error("index is illegal.");
    return this.data[index];
  }

  // 辅助函数：返回完全二叉树的数组表示中，一个索引所表示的元素的左孩子节点的索引
  // 计算出线段树中指定索引位置的元素其左孩子节点的索引 -
  calcLeftChildIndex (index) {
    return index * 2 + 1;
  }

  // 辅助函数：返回完全二叉树的数组表示中，一个索引所表示的元素的右孩子节点的索引
  // 计算出线段树中指定索引位置的元素其右孩子节点的索引 -
  calcRightChildIndex (index) {
    return index * 2 + 2;
  }
}

