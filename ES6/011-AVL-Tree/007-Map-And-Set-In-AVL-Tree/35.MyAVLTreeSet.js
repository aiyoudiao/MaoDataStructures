// 自定义AVLTree集合 AVLTreeSet
class MyAVLTreeSet {
  // 
  constructor () {
    this.myAVLTree = new MyAVLTree();
  }

  add (element) {
    this.myAVLTree.add(element, null);
  }

  remove (element) {
    this.myAVLTree.remove(element);
  }

  contains (element) {
    return this.myAVLTree.contains(element);
  }

  getSize () {
    return this.myAVLTree.getSize();
  }

  isEmpty () {
    return this.myAVLTree.isEmpty();
  }
}

