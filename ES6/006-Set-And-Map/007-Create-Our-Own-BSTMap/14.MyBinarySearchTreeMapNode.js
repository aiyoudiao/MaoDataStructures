// 自定义二分搜索树树映射节点 TreeMapNode
class MyBinarySearchTreeMapNode {
  constructor (key = null, value = null, left = null, right = null) {
    this.key = key;
    this.value = value;
    this.left = left;
    this.right = right;
  }

  // @Override toString 2018-11-5-jwl
  toString () {
    return this.key.toString() + "---------->" + this.value.toString();
  }
}

