// 自定义链表映射节点 LinkedListMapNode
class MyLinkedListMapNode {
  constructor (key = null, value = null, next = null) {
    this.key = key;
    this.value = value;
    this.next = next
  }

  // @Override toString 2018-11-5-jwl
  toString () {
    return this.key.toString() + "---------->" + this.value.toString();
  }
}

