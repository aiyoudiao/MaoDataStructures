// 自定义链表
class MyLinkedList {
  constructor () {
    this.dummyHead = new MyLinkedListNode(null, null);
    this.size = 0;
  }

  // 获取链表中实际的节点个数
  getSize () {
    return this.size;
  }

  // 判断链表是否为空
  isEmpty () {
    return this.size === 0;
  }

  // 在链表头添加节点
  addFirst (element) {
    // let node = new MyLinkedListNode(element, null);
    // node.next = this.head;
    // this.head = node;
    // this.size ++;
    
    // 改用虚拟头节点
    this.insert(0, element);
  }

  // 在链表指定索引处插入节点
  insert (index, element) {

    if (index < 0 || index > this.size) {
      throw new Error("add error. index < 0 or index > size");
    }
   
    // 第一个prev就是dummyHead
    let prev = this.dummyHead;
    // 之前变量i(索引)之所以要从 1 开始，因为索引为0的那个节点就是head，循环就不需要从0开始了，
    // 现在索引之所以要从 0 开始， 因为初始化时 多增加了一个虚拟的头节点
    // （因为这个索引为0的节点并不是dummyHead，dummyHead这个节点并不记录为链表中的实际节点），
    // 小于index是因为要找到指定索引位置的前一个节点
    // 循环是因为 要继续找到指定索引处的节点的前一个节点
    for (var i = 0; i < index; i++) {
      // 不停的切换引用，直到找到对应索引处节点的下一个节点
      prev = prev.next;
    }

    let node = new MyLinkedListNode(element, null);
    node.next = prev.next;
    prev.next = node;
    this.size ++;
    
  }

  // 扩展：在链表最后一个节点的位置添加节点
  addLast (element) {
    this.insert(this.size, element);
  }

  // 获取指定索引位置的元素
  get (index) {

    // 判断索引合法性
    if (index < 0 || index >= this.size) {
      throw new Error("get error. index < 0 or index >= size")
    }

    // 如果你要找指定索引节点的前一个节点 就使用dummyHead
    // 如果你要找到指定索引节点 就使用dummyHead.next
    // 因为duumyHead并不是第一个节点，因为它是一个虚拟节点，
    // dummyHead.next才是真正被记录的第一个节点。
    let node = this.dummyHead.next;
    for (var i = 0; i < index; i++) {
      node = node.next;
    }

    return node.element;
  }

  // 获取头节点的元素
  getFirst () {
    return this.get(0);
  }

  // 获取尾节点的元素
  getLast () {
    return this.get(this.size - 1);
  }

  // 设置指定索引位置的元素值
  set (index, element) {
        // 判断索引合法性
    if (index < 0 || index >= this.size) {
      throw new Error("get error. index < 0 or index >= size")
    }

    // 从第一个真正被记录的节点开始，从0开始
    let node = this.dummyHead.next;

    // 索引为 0 时，实际上切换到的节点 它的索引为 1
    // i < index ，当索引为 index-1 时， 实际上切换到的节点 它的索引为index
    for (let i = 0; i < index; i++) {
      // 每一次切换 都只是改变引用
      // 不的在链表中找下一个节点
      node = node.next;
    }

    node.element = element;
  }

  // 所有节点中是否有包含该元素
  contains (element) {

    let node = this.dummyHead;

    while (node.next !== null) {
      if (node.next.element === element)
        return true;
      // 不停的向下切换
      node = node.next;
    }

    return false;
  }

  // 输出链表中的信息
  // @Override toString 2018-10-21-jwl
  toString () {
    let arrInfo = `LinkedList: size = ${this.size}，\n`;
    arrInfo += `data = front  [`;
    let node = this.dummyHead.next;
    while (node.next !== null) {
      arrInfo += `${node.element}->`;
      node = node.next;
    }
    arrInfo += "NULL] tail";

    // 在页面上展示
    document.body.innerHTML += `${arrInfo}<br /><br /> `;

    return arrInfo;
  }
}

