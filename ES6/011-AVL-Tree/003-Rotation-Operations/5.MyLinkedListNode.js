// 自定义链表节点
class MyLinkedListNode {
  constructor (element = null, next = null) {
    this.element = element;
    this.next = next;
  }

  // 将一个数组对象 转换为一个链表 并且追加到当前节点上
  appendToLinkedListNode (array) {

    let head = null;
    if (this.element === null) { // 头部添加
      head = this;
      head.element = array[0];
      head.next = null;
    } else { // 插入式
      head = new MyLinkedListNode(array[0], null);
      head.next = this.next;
      this.next = head;
    }

    // 添加节点的方式  头部添加、尾部添加、中间插入

    // 尾部添加节点的方式
    for (var i = 1; i < array.length; i++) {
      head.next = new MyLinkedListNode(array[i], null);
      head = head.next;
    }
  }

  //@override
  // toString 2018-10-20-jwl
  toString () {
    return this.element.toString();
  }
}

