// 自定义线段树 SegmentTree
class MySegmentTree {
  constructor (array) {
    // 拷贝一份参数数组中的元素
    this.data = new Array(array.length);
    for (var i = 0; i < array.length; i++)
      this.data[i] = array[i];

    // 初始化线段树 开4倍的空间 这样才能在所有情况下存储线段树上所有的节点
    this.tree = new Array(4 * this.data.length);

    // 开始构建线段树
    this.buildingSegmentTree (0, 0, this.data.length - 1);
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

  // 构建线段树
  buildingSegmentTree (treeIndex, left, right) {
    // 解决最基本问题
    // 当一条线段的两端相同时，说明这个区间只有一个元素，
    // 那么递归也到底了
    if (left === right) {
      this.tree[treeIndex] = this.data[left];
      return;
    }

    // 计算当前线段树的左右子树的索引
    const leftChildIndex = this.calcLeftChildIndex(treeIndex);
    const rightChildIndex = this.calcRightChildIndex(treeIndex);

    // 将一个区间拆分为两段，然后继续构建其左右子线段树
    let middle = Math.floor(left + (right - left) / 2)//(left + right) / 2

    // 构建左子线段树
    this.buildingSegmentTree(leftChildIndex, left, middle);
    // 构建右子线段树
    this.buildingSegmentTree(rightChildIndex, middle + 1, right);

    // 融合左子线段树和右子线段树
    this.tree[treeIndex] = this.merge(this.tree[leftChildIndex], this.tree[rightChildIndex]);
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

  // 辅助函数： 融合两棵线段树，也就是对线段树进行业务逻辑的处理
  merge (treeElementA, treeElmentB) {
    // 默认进行求和操作
    return treeElementA + treeElmentB;
  }

  // 辅助函数：更新融合的方法，也就是自定义处理线段树融合的业务逻辑
  updateMerge (mergeMethod) {
    this.merge = mergeMethod;
  }

  // @Override toString() 2018-11-7 jwl
  toString () {
    let segmentTreeConsoleInfo = ""; // 控制台信息
    let segmentTreePageInfo = ""; // 页面信息

        // 输出头部信息
    segmentTreeConsoleInfo += ("SegmentTree:");
    segmentTreePageInfo += ("SegmentTree:");
    segmentTreeConsoleInfo += ("\r\n");
    segmentTreePageInfo += ("<br/><br/>"); 

    // 输出传入的数据信息
    segmentTreeConsoleInfo += ("data = [");
    segmentTreePageInfo += ("data = [");

    for (let i = 0; i < this.data.length - 1; i++) {
        segmentTreeConsoleInfo += (this.data[i] + ",");
        segmentTreePageInfo += (this.data[i] + ",");
    }

    if (this.data != null && this.data.length != 0) {
        segmentTreeConsoleInfo += (this.data[this.data.length - 1]);
        segmentTreePageInfo += (this.data[this.data.length - 1]);
    }
    segmentTreeConsoleInfo += ("],\r\n");
    segmentTreePageInfo += ("],<br/><br/>");

    // 输出生成的线段树信息
    segmentTreeConsoleInfo += ("tree = [");
    segmentTreePageInfo += ("tree = [");
    let treeSize = 0;
    for (let i = 0; i < this.tree.length - 1 ; i++) {
        if (this.tree[i] !== undefined)
          treeSize ++;
        segmentTreeConsoleInfo += (this.tree[i] + ",");
        segmentTreePageInfo += (this.tree[i] + ",");
    }
    if (this.tree != null && this.tree.length != 0) {
        if (this.tree[this.tree.length - 1] !== undefined)
          treeSize ++;
        segmentTreeConsoleInfo += (this.tree[this.tree.length - 1]);
        segmentTreePageInfo += (this.tree[this.tree.length - 1]);
    }
    segmentTreeConsoleInfo += ("],\r\n");
    segmentTreePageInfo += ("],<br/><br/>");
    segmentTreeConsoleInfo += ("originArraySize:" + this.getSize() + "，");
    segmentTreePageInfo += ("originArraySize:" + this.getSize() + "，"); 
    segmentTreeConsoleInfo += ("treeCapacity: " + this.tree.length + "，treeSize: " + treeSize);
    segmentTreePageInfo += ("treeCapacity: " + this.tree.length + "，treeSize: " + treeSize);

    // 返回输出的总信息
    document.body.innerHTML += segmentTreePageInfo;
    return segmentTreeConsoleInfo;
  }
}

