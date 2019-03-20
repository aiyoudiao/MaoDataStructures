// 自定义二叉堆之最大堆
class MyMaxHeap {
  constructor (capacity = 10) {
    this.myArray = new MyArray(capacity);
  }

  // 辅助函数 计算出堆中指定索引位置的元素其父节点的索引 -
  calcParentIndex (index) {
    if (index === 0) // 索引为0是根节点，根节点没有父亲节点，小于0就更加不可以了
      throw new Error("index is 0. doesn't have parent.");
    return Math.floor((index - 1) / 2);
  }

  // 辅助函数 计算出堆中指定索引位置的元素其左孩子节点的索引 -
  calcLeftChildIndex (index) {
    return index * 2 + 1;
  }
  
  // 辅助函数 计算出堆中指定索引位置的元素其右孩子节点的索引 -
  calcRightChildIndex (index) {
    return index * 2 + 2;
  }

  // 获取堆中实际的元素个数
  getSize () {
    return this.myArray.getSize();
  }

  // 返回堆中元素是否为空的判断值
  isEmpty () {
    return this.myArray.isEmpty();
  }
}

