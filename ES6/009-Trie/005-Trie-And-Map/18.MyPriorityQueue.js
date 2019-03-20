// 自定义优先队列 PriorityQueue
class MyPriorityQueue {
  constructor () {
    this.maxHeap = new MyMaxHeap();
  }

  // 入队
  enqueue (element) {
    this.maxHeap.add(element);
  }
  
  // 出队
  dequeue () {
    return this.maxHeap.extractMax();
  }
  
  // 查看队首元素
  getFront () {
    return this.maxHeap.findMax();
  }
  
  // 查看队列中实际元素的个数
  getSize () {
    return this.maxHeap.size();
  }
  
  // 返回队列是否为空的判断值
  isEmpty () {
    return this.maxHeap.isEmpty();
  }

  // 扩展： 修改最大堆中的比较算法
  updateCompare (compareMethod) {
    // 传入参数可以替换掉原堆中实现的compare方法
    this.maxHeap.compare = compareMethod;
  }

  // 扩展： 用一个新元素去替换队首的元素，同时再次确认优先级别
  replaceFront (element) {
    // 这样就就可 不需要 出队入队操作这么麻烦了
    return this.maxHeap.replace(element);
  }
}

