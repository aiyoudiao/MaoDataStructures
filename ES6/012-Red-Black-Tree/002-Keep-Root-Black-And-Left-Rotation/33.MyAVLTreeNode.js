// 自定义AVL树节点 AVLTreeNode
class MyAVLTreeNode {
  constructor (key = null, value = null, left = null, right = null) {
    this.key = key;
    this.value = value;
    this.left = left;
    this.right = right;
    this.height = 1;
  }

  // @Override toString 2018-11-24-jwl
  toString () {
    return this.key +
     "--->" +
     this.value + 
     "--->" + 
     this.height;
  }
}

