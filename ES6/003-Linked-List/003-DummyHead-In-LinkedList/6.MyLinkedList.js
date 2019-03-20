// 自定义链表
class MyLinkedList {
  constructor () {
    this.dummyHead = new MyLinkedListNode(null, null);
    this.size = 0;
  }

  // 获取链表中实际的节点个数
  getSise () {
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
    insert(0, element);
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
}

