// 自定义AVLTree集合 RedBlackSet
class MyRedBlackSet {
  // 
  constructor () {
    this.myRedBlack = new MyRedBlack();
  }

  add (element) {
    this.myRedBlack.add(element, null);
  }

  remove (element) {
    this.myRedBlack.remove(element);
  }

  contains (element) {
    return this.myRedBlack.contains(element);
  }

  getSize () {
    return this.myRedBlack.getSize();
  }

  isEmpty () {
    return this.myRedBlack.isEmpty();
  }
}

