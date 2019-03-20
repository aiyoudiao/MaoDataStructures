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

  // 判断二分搜索树中是否包含某个元素 +
  contains (element) {
    if (this.root === null)
      throw new Error("root is null. can't query.");

    return this.recursiveContains(this.root, element);
  }

  // 判断二分搜索树种是否包含某个元素 递归算法 -
  recursiveContains (node, element) {
    if (node === null)
      return false;

    // 当前节点元素比 要搜索的元素 大
    if (this.compare(node.element, element) > 0)
      return this.recursiveContains(node.left, element);
    else if (this.compare(node.element, element) < 0) // 当前元素比 要搜索的元素 小
      return this.recursiveContains(node.right, element);
    else // 两个元素相等
      return true;
  }

  // 前序遍历 +
  preOrder (operator) {
    this.recursivePreOrder(this.root, operator);
  }

  // 前序遍历 递归算法 -
  recursivePreOrder (node, operator) {
    if (node === null) return;

    // 调用一下操作方法
    operator(node.element);
    console.log(node, node.element);

    // 继续递归遍历左右子树
    this.recursivePreOrder(node.left, operator);
    this.recursivePreOrder(node.right, operator);
  }

  // 前序遍历 非递归算法 +
  nonRecursivePreOrder (operator) {
    let stack = new MyLinkedListStack();
    stack.push(this.root);

    let node = null;
    while (!stack.isEmpty()) {
      // 出栈操作
      node = stack.pop();

      operator(node.element); // 访问当前的节点
      console.log(node.element);

      // 栈是先入后出的，把需要后访问的节点 先放进去，先访问的节点后放进去
      // 前序遍历是访问当前节点，然后再遍历左子树，最后遍历右子树
      if (node.right !== null)
        stack.push(node.right);
      if (node.left !== null)
        stack.push(node.left);
    }
  }

  // 中序遍历 +
  inOrder (operator) {
    this.recursiveInOrder(this.root, operator);
  }

  // 中序遍历 递归算法 -
  recursiveInOrder (node, operator) {
    if (node == null) return;

    this.recursiveInOrder(node.left, operator);

    operator(node.element);
    console.log(node.element);

    this.recursiveInOrder(node.right, operator);
  }

  // 后序遍历 +
  postOrder (operator) {
    this.recursivePostOrder(this.root, operator);
  }

  // 后序遍历 递归算法 -
  recursivePostOrder (node, operator) {
    if (node == null) return;

    this.recursivePostOrder(node.left, operator);
    this.recursivePostOrder(node.right, operator);

    operator(node.element);
    console.log(node.element);
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

  // 输出二分搜索树中的信息
  // @Override toString 2018-11-03-jwl
  toString () {
    let treeInfo = "";
    treeInfo += this.getBinarySearchTreeString(this.root, 0, treeInfo);
    return treeInfo;
  }

  // 写一个辅助函数，用来生成二分搜索树信息的字符串
  getBinarySearchTreeString (node, depth, treeInfo, pageContent = "") { //以前序遍历的方式

    if (node === null) {
      treeInfo += this.getDepthString(depth) + "null \r\n";

      pageContent = this.getDepthString(depth) + "null<br /><br />";
      document.body.innerHTML += `${pageContent}`;

      return treeInfo;
    }

    treeInfo += this.getDepthString(depth) + node.element + "\r\n";

    pageContent = this.getDepthString(depth) + node.element + "<br /><br />";
    document.body.innerHTML += `${pageContent}`;

    treeInfo = this.getBinarySearchTreeString(node.left, depth + 1, treeInfo);
    treeInfo = this.getBinarySearchTreeString(node.right, depth + 1, treeInfo);

    return treeInfo;
  }

  // 写一个辅助函数，用来生成递归深度字符串
  getDepthString (depth) {
    let depthString = "";
    for (var i = 0; i < depth; i++) {
      depthString += "-- ";
    }
    return depthString;
  }

}

