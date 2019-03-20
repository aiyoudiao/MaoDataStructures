// 自定义链表队列
class MyLinkedListQueue {
  constructor () {
    this.front = this.tail = null;
    this.size = 0;
  }

  // 入队
  enqueue (element) {

    // 判断队尾是否为空
    if (this.tail === null) {
      // 第一个节点 即是尾也是头
      this.tail = new MyLinkedListNode(element, null);
      this.front = this.tail;
    } else {
      let node = new MyLinkedListNode(element, null);
      this.tail.next = node;
      this.tail = node;
    }
    this.size ++;
  }

  // 出队
  dequeue () {
    // 判断队首是否为空
    if (this.front === null) {
      throw new Error("front is empty.");
    }

    let delNode = this.front;
    let element = delNode.element;
    this.front = this.front.next;
    delNode = null;
    if (this.front === null) // 如果头为空了，那么尾部也为空
      this.tail = null;

    this.size --;

    return element;
  }

  // 查看队首的元素
  getFront () {
    // 判断队首是否为空
    if (this.front === null) {
      throw new Error("front is empty.");
    }

    return this.front.element;
  }

  // 查看队列中实际元素的个数
  getSize () {
    return this.size;
  }

  // 判断队列是否为空
  isEmpty () {
    return this.size === 0
  }

  // 输出队列中的信息
  // @Override toString 2018-10-21-jwl
  toString () {
    let arrInfo = `LinkedListQueue: size = ${this.getSize()}，\n`;
    arrInfo += `data = front [`;
    let node = this.front;
    for (var i = 1; i < this.getSize(); i++) {
      arrInfo += `${node.element},`;
      node = node.next;
    }
    if (!this.isEmpty()) {
      arrInfo += `${node.element}`;
    }
    arrInfo += "] tail";

    // 在页面上展示
    document.body.innerHTML += `${arrInfo}<br /><br /> `;

    return arrInfo;
  }
}

