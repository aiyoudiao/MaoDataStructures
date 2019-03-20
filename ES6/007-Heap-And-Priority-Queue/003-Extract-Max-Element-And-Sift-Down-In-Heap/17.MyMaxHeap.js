// 自定义二叉堆之最大堆
class MyMaxHeap {
  constructor (capacity = 10) {
    this.myArray = new MyArray(capacity);
  }

  // 添加操作
  add (element) {
    // 追加元素
    this.myArray.push(element);

    // 将追加的元素上浮到堆中合适的位置
    this.siftUp(this.myArray.getSize() - 1);
  }

  // 堆的上浮操作 -
  siftUp (index) {
    // this.nonRecursiveSiftUp(index);
    this.recursiveSiftUp(index);
    
    // 无论是递归还是非递归都有一个 
    // 元素上浮后结束的条件 当前节点元素值 小于其父节点元素值
    // 和 
    // 索引即将越界的终止条件 要上浮的元素索引 小于等于0
  }
  
  // 堆的上浮操作 递归算法 -
  recursiveSiftUp (index) {

    // 解决最基本的问题， 递归终止条件
    if (index <= 0) return;

    let currentValue = this.myArray.get(index);
    let parentIndex = this.calcParentIndex(index);
    let parentValue = this.myArray.get(parentIndex);

    // 递归写法
    if (this.compare(currentValue, parentValue) > 0) {
      this.swap(index, parentIndex);
      this.recursiveSiftUp(parentIndex);
    }
  }

  // 堆的上浮操作 非递归算法 -
  nonRecursiveSiftUp (index) {
    if (index <= 0) return;

    let currentValue = this.myArray.get(index);
    let parentIndex = this.calcParentIndex(index);
    let parentValue = this.myArray.get(parentIndex); 

    while (this.compare(currentValue, parentValue) > 0) {
      // 交换堆中两个元素位置的值
      this.swap(index, parentIndex);

      // 交换了位置之后，元素上浮后的索引变量也要进行相应的变更
      index = parentIndex;
      // 如果索引小于等于0了 那就结束循环
      if (index <= 0) 
        break
      currentValue = this.myArray.get(index);
      parentIndex = this.calcParentIndex(index);
      parentValue = this.myArray.get(parentIndex);
    }
  }

  // 找到优先级最大的元素 （查找元素）操作
  findMax () {
    if (this.myArray.isEmpty())
      throw new Error("can not findMax when heap is empty.");
    return this.myArray.getFirst();
  }

  // 提取优先级最大的元素（删除元素）操作
  extractMax () {
    // 获取堆顶的元素
    let maxElement = this.findMax();

    // 获取堆底的元素
    let element = this.myArray.getLast();
    
    // 让堆底的元素替换掉堆顶的元素
    this.myArray.set(0, element);

    // 移除堆底的元素
    this.myArray.pop();

    // 让堆顶的元素开始下沉，从而能够正常满足堆的性质
    this.siftDown(0);

    // 返回堆顶的元素
    return maxElement;
  }

  // 堆的下沉操作 -
  siftDown (index) {
    // this.nonRecursiveSiftDown(index);
    this.recursiveSiftDown(index);
  }

  // 堆的下沉操作 递归算法 -
  recursiveSiftDown (index) {

    // 递归终止条件
    // 如果当前索引位置的元素没有左孩子就说也没有右孩子，
    // 那么可以直接终止，因为无法下沉
    if (this.calcLeftChildIndex(index) >= this.myArray.getSize())
      return;

    const leftChildIndex = this.calcLeftChildIndex(index);
    const leftChildValue = this.myArray.get(leftChildIndex);
    const rightChildIndex = this.calcRightChildIndex(index);
    let rightChildValue = null;

    // let maxIndex = 0;
    // if (rightChildIndex >= this.myArray.getSize())
    //   maxIndex = leftChildIndex;
    // else {
    //   rightChildValue = this.myArray.get(rightChildIndex);
    //   if (this.compare(leftChildValue, rightChildValue) > 0)
    //     maxIndex = leftChildIndex;
    //   else
    //     maxIndex = rightChildIndex;
    // }
    
    // 这段代码是上面注释代码的优化
    let maxIndex =  leftChildIndex;
    if (rightChildIndex < this.myArray.getSize()) {
      rightChildValue = this.myArray.get(rightChildIndex);
      if (this.compare(leftChildValue, rightChildValue) < 0)
        maxIndex = rightChildIndex;
    }
  
    let maxValue = this.myArray.get(maxIndex);
    let currentValue = this.myArray.get(index);

    if (this.compare(maxValue, currentValue) > 0) {
      // 交换位置
      this.swap(maxIndex, index);
      // 继续下沉
      this.recursiveSiftDown(maxIndex);
    } 
  }

  // 堆的下沉操作 非递归算法 -
  nonRecursiveSiftDown (index) {
    // 该索引位置的元素有左右孩子节点才可以下沉，
    // 在完全二叉树中 如果一个节点没有左孩子必然没有右孩子
    while (this.calcLeftChildIndex(index) < this.myArray.getSize()) {
      let leftChildIndex = this.calcLeftChildIndex(index);
      let leftChildValue = this.myArray.get(leftChildIndex);
      let rightChildIndex = this.calcRightChildIndex(index);
      let rightChildValue = null;
      let maxIndex = leftChildIndex;

      if (rightChildIndex < this.myArray.getSize()) {
        rightChildValue = this.myArray.get(rightChildIndex);
        if (this.compare(leftChildValue, rightChildValue) <= 0)
          maxIndex = rightChildIndex;
      }

      let maxValue = this.myArray.get(maxIndex);
      let currentValue = this.myArray.get(index);

      if (this.compare(maxValue, currentValue) > 0) {
        this.swap(maxIndex, index);
        index = maxIndex;
        continue;
      } else
        break;
    }
  }

  // 堆中两个元素的位置进行交换
  swap (indexA, indexB) {
    this.myArray.swap(indexA, indexB);
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

  // 比较的功能 -
  compare (elementA, elementB) {
    if (elementA === null || elementB === null)
      throw new Error("element is error. element can't compare.");
    if (elementA > elementB)
      return 1;
    else if (elementA < elementB)
      return -1;
    else
      return 0;
  }

  // 获取堆中实际的元素个数
  size () {
    return this.myArray.getSize();
  }

  // 返回堆中元素是否为空的判断值
  isEmpty () {
    return this.myArray.isEmpty();
  }
}

