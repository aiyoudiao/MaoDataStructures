// 自定义并查集 UnionFind 第六个版本 QuickUnion优化版
// Union 操作变快了
// 解决方案：考虑path compression 路径
// 原理：在find的时候，循环遍历操作时，让所有的节点都指向根节点 以递归的形式进行。
// 还可以更快的
class MyUnionFindSix {
  constructor (size) {
    // 存储当前节点所指向的父节点
    this.forest = new Array(size);
    // 记录某个节点为根的树的最大高度或深度
    this.rank = new Array(size);

    // 在初始的时候每一个节点都指向它自己
    // 也就是每一个节点都是独立的一棵树
    const len = this.forest.length;
    for (var i = 0; i < len; i++) {
      this.forest[i] = i;
      this.rank[i] = 1;// 默认深度为1
    }
  }
  
  // 功能：将元素q和元素p这两个数据以及他们所在的集合进行合并
  // 时间复杂度：O(h) h 为树的高度
  unionElements (treePrimary,  treeSecondary) {
    const primaryRoot = this.find(treePrimary);
    const secondarRoot = this.find(treeSecondary);

    if (primaryRoot === secondarRoot)
      return;

    // 根据两个元素所在树的rank不同判断合并方向
    // 将rank低的集合合并到rank高的集合上
    if (this.rank[primaryRoot] < this.rank[secondarRoot]) {
      // 主树节点上往次树节点进行合并
      this.forest[primaryRoot] = this.forest[secondarRoot];
    } else if (this.rank[primaryRoot] > this.rank[secondarRoot]) {
      // 次树节点上往主树节点进行合并
      this.forest[secondarRoot] = this.forest[primaryRoot];
    } else { // rank[primaryRoot] == rank[secondarRoot]
      // 如果元素个数一样的根节点，那谁指向谁都无所谓
      // 本质都是一样的
      
      // primaryRoot合并到secondarRoot上了，qRoot的高度就会增加1
      this.forest[primaryRoot] = this.forest[secondarRoot];
      this.rank[secondarRoot] += 1;
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

    // 如果当前节点不等于根节点，
    // 就找到根节点并且把当前节点及之前的节点全部指向根节点
    if (id !== this.forest[id])
      this.forest[id] = this.find(this.forest[id]);

    return this.forest[id];
  }

  // 功能：当前并查集一共考虑多少个元素
  getSize () {
    return this.forest.length;
  }
}

