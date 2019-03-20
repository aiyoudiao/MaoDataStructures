// 自定义红黑树节点 RedBalckTreeNode
class MyRedBalckTreeNode {
  constructor (key = null, value = null, left = null, right = null) {
    this.key = key;
    this.value = value;
    this.left = left;
    this.right = right;
    this.color = MyRedBlackTree.RED;// MyRedBlackTree.BLACK;
  }

  // @Override toString 2018-11-25-jwl
  toString () {
    return this.key.toString() 
    + "--->" + this.value.toString() 
    + "--->" + (this.color ? "红色节点" : "绿色节点");
  }
}

