// 自定义链表集合Set
class MyLinkedListSet {
  // 
  constructor () {
    this.myLinkedList = new MyLinkedList();
  }

  add (element) {
    if (!this.myLinkedList.contains(element))
      this.myLinkedList.addFirst(element);
  }

  remove (element) {
    this.myLinkedList.removeElement(element);
  }

  contains (element) {
    return this.myLinkedList.contains(element);
  }

  each (operator) {
    let size = this.myLinkedList.getSize();
    for (var i = 0; i < size; i++) {
      operator(this.myLinkedList.get(i));
    }
  }

  getSize () {
    return this.myLinkedList.getSize();
  }

  isEmpty () {
    return this.myLinkedList.isEmpty();
  }
}

