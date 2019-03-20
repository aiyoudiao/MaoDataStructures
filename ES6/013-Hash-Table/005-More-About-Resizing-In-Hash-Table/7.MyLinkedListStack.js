// 自定义链表栈
class MyLinkedListStack {
  constructor () {
    this.myLinkedList = new MyLinkedList();
  }

  // 入栈
  push (element) {
    this.myLinkedList.addFirst(element)
  }

  // 出栈
  pop () {
    return this.myLinkedList.removeFirst();
  }

  // 查看栈顶元素
  peek () {
    return this.myLinkedList.getFirst();
  }

  // 查看栈中实际元素的个数
  getSize () {
    return this.myLinkedList.getSize();
  }

  // 判断栈是否为空
  isEmpty () {
    return this.myLinkedList.isEmpty();
  }

  // 输出栈中信息
  // @Override toString 2018-10-21-jwl
  toString () {
    let arrInfo = `LinkedListStack: size = ${this.getSize()}，\n`;
    arrInfo += `data = stack top [`;
    let node = this.myLinkedList.dummyHead.next;
    for (var i = 1; i < this.getSize(); i++) {
      arrInfo += `${node.element},`;
      node = node.next;
    }
    if (!this.isEmpty()) {
      arrInfo += `${node.element}`;
    }
    arrInfo += "]";

    // 在页面上展示
    document.body.innerHTML += `${arrInfo}<br /><br /> `;

    return arrInfo;
  }
}

