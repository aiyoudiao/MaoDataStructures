// 自定义二分搜索树
class MyBinarySearchTree {
  constructor () {
    this.root = null;
    this.size = 0;
  }

  // 添加元素到二分搜索树中 + 
  add (element) {
    if (element === null) throw new Error("element is null. can't store.");

    this.root = this.recursiveAdd(this.root, element);
  }

  // 添加元素到二分搜索树中  递归算法 -
  recursiveAdd (node, newElement) {

    // 解决最基本的问题 也就是递归函数调用的终止条件
    if (node === null) {
       this.size ++;
       return new MyBinarySearchTreeNode(newElement);
    }
     
    // 1. 当前节点的元素比新元素大  
    // 那么新元素就会被添加到当前节点的左子树去
    // 2. 当前节点的元素比新元素小
    // 那么新元素就会被添加到当前节点的右子树去
    // 3. 当前节点的元素比新元素相等
    // 什么都不做了，因为目前不添加重复的元素
    if (this.compare(node.element, newElement) > 0)
      node.left = this.recursiveAdd(node.left, newElement);
    else if (this.compare(node.element, newElement) < 0)
      node.right = this.recursiveAdd(node.right, newElement);
    else {} 

    // 将复杂问题分解成多个性质相同的小问题，
    // 然后求出小问题的答案，
    // 最终构建出原问题的答案
    return node;
  }

  // 获取二分搜索树中节点个数 +
  getSize () {
    return this.size;
  }

  // 返回二分搜索树是否为空的bool值 +
  isEmpty () {
    return this.size === 0;
  }

  // 新增一个比较的方法，专门用来比较新增的元素大小 -
  // 第一个元素比第二个元素大 就返回 1
  // 第一个元素比第二个元素小 就返回 -1
  // 第一个元素比第二个元素相等 就返回 0
  compare (elementA, elementB) {
    if (elementA === null || elementB === null)
      throw new Error("element is null. can't compare.");
    
    // 先直接写死
    if (elementA > elementB)
      return 1;
    else if (elementA < elementB)
      return -1;
    else
      return 0;
  }
}

