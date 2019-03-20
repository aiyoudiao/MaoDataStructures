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

  // 查询指定区间的线段树数据
  // 返回区间[queryLeft, queryRight]的值
  query (queryLeft, queryRight) {
    if (queryLeft < 0 || queryRight < 0 || queryLeft > queryRight ||
       queryLeft >= this.data.length || queryRight >= this.data.length)
      throw new Error("queryLeft or queryRight is illegal.");

    // 调用递归的查询方法
    return this.recursiveQuery(0, 0, this.data.length - 1, queryLeft, queryRight);
  }

  // 递归的查询方法 -
  // 在以treeIndex为根的线段树中[left...right]的范围里，
  // 搜索区间[queryLeft...queryRight]的值
  recursiveQuery (treeIndex, left, right, queryLeft, queryRight) {
    // 如果查询范围 与 指定的线段树的区间 相同，那么说明完全匹配，
    // 直接返回当前这个线段即可，每一个节点代表 一个线段(区间)处理后的结果
    if (left === queryLeft && right === queryRight)
      return this.tree[treeIndex];

    // 求出当前查询范围的中间值
    const middle = Math.floor(left + (right - left) / 2);
    
    // 满二叉树肯定有左右孩子节点
    // 上面的判断没有完全匹配，说明需要继续 缩小查询范围，也就是要在左右子树中进行查询了
    const leftChildIndex = this.calcLeftChildIndex(treeIndex);
    const rightChildIndex = this.calcRightChildIndex(treeIndex);

    // 判断：
    //    1. 从左子树中查还是右子树中查，又或者从左右子树中同时查，然后将两个查询结果融合。
    //    2. 如果 待查询的区间的左端点大于查询范围的中间值，说明只需要从右子树中进行查询即可。
    //    3. 如果 待查询的区间的右端点小于查询范围的中间值 + 1，说明只需要从左子树中进行查询。
    //    4. 如果 待查询的区间在左右端点各分部一部分，说明要同时从左右子树中进行查询。
    if (queryLeft > middle)
      return this.recursiveQuery(rightChildIndex, middle + 1, right, queryLeft, queryRight);
    else if (queryRight < middle + 1)
      return this.recursiveQuery(leftChildIndex, left, middle, queryLeft, queryRight);
    else {
      // 求出 左子树中一部分待查询区间中的值
      const leftChildValue = 
      this.recursiveQuery(leftChildIndex, left, middle, queryLeft, middle);
      // 求出 右子树中一部分待查询区间中的值
      const rightChildValue = 
      this.recursiveQuery(rightChildIndex, middle + 1, right, middle + 1, queryRight);
      // 融合左右子树种的数据并返回
      return this.merge(leftChildValue, rightChildValue);
    }
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

  // 辅助函数： 融合两棵线段树，也就是对线段树进行业务逻辑的处理 -
  merge (treeElementA, treeElmentB) {
    // 默认进行求和操作
    return treeElementA + treeElmentB;
  }

  // 辅助函数：更新融合的方法，也就是自定义处理线段树融合的业务逻辑 +
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

