// 自定义链表节点
class MyLinkedListNode {
  constructor (element = null, next = null) {
    this.element = element;
    this.next = next;
  }

  //@override
  // toString 2018-10-20-jwl
  toString () {
    return this.element.toString();
  }
}

