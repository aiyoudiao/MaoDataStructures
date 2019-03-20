// 自定义并查集 UnionFind 第三个版本 QuickUnion优化版
// Union 操作变快了
// 还可以更快的
// 解决方案：考虑size 也就是某一棵树从根节点开始一共有多少个节点
// 原理：节点少的向节点多的树进行融合
// 还可以更快的
class MyUnionFindThree {
  constructor (size) {
    // 存储当前节点所指向的父节点
    this.forest = new Array(size);
    // 以以某个节点为根的所有子节点的个数
    this.branch = new Array(size);

    // 在初始的时候每一个节点都指向它自己
    // 也就是每一个节点都是独立的一棵树
    const len = this.forest.length;
    for (var i = 0; i < len; i++) {
      this.forest[i] = i;
      this.branch[i] = 1;// 默认节点个数为1
    }
  }
  
  // 功能：将元素q和元素p这两个数据以及他们所在的集合进行合并
  // 时间复杂度：O(h) h 为树的高度
  unionElements (treePrimary,  treeSecondary) {
    const primaryRoot = this.find(treePrimary);
    const secondarRoot = this.find(treeSecondary);

    if (primaryRoot === secondarRoot)
      return;

    // 节点少的 树 往 节点多的树 进行合并，在一定程度上减少最终树的高度
    if (this.branch[primaryRoot] < this.branch[secondarRoot]) {
      // 主树节点上往次树节点进行合并
      this.forest[primaryRoot] = this.forest[secondarRoot];
      // 次树的节点个数 += 主树的节点个数 
      this.branch[secondarRoot] += this.branch[primaryRoot];
    } else { // branch[primaryRoot] >= branch[secondarRoot]
      // 次树节点上往主树节点进行合并
      this.forest[secondarRoot] = this.forest[primaryRoot];
      // 主树的节点个数 += 次树的节点个数 
      this.branch[primaryRoot] += this.branch[secondarRoot];
    }
  }

  // 功能：查询元素q和元素p这两个数据是否在同一个集合中
  // 时间复杂度：O(h) h 为树的高度
  isConnected (treeQ, treeP) {
    return this.find(treeQ) === this.find(treeP);
  }

  // 查找元素所对应的集合编号
  find (id) {
    if (id < 0 || id >= this.forest.length)
      throw new Error("index is out of bound.");

    // 不断的去查查找当前节点的根节点
    // 根节点的索引是指向自己，如果根节点为 1 那么对应的索引也为 1。
    while (id !== this.forest[id])
      id = this.forest[id];

    return id;
  }

  // 功能：当前并查集一共考虑多少个元素
  getSize () {
    return this.forest.length;
  }
}

