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

  // 找到二分搜索树中的最大值的元素 +
  maximum () {
    if (this.size === 0)
      throw new Error("binary search tree is empty.");

    return this.recursiveMaximum(this.root).element;
  }

  // 找到二分搜索树中的最大值的元素的节点 递归算法 -
  recursiveMaximum (node) {
    
    // 解决最基本的问题  向右走再也走不动了，说明当前节点就是最大值节点。
    if (node.right === null)
      return node;

    return this.recursiveMaximum(node.right);
  }

  // 删除二分搜索树中最大值的元素的节点，并返回这个节点的元素 +
  removeMax () {
    let maxElement = this.maximum();
    this.root = this.recursiveRemoveMax(this.root);
    return maxElement;
  }

  // 删除二分搜索树中最大值的元素的节点，并返回这个节点 递归算法 -
  recursiveRemoveMax (node) {

    if (node.right === null) {
      // 先存 当前这个节点的左子树，
      // 因为可能当前这个节点仅仅没有右子树，只有左子树，
      // 那么左子树可以替代当前这个节点。
      let leftNode = node.left;
      node.left = null;
      this.size --;

      return leftNode;
    }

    node.right = this.recursiveRemoveMax(node.right);
    return node;
  }

  // 找到二分搜索树中的最小值 +
  minimum () {
    if (this.size === 0)
      throw new Error("binary search tree is empty.");

    return this.recursiveMinimum(this.root).element;
  }
  
  // 找到二分搜索树中的最小值的元素的节点 递归算法 -
  recursiveMinimum (node) {
    if (node.left === null) return node;

    return this.recursiveMinimum(node.left);
  }

  // 删除二分搜索树中最小值的元素的节点，并返回这个节点的元素 +
  removeMin () {
    let leftNode = this.minimum();
    this.root = this.recursiveRemoveMin(this.root);
    return leftNode;
  }

  // 删除二分搜索树中最小值的元素的节点，并返回这个节点 递归算法 -
  recursiveRemoveMin (node) {

    // 解决最简单的问题
    if (node.left == null) {
      let rightNode = node.right;
      node.right = null;
      this.size --;
      return rightNode;
    }

    // 将复杂的问题拆分为性质相同的小问题，
    // 然后求出这些小问题的解后构建出原问题的答案
    node.left = this.recursiveRemoveMin(node.left);
    return node;
  }

  // 删除二分搜索树上的任意节点
  remove (element) {
    this.root = this.recursiveRemove(this.root, element);
  }

  // 删除二分搜索树上的任意节点 递归算法
  // 返回删除对应元素节点后新的二分搜索树的根
  recursiveRemove (node, element) {
    if (node === null) return null;

    // 当前节点的元素值比待删除的元素小  那么就向当前节点的右子树中去找
    if (this.compare(node.element, element) < 0) {  
      node.right = this.recursiveRemove(node.right, element);
      return node;
    } else if (this.compare(node.element, element) > 0) { // 向当前节点的左子树中去找
      node.left = this.recursiveRemove(node.left, element);
      return node;
    } else { // 如果找到了相同值的节点了，开始进行相应的处理
      
      // 如果这个节点左子树为空，那么就让这个节点的右子树覆盖当前节点
      if (node.left === null) {
        let rightNode = node.right;
        node.right = null;
        this.size --;
        return rightNode;
      }

      // 如果当前节点的右子树为空，那么就让这个节点的左子树覆盖当前节点
      if (node.right === null) {
        let leftNode = node.left;
        node.left = null;
        this.size --;
        return leftNode;
      }

      // 如果当前节点的左右子树都不为空，那么就开始特殊操作
      // 1. 先找到当前节点右子树上最小的那个节点，保存起来
      // 2. 然后删除掉当前节点右子树上最小的那个节点，
      // 3. 让保存起来的那个节点覆盖掉当前节点
      //    1. 也就是保存起来的那个节点的right = 删除掉当前节点右子树上最小的节点后返回的那个节点
      //    2. 再让保存起来的那个节点的left = 当前节点的left
      // 4. 解除当前节点及其left和right，全都赋值为null，这样就相当于把当前节点从二分搜索树中剔除了
      // 5. 返回保存的这个节点

      let successtor = this.recursiveMinimum(node.right);
      successtor.right = this.recursiveRemoveMin(node.right);

      // 恢复removeMin 操作的this.size -- 带来的影响
      this.size ++;

      successtor.left = node.left;

      // 开始正式的删除当前节点的操作
      node = node.left = node.right = null;
      this.size --;

      // 返回当前保存的节点
      return successtor;
    }
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

  // 层序遍历
  levelOrder (operator) {
    let queue = new MyLinkedListQueue();
    queue.enqueue(this.root);

    let node = null;
    while(!queue.isEmpty()) {
      node = queue.dequeue();

      operator(node.element);
      console.log(node.element);

      // 队列 是先进先出的，所以从左往右入队
      // 栈  是后进先出的， 所以从右往左入栈
      if (node.left !== null)
        queue.enqueue(node.left);

      if (node.right !== null)
        queue.enqueue(node.right);
    }
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

