// 自定义并查集 UnionFind 第一个版本 QuickFind版
// isConnected 操作很快
class MyUnionFindOne {
  constructor (size) {
    // 存储数据所对应的集合的编号
    this.ids = new Array(size);

    // 模拟存入数据
    const len = this.ids.length;
    for (var i = 0; i < len; i++)
      this.ids[i] = i;
  }
  
  // 功能：将元素q和元素p这两个数据以及他们所在的集合进行合并
  // 时间复杂度：O(n)
  unionElements (q, p) {
    const qId = this.find(q);
    const pId = this.find(p);

    if (qId === pId)
      return;

    for (var i = 0; i < this.ids.length; i++)
      if (pId === this.ids[i])
        this.ids[i] = qId;
  }

  // 功能：查询元素q和元素p这两个数据是否在同一个集合中
  // 时间复杂度：O(1)
  isConnected (q, p) {
    return this.ids[q] === this.ids[p];
  }

  // 查找元素所对应的集合编号
  find (index) {
    if (index < 0 || index >= this.ids.length)
      throw new Error("index is out of bound.");
    return this.ids[index];
  }

  // 功能：当前并查集一共考虑多少个元素
  getSize () {
    return this.ids.length;
  }
}

