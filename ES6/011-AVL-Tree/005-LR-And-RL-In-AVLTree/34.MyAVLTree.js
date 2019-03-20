// 自定义AVL树 AVLTree
class MyAVLTree {
  constructor () {
    this.root = null;
    this.size = 0;
  }

  // 比较的功能
  compare (keyA, keyB) {
    if (keyA === null || keyB === null)
      throw new Error("key is error. key can't compare.");
    if (keyA > keyB)
      return 1;
    else if (keyA < keyB)
      return -1;
    else
      return 0;
  }

  // 获取某个节点的高度 -
  getHeight (node) {
    // 节点为空 返回0
    if (!node)
      return 0;

    // 直接返回这个节点的高度 
    return node.height;
  }

  // 获取一个节点的平衡因子 -
  getBalanceFactor (node) {
    // 节点为空 返回0
    if (!node)
      return 0;

    // 左右子树的高度值
    const leftHeight = this.getHeight(node.left);
    const rightHeight = this.getHeight(node.right);

    // 左子树的高度 - 右子树高度的值 = 平衡因子
    return leftHeight - rightHeight;
  }

  // 根据key获取节点 -
  getNode (node, key) {
    // 先解决最基本的问题
    if (node === null) return null;

    // 开始将复杂的问题 逐渐缩小规模
    // 从而求出小问题的解，最后构建出原问题的解
    switch (this.compare(node.key, key)) {
      case 1 :  // 向左找
        return this.getNode(node.left, key);
      break;
      case -1 : // 向右找
        return this.getNode(node.right, key);
      break;
      case 0 :  // 找到了
        return node;
      break;
      default :
        throw new Error("compare result is error. compare result : 0、 1、 -1 .");
      break;
    }
  }

  // 对节点y进行向右旋转操作，返回旋转后新的根节点x
  //        y                              x
  //       / \                           /   \
  //      x   T4     向右旋转 (y)        z     y
  //     / \       - - - - - - - ->    / \   / \
  //    z   T3                       T1  T2 T3 T4
  //   / \
  // T1   T2
  rightRotate (y) {
    const x = y.left;
    const T3 = x.right;

    // 向右旋转的过程
    y.left = T3;
    x.right = y;

    // 更新节点的height值 只需要更新x和y的即可
    y.height = 1 + Math.max(this.getHeight(y.left), this.getHeight(y.right));
    x.height = 1 + Math.max(this.getHeight(x.left), this.getHeight(x.right));

    // 返回 新节点 x
    return x;
  }

  // 对节点y进行向左旋转操作，返回旋转后新的根节点x
  //    y                             x
  //  /  \                          /   \
  // T1   x      向左旋转 (y)       y     z
  //     / \   - - - - - - - ->   / \   / \
  //   T2  z                     T1 T2 T3 T4
  //      / \
  //     T3 T4
  leftRotate (y) {
    const x = y.right;
    const T2 = x.left;

    // 向左旋转的过程
    y.right = T2;
    x.left = y;

    // 更新节点的height值 只需要更新x和y的即可
    y.height = 1 + Math.max(this.getHeight(y.left), this.getHeight(y.right));
    x.height = 1 + Math.max(this.getHeight(x.left), this.getHeight(x.right));

    // 返回 新节点 x
    return x;
  }

  // 添加操作 +
  add (key, value) {
    this.root = this.recursiveAdd(this.root, key ,value);
  }

  // 添加操作 递归算法 -
  recursiveAdd (node, key, value) {

    // 解决最简单的问题
    if (node === null) {
      this.size ++;
      return new MyAVLTreeNode(key, value);
    }

    // 将复杂的问题规模逐渐变小，
    // 从而求出小问题的解，从而构建出原问题的答案
    if (this.compare(node.key, key) > 0)
      node.left = this.recursiveAdd(node.left, key, value);
    else if (this.compare(node.key, key) < 0)
      node.right = this.recursiveAdd(node.right, key, value);
    else
      node.value = value;

    // 在这里对节点的高度进行重新计算  节点本身高度为1
    // 计算方式： 1 + 左右子树的height值最大的那个height值
    node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

    // 计算一个节点的平衡因子
    const balanceFactor = this.getBalanceFactor(node);

    // 如果平衡因子的绝对值大于1 说明不满足AVL平衡二叉树的性质了
    if (Math.abs(balanceFactor) > 1) {
      console.log(node.toString() + "  unbalanced : " + balanceFactor + "\r\n");
      document.body.innerHTML += node.toString() + "  unbalanced : " + balanceFactor + "<br/>";
    }

    // LL情况 平衡维护 右旋转操作 平衡因子为正数则表示左倾 反之为右倾
    if (balanceFactor > 1 && this.getBalanceFactor(node.left) >= 0)
      return this.rightRotate(node);

    // RR情况 平衡维护 左旋转操作 平衡因子为负数则表示右倾 反之为左倾 
    if (balanceFactor < -1 && this.getBalanceFactor(node.right) <= 0)
      return this.leftRotate(node);

    // LR情况 平衡维护 先转换为LL情况 再处理LL情况
    if (balanceFactor > 1 && this.getBalanceFactor(node.left) < 0) {
      node.left = this.leftRotate(node.left);
      return this.rightRotate(node);
    }

    // RL情况 平衡维护 先转换为RR情况 再处理RR情况
    if (balanceFactor < -1 && this.getBalanceFactor(node.right) > 0) {
      node.right = this.rightRotate(node.right);
      return this.leftRotate(node);
    }

    return node;
  }

  // 删除操作 返回被删除的元素 +
  remove (key) {
    let node = this.getNode(this.root, key);
    if (node === null) 
      return null;

    this.root = this.recursiveRemove(this.root, key);
    return node.value;
  }

  // 删除操作 递归算法 +
  recursiveRemove (node, key) {

    // 解决最基本的问题
    if (node === null)
      return null;

    if (this.compare(node.key, key) > 0) {
      node.left = this.recursiveRemove(node.left, key);
      return node;
    } else if (this.compare(node.key, key) < 0) {
      node.right = this.recursiveRemove(node.right, key);
      return node;
    } else {
      // 当前节点的key 与 待删除的key的那个节点相同
      // 有三种情况
      // 1. 当前节点没有左子树，那么只有让当前节点的右子树直接覆盖当前节点，就表示当前节点被删除了
      // 2. 当前节点没有右子树，那么只有让当前节点的左子树直接覆盖当前节点，就表示当前节点被删除了
      // 3. 当前节点左右子树都有， 那么又分两种情况，使用前驱删除法或者后继删除法
      //      1. 前驱删除法：使用当前节点的左子树上最大的那个节点覆盖当前节点
      //      2. 后继删除法：使用当前节点的右子树上最小的那个节点覆盖当前节点
      
      if (node.left === null) {
        let rightNode = node.right;
        node.right = null;
        this.size --;
        return rightNode;
      } else if (node.right === null) {
        let leftNode = node.left;
        node.left = null;
        this.size --;
        return leftNode;
      } else {
        let predecessor = this.maximum(node.left);
        node.left = this.removeMax(node.left);
        this.size ++;

        // 开始嫁接 当前节点的左右子树
        predecessor.left = node.left;
        predecessor.right = node.right;

        // 将当前节点从根节点剔除
        node = node.left = node.right = null;
        this.size --;

        // 返回嫁接后的新节点
        return predecessor
      }
    }
  }

  // 删除操作的两个辅助函数
  // 获取最大值、删除最大值
  // 以前驱的方式 来辅助删除操作的函数

  // 获取最大值
  maximum (node) {

    // 再也不能往右了，说明当前节点已经是最大的了
    if (node.right === null) 
      return node;

    // 将复杂的问题渐渐减小规模，从而求出小问题的解，最后用小问题的解构建出原问题的答案
    return this.maximum(node.right);
  }

  // 删除最大值
  removeMax (node) {

    // 解决最基本的问题
    if (node.right === null) {
      let leftNode = node.left;
      node.left = null;
      this.size -- ;
      return leftNode;
    }

    // 开始化归
    node.right = this.removeMax(node.right);
    return node;
  }

  // 查询操作 返回查询到的元素 +
  get (key) {
    let node = this.getNode(this.root, key);
    if (node === null)
      return null;
    return node.value;
  }

  // 修改操作 +
  set (key, value) {
    let node = this.getNode(this.root, key);
    if (node === null)
      throw new Error(key + " doesn't exist.");

    node.value = value;
  }

  // 返回是否包含该key的元素的判断值  +
  contains (key) {
    return this.getNode(this.root, key) !== null;
  }

  // 返回映射中实际的元素个数 +
  getSize () {
    return this.size;
  }

  // 返回映射中是否为空的判断值  +
  isEmpty () {
    return this.size === 0;
  }

  // 判断当前这棵树是否是一棵二分搜索树，有二分搜索树顺序性
  isBanarySearchTree () {
    // 如果节点为空 那么这就是一棵空的二分搜索树
    if (!this.root)
      return true;

    // 存储二分搜索树中的key
    const list = new Array();

    // 中序遍历后，添加到list中的值会是以从小到大升序的样子排列
    this.inOrder(this.root, list);

    // 从前往后判断 list中的值是否是从小到大升序的排列
    // 验证 当前树是否符合二分搜索树的性质
    for (var i = 1; i < list.length; i++)
      if (list[i - 1] > list[i])
        return false;
    return true;
  }

  // 中序遍历  辅助函数 -
  inOrder (node, list) {
    // 递归到底的情况
    if (!node)
      return

    // 中序遍历时，添加到数组中的值会是以从小到大升序的样子排列
    this.inOrder(node.left, list);
    list.push(node.key);
    this.inOrder(node.right, list);
  }

  // 判断该二叉树是否一棵平衡二叉树
  isBalanced () {
    return this.recursiveIsBalanced(this.root);
  }

  // 递归判断某一个节点是否符合平衡二叉树的定义 辅助函数 -
  recursiveIsBalanced (node) {

    // 能够递归到底，说明符合要求
    // 空的节点左右孩子高度差肯定为0，
    // 因为空树没有左右子树，更加谈不上下面去判断它的左右子树高度差是否会超过一。
    if (!node)
      return true;

    // 如果当前节点的高度差大于1 说明不符合要求
    if (Math.abs(this.getBalanceFactor(node)) > 1)
      return false;

    // 递归的去判断当前节点的 左右子树是否符合要求
    return this.recursiveIsBalanced(node.left) && this.recursiveIsBalanced(node.right);
  }

  // @Override toString() 2018-11-05-jwl
  toString () {
    let mapInfo = `MyBinarySearchTreeMap: size = ${this.size}, data = [ `;
    document.body.innerHTML += `MyBinarySearchTreeMap: size = ${this.size}, data = [ <br/><br/>`;

    // 以非递归的前序遍历 输出字符串
    let stack = new MyLinkedListStack();

    stack.push(this.root);

    if (this.root === null)
      stack.pop();

    while(!stack.isEmpty()) {
      let node = stack.pop();

      if (node.left !== null)
        stack.push(node.left);
      if (node.right !== null)
        stack.push(node.right);

      if (node.left === null && node.right === null) {
        mapInfo += ` ${node.toString()} \r\n`;
        document.body.innerHTML += ` ${node.toString()} <br/><br/>`;
      } else {
        mapInfo += ` ${node.toString()}, \r\n`;
        document.body.innerHTML += ` ${node.toString()}, <br/><br/>`;
      }
    }

    mapInfo += ` ] \r\n`;
    document.body.innerHTML += ` ] <br/><br/>`;

    return mapInfo;
  }
}

