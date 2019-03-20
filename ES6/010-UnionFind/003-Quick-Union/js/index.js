/*
* @Author: LENOVO
* @Date:   2018-10-19 14:51:45
* @Last Modified by:   LENOVO
* @Last Modified time: 2018-11-23 21:22:30
*/

'use strict';

// 自定义类
class MyArray {

  // 构造函数，传入数组的容量capacity构造Array 默认数组的容量capacity=10
  constructor (capacity = 10) {
    this.data = new Array(capacity);
    this.size = 0;
  }

  // 获取数组中的元素实际个数
  getSize () {
    return this.size;
  }

  // 获取数组的容量
  getCapacity () {
    return this.data.length;
  }

  // 判断数组是否为空
  isEmpty () {
    return this.size === 0;
  }

  // 给数组扩容
  resize (capacity) {

    let newArray = new Array(capacity);
    for (var i = 0; i < this.size; i++) {
      newArray[i] = this.data[i];
    }

    // let index = this.size - 1;
    // while (index > -1) {
    //   newArray[index] = this.data[index];
    //   index --;
    // }

    this.data = newArray;
  }

  // 在指定索引处插入元素
  insert (index, element) {
    // 先判断数组是否已满
    if (this.size == this.getCapacity()) {
      // throw new Error("add error. Array is full.");
      this.resize(this.size * 2);
    }

    // 然后判断索引是否符合要求
    if (index < 0 || index > this.size) {
      throw new Error("insert error. require  index < 0 or index > size.");
    }

    // 最后 将指定索引处腾出来
    // 从指定索引处开始，所有数组元素全部往后移动一位
    // 从后往前移动
    for (let i = this.size - 1; i >= index; i--) {
      this.data[i + 1] = this.data[i];
    }

    // 在指定索引处插入元素
    this.data[index] = element;
    // 维护一下size
    this.size ++;
  }

  // 扩展 在数组最前面插入一个元素
  unshift (element) {
    this.insert(0, element);
  }

  // 扩展 在数组最后面插入一个元素
  push (element) {
    this.insert(this.size, element);
  }

  // 其实在数组中添加元素 就相当于在数组最后面插入一个元素
  add (element) {
    if (this.size == this.getCapacity()) {
      // throw new Error("add error. Array is full.");
      this.resize(this.size * 2);
    }

    // size其实指向的是 当前数组最后一个元素的 后一个位置的索引。
    this.data[this.size] = element;
    // 维护size
    this.size ++;
  }

  // get
  get (index) {
    // 不能访问没有存放元素的位置
    if (index < 0 || index >= this.size) {
      throw new Error("get error. index < 0 or index >= size.");
    }
    return this.data[index];
  }

  // 扩展： 获取数组中第一个元素
  getFirst () {
    return this.get(0);
  }


  // 扩展： 获取数组中最后一个元素
  getLast () {
    return this.get(this.size - 1);
  }


  // set
  set (index, newElement) {
    // 不能修改没有存放元素的位置
    if (index < 0 || index >= this.size) {
      throw new Error("set error. index < 0 or index >= size.");
    }
    this.data[index] = newElement;
  }

  // contain
  contain (element) {
    for (var i = 0; i < this.size; i++) {
      if (this.data[i] === element) {
        return true;
      }
    }
    return false;
  }

  // find
  find (element) {
    for (var i = 0; i < this.size; i++) {
      if (this.data[i] === element) {
        return i;
      }
    }
    return -1;
  }

  // findAll
  findAll (element) {
    // 创建一个自定义数组来存取这些 元素的索引
    let myarray = new MyArray(this.size);

    for (var i = 0; i < this.size; i++) {
      if (this.data[i] === element) {
        myarray.push(i);
      }
    }

    // 返回这个自定义数组
    return myarray;
  }

  // 删除指定索引处的元素
  remove (index) {

    // 索引合法性验证
    if (index < 0 || index >= this.size) {
      throw new Error("remove error. index < 0 or index >= size.");
    }

    // 暂存即将要被删除的元素
    let element = this.data[index];

    // 后面的元素覆盖前面的元素
    for (let i = index; i < this.size - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    this.size --;
    this.data[this.size] = null;

    // 如果size 为容量的四分之一时 就可以缩容了
    // 防止复杂度震荡 
    if (Math.floor(this.getCapacity() / 4) === this.size) {
      
        // 缩容一半
      this.resize(Math.floor(this.getCapacity() / 2));
    }

    return element;
  }

  // 扩展：删除数组中第一个元素
  shift () {
    return this.remove(0);
  }

  // 扩展： 删除数组中最后一个元素
  pop () {
    return this.remove(this.size - 1);
  }


  // 扩展： 根据元素来进行删除
  removeElement (element) {

    let index = this.find(element);
    if (index !== -1) {
      this.remove(index);
    }
  }

  // 扩展： 根据元素来删除所有元素
  removeAllElement (element) {
    let index = this.find(element);
    while (index != -1) {
      this.remove(index);
      index = this.find(element);
    }

    // let indexArray = this.findAll(element);
    // let cur, index = 0;
    // for (var i = 0; i < indexArray.getSize(); i++) {
    //   // 每删除一个元素 原数组中就少一个元素，
    //   // 索引数组中的索引值是按照大小顺序排列的，
    //   // 所以 这个cur记录的是 原数组元素索引的偏移量
    //   // 只有这样才能够正确的删除元素。
    //   index = indexArray.get(i) - cur++;
    //   this.remove(index);
    // }
  }

  // 新增： 交换两个索引位置的变量 2018-11-6
  swap (indexA, indexB) {
    if (indexA < 0 || indexA >= this.size || indexB < 0 || indexB >= this.size)
          throw new Error("Index is Illegal.");// 索引越界异常

    let temp = this.data[indexA];
    this.data[indexA] = this.data[indexB];
    this.data[indexB] = temp;
  }

  // @Override toString 2018-10-17-jwl
  toString () {
    let arrInfo = `Array: size = ${this.getSize()}，capacity = ${this.getCapacity()}，\n`;
    arrInfo += `data = [`;
    for (var i = 0; i < this.size - 1; i++) {
      arrInfo += `${this.data[i]}, `;
    }
    if (!this.isEmpty()) {
     arrInfo += `${this.data[this.size - 1]}`;
    }
    arrInfo += `]`;

    // 在页面上展示
    document.body.innerHTML += `${arrInfo}<br /><br /> `;

    return arrInfo;
  }
}

// 自定栈
class MyStack {
  constructor (capacity = 10) {
    this.myArray = new MyArray(capacity);
  }

  // 入栈
  push (element) {
    this.myArray.push(element);
  }

  // 出栈
  pop () {
    return this.myArray.pop();
  }

  // 查看栈顶的元素
  peek () {
    return this.myArray.getLast();
  }

  // 栈中实际元素的个数
  getSize () {
    return this.myArray.getSize();
  }

  // 栈是否为空
  isEmpty () {
    return this.myArray.isEmpty();
  }

  // 查看栈的容量
  getCapacity () {
    return this.myArray.getCapacity();
  }

  // @Override toString 2018-10-20-jwl
  toString () {
    let arrInfo = `Stack: size = ${this.getSize()}，capacity = ${this.getCapacity()}，\n`;
    arrInfo += `data = [`;
    for (var i = 0; i < this.myArray.size - 1; i++) {
      arrInfo += `${this.myArray.data[i]}, `;
    }
    if (!this.isEmpty()) {
     arrInfo += `${this.myArray.data[this.myArray.size - 1]}`;
    }
    arrInfo += `] stack top is right!`;

    // 在页面上展示
    document.body.innerHTML += `${arrInfo}<br /><br /> `;

    return arrInfo;
  }
}

// 自定义队列
class MyQueue {
  constructor (capacity = 10) {
    this.myArray = new MyArray(capacity);
  }

  // 入队
  enqueue (element) {
    this.myArray.push(element);
  }

  // 出队
  dequeue () {
    return this.myArray.shift();
  }

  // 查看队首的元素
  getFront () {
    return this.myArray.getFirst();
  }

  // 查看队列中实际元素的个数
  getSize () {
    return this.myArray.getSize();
  }

  // 查看 队列当前的容量
  getCapacity () {
    return this.myArray.getCapacity();
  }

  // 查看队列是否为空
  isEmpty () {
    return this.myArray.isEmpty();
  }

  // 输出队列中的信息
  // @Override toString 2018-10-20-jwl
  toString () {
    let arrInfo = `Queue: size = ${this.getSize()}，capacity = ${this.getCapacity()}，\n`;
    arrInfo += `data = front  [`;
    for (var i = 0; i < this.myArray.size - 1; i++) {
      arrInfo += `${this.myArray.data[i]}, `;
    }
    if (!this.isEmpty()) {
     arrInfo += `${this.myArray.data[this.myArray.size - 1]}`;
    }
    arrInfo += `]  tail`;

    // 在页面上展示
    document.body.innerHTML += `${arrInfo}<br /><br /> `;

    return arrInfo;
  }
}

// 自定义循环队列
class MyLoopQueue {
  constructor (capacity = 10) {
    // 初始化新数组
    this.data = new Array(capacity);
    // 初始化 队首、队尾的值 (索引)
    this.front = this.tail = 0;
    // 队列中实际元素个数
    this.size = 0;
  }

  // 扩容
  resize (capacity) {
    let newArray = new Array(capacity);
    let index = 0;

    for (let i = 0; i < this.size; i++) {
        // 索引可能会越界，于是就要取余一下，
        // 如果越界了，就从队首开始
        index = (this.front + i) % this.getCapacity()
        newArray[i] = this.data[index] ;
    }

    this.data = newArray;
    this.front = 0;
    this.tail = this.size;
  }

  // 入队
  enqueue (element) {

    // 判断队列中是否已满
    if ((this.tail + 1) % this.getCapacity() === this.front) {
      this.resize(this.getCapacity() * 2);
    }

    this.data[this.tail] = element;
    this.tail = (this.tail + 1) % this.getCapacity();
    this.size ++;
  }

  // 出队
  dequeue () {
    // 判断队列是否为空
    if (this.isEmpty()) {
      throw new Error("can't dequeue from an empty queue.");
    }

    let element = this.data[this.front];
    this.data[this.front] = null;
    this.front = (this.front + 1) % this.getCapacity();
    this.size --;

    // 当size 为容量的四分之一时就缩容一倍
    if (this.size === Math.floor(this.getCapacity() / 4)) {
      this.resize(Math.floor(this.getCapacity() * 2));
    }
    return element;

  }

  // 查看队首的元素
  getFront () {
    if (this.isEmpty()) {
      throw new Error("queue is empty.");
    }

    return this.data[front];
  }

  // 查看实际的元素个数
  getSize () {
    return this.size;
  }

  // 查看容量
  getCapacity () {
    return this.data.length;
  }

  // 队列是否为空
  isEmpty () {
    // return this.size === 0;
    return this.front == this.tail;
  }
  
  // 输出循环队列中的信息
  // @Override toString 2018-10-20-jwl
  toString () {
    let arrInfo = `LoopQueue: size = ${this.getSize()}，capacity = ${this.getCapacity()}，\n`;
    arrInfo += `data = front  [`;
    for (var i = 0; i < this.myArray.size - 1; i++) {
      arrInfo += `${this.myArray.data[i]}, `;
    }
    if (!this.isEmpty()) {
     arrInfo += `${this.myArray.data[this.myArray.size - 1]}`;
    }
    arrInfo += `]  tail`;

    // 在页面上展示
    document.body.innerHTML += `${arrInfo}<br /><br /> `;

    return arrInfo;
  }
}

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

  // 删除指定索引位置的节点
  remove (index) {

    // 验证索引的合法性
    if (index < 0 || index >= this.size) {
      throw new Error("remove error. index < 0 or index > this.size");
    }

    let node = this.dummyHead;
    for (let i = 0; i < index; i ++) {
      node = node.next;
    }

    // 待删除的节点
    let delNode = node.next;
    // 给待删除那个节点的前一个的节点的next引用替换为
    // 但删除的这个节点的next
    node.next = delNode.next;
    // 或者这样也行
    // node.next = node.next.next;
    
    // 临时存储待删除的那个节点里的元素
    let element = delNode.element;
    // 清空 待删除的节点
    delNode = null;
    this.size --;

    return element;
  }

  // 扩展：移除链表头的元素
  removeFirst () {
    return this.remove(0);
  }

  // 扩展：移除链表尾部的元素
  removeLast () {
    return this.remove(this.size - 1);
  }

  // 新增：根据元素来删除链表中的元素 2018-11-05
  removeElement (element) {
    let prev =  this.dummyHead;

    while (prev.next !== null) {
      if (prev.next.element === element)
        break;
      prev = prev.next;
    }

    if (prev.next !== null) {
      let delNode = prev.next;
      prev.next = delNode.next;
      delNode = null;
      this.size --;
    }

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

// 自定义二分搜索树节点
class MyBinarySearchTreeNode {
  constructor (element, left = null, right = null) {
    
    // 实际存储的元素
    this.element = element;
    // 当前节点的左子树
    this.left = left;
    // 当前节点的右子树
    this.right = right
  }
}

// 自定义二分搜索树
class MyBinarySearchTree {
  constructor () {
    this.root = null;
    this.size = 0;
  }

  // 添加元素到二分搜索树中 + 
  add (element) {
    if (element === null) throw new Error("element is null. can't store.");

    this.root = this.recursiveAdd(this.root, element);
  }

  // 添加元素到二分搜索树中  递归算法 -
  recursiveAdd (node, newElement) {

    // 解决最基本的问题 也就是递归函数调用的终止条件
    if (node === null) {
       this.size ++;
       return new MyBinarySearchTreeNode(newElement);
    }
     
    // 1. 当前节点的元素比新元素大  
    // 那么新元素就会被添加到当前节点的左子树去
    // 2. 当前节点的元素比新元素小
    // 那么新元素就会被添加到当前节点的右子树去
    // 3. 当前节点的元素比新元素相等
    // 什么都不做了，因为目前不添加重复的元素
    if (this.compare(node.element, newElement) > 0)
      node.left = this.recursiveAdd(node.left, newElement);
    else if (this.compare(node.element, newElement) < 0)
      node.right = this.recursiveAdd(node.right, newElement);
    else {} 

    // 将复杂问题分解成多个性质相同的小问题，
    // 然后求出小问题的答案，
    // 最终构建出原问题的答案
    return node;
  }

  // 判断二分搜索树中是否包含某个元素 +
  contains (element) {
    if (this.root === null)
      throw new Error("root is null. can't query.");

    return this.recursiveContains(this.root, element);
  }

  // 判断二分搜索树种是否包含某个元素 递归算法 -
  recursiveContains (node, element) {
    if (node === null)
      return false;

    // 当前节点元素比 要搜索的元素 大
    if (this.compare(node.element, element) > 0)
      return this.recursiveContains(node.left, element);
    else if (this.compare(node.element, element) < 0) // 当前元素比 要搜索的元素 小
      return this.recursiveContains(node.right, element);
    else // 两个元素相等
      return true;
  }

  // 找到二分搜索树中的最大值的元素 +
  maximum () {
    if (this.size === 0)
      throw new Error("binary search tree is empty.");

    return this.recursiveMaximum(this.root).element;
  }

  // 找到二分搜索树中的最大值的元素的节点 递归算法 -
  recursiveMaximum (node) {
    
    // 解决最基本的问题  向右走再也走不动了，说明当前节点就是最大值节点。
    if (node.right === null)
      return node;

    return this.recursiveMaximum(node.right);
  }

  // 删除二分搜索树中最大值的元素的节点，并返回这个节点的元素 +
  removeMax () {
    let maxElement = this.maximum();
    this.root = this.recursiveRemoveMax(this.root);
    return maxElement;
  }

  // 删除二分搜索树中最大值的元素的节点，并返回这个节点 递归算法 -
  recursiveRemoveMax (node) {

    if (node.right === null) {
      // 先存 当前这个节点的左子树，
      // 因为可能当前这个节点仅仅没有右子树，只有左子树，
      // 那么左子树可以替代当前这个节点。
      let leftNode = node.left;
      node.left = null;
      this.size --;

      return leftNode;
    }

    node.right = this.recursiveRemoveMax(node.right);
    return node;
  }

  // 找到二分搜索树中的最小值 +
  minimum () {
    if (this.size === 0)
      throw new Error("binary search tree is empty.");

    return this.recursiveMinimum(this.root).element;
  }
  
  // 找到二分搜索树中的最小值的元素的节点 递归算法 -
  recursiveMinimum (node) {
    if (node.left === null) return node;

    return this.recursiveMinimum(node.left);
  }

  // 删除二分搜索树中最小值的元素的节点，并返回这个节点的元素 +
  removeMin () {
    let leftNode = this.minimum();
    this.root = this.recursiveRemoveMin(this.root);
    return leftNode;
  }

  // 删除二分搜索树中最小值的元素的节点，并返回这个节点 递归算法 -
  recursiveRemoveMin (node) {

    // 解决最简单的问题
    if (node.left === null) {
      let rightNode = node.right;
      node.right = null;
      this.size --;
      return rightNode;
    }

    // 将复杂的问题拆分为性质相同的小问题，
    // 然后求出这些小问题的解后构建出原问题的答案
    node.left = this.recursiveRemoveMin(node.left);
    return node;
  }

  // 删除二分搜索树上的任意节点
  remove (element) {
    this.root = this.recursiveRemove(this.root, element);
  }

  // 删除二分搜索树上的任意节点 递归算法
  // 返回删除对应元素节点后新的二分搜索树的根
  recursiveRemove (node, element) {
    if (node === null) return null;

    // 当前节点的元素值比待删除的元素小  那么就向当前节点的右子树中去找
    if (this.compare(node.element, element) < 0) {  
      node.right = this.recursiveRemove(node.right, element);
      return node;
    } else if (this.compare(node.element, element) > 0) { // 向当前节点的左子树中去找
      node.left = this.recursiveRemove(node.left, element);
      return node;
    } else { // 如果找到了相同值的节点了，开始进行相应的处理
      
      // 如果这个节点左子树为空，那么就让这个节点的右子树覆盖当前节点
      if (node.left === null) {
        let rightNode = node.right;
        node.right = null;
        this.size --;
        return rightNode;
      }

      // 如果当前节点的右子树为空，那么就让这个节点的左子树覆盖当前节点
      if (node.right === null) {
        let leftNode = node.left;
        node.left = null;
        this.size --;
        return leftNode;
      }

      // 如果当前节点的左右子树都不为空，那么就开始特殊操作
      // 1. 先找到当前节点右子树上最小的那个节点，保存起来
      // 2. 然后删除掉当前节点右子树上最小的那个节点，
      // 3. 让保存起来的那个节点覆盖掉当前节点
      //    1. 也就是保存起来的那个节点的right = 删除掉当前节点右子树上最小的节点后返回的那个节点
      //    2. 再让保存起来的那个节点的left = 当前节点的left
      // 4. 解除当前节点及其left和right，全都赋值为null，这样就相当于把当前节点从二分搜索树中剔除了
      // 5. 返回保存的这个节点

      let successtor = this.recursiveMinimum(node.right);
      successtor.right = this.recursiveRemoveMin(node.right);

      // 恢复removeMin 操作的this.size -- 带来的影响
      this.size ++;

      successtor.left = node.left;

      // 开始正式的删除当前节点的操作
      node = node.left = node.right = null;
      this.size --;
      
      // 返回当前保存的节点
      return successtor;
    }
  }


  // 前序遍历 +
  preOrder (operator) {
    this.recursivePreOrder(this.root, operator);
  }

  // 前序遍历 递归算法 -
  recursivePreOrder (node, operator) {
    if (node === null) return;

    // 调用一下操作方法
    operator(node.element);
    console.log(node, node.element);

    // 继续递归遍历左右子树
    this.recursivePreOrder(node.left, operator);
    this.recursivePreOrder(node.right, operator);
  }

  // 前序遍历 非递归算法 +
  nonRecursivePreOrder (operator) {
    let stack = new MyLinkedListStack();
    stack.push(this.root);

    let node = null;
    while (!stack.isEmpty()) {
      // 出栈操作
      node = stack.pop();

      operator(node.element); // 访问当前的节点
      console.log(node.element);

      // 栈是先入后出的，把需要后访问的节点 先放进去，先访问的节点后放进去
      // 前序遍历是访问当前节点，然后再遍历左子树，最后遍历右子树
      if (node.right !== null)
        stack.push(node.right);
      if (node.left !== null)
        stack.push(node.left);
    }
  }

  // 中序遍历 +
  inOrder (operator) {
    this.recursiveInOrder(this.root, operator);
  }

  // 中序遍历 递归算法 -
  recursiveInOrder (node, operator) {
    if (node == null) return;

    this.recursiveInOrder(node.left, operator);

    operator(node.element);
    console.log(node.element);

    this.recursiveInOrder(node.right, operator);
  }


  // 后序遍历 +
  postOrder (operator) {
    this.recursivePostOrder(this.root, operator);
  }

  // 后序遍历 递归算法 -
  recursivePostOrder (node, operator) {
    if (node == null) return;

    this.recursivePostOrder(node.left, operator);
    this.recursivePostOrder(node.right, operator);

    operator(node.element);
    console.log(node.element);
  }

  // 层序遍历
  levelOrder (operator) {
    let queue = new MyLinkedListQueue();
    queue.enqueue(this.root);

    let node = null;
    while(!queue.isEmpty()) {
      node = queue.dequeue();

      operator(node.element);
      console.log(node.element);

      // 队列 是先进先出的，所以从左往右入队
      // 栈  是后进先出的， 所以从右往左入栈
      if (node.left !== null)
        queue.enqueue(node.left);

      if (node.right !== null)
        queue.enqueue(node.right);
    }
  }


  // 获取二分搜索树中节点个数 +
  getSize () {
    return this.size;
  }

  // 返回二分搜索树是否为空的bool值 +
  isEmpty () {
    return this.size === 0;
  }

  // 新增一个比较的方法，专门用来比较新增的元素大小 -
  // 第一个元素比第二个元素大 就返回 1
  // 第一个元素比第二个元素小 就返回 -1
  // 第一个元素比第二个元素相等 就返回 0
  compare (elementA, elementB) {
    if (elementA === null || elementB === null)
      throw new Error("element is null. can't compare.");
    
    // 先直接写死
    if (elementA > elementB)
      return 1;
    else if (elementA < elementB)
      return -1;
    else
      return 0;
  }

  // 输出二分搜索树中的信息
  // @Override toString 2018-11-03-jwl
  toString () {
    let treeInfo = "";
    treeInfo += this.getBinarySearchTreeString(this.root, 0, treeInfo);
    return treeInfo;
  }

  // 写一个辅助函数，用来生成二分搜索树信息的字符串
  getBinarySearchTreeString (node, depth, treeInfo, pageContent = "") { //以前序遍历的方式

    if (node === null) {
      treeInfo += this.getDepthString(depth) + "null \r\n";

      pageContent = this.getDepthString(depth) + "null<br /><br />";
      document.body.innerHTML += `${pageContent}`;

      return treeInfo;
    }

    treeInfo += this.getDepthString(depth) + node.element + "\r\n";

    pageContent = this.getDepthString(depth) + node.element + "<br /><br />";
    document.body.innerHTML += `${pageContent}`;

    treeInfo = this.getBinarySearchTreeString(node.left, depth + 1, treeInfo);
    treeInfo = this.getBinarySearchTreeString(node.right, depth + 1, treeInfo);

    return treeInfo;
  }


  // 写一个辅助函数，用来生成递归深度字符串
  getDepthString (depth) {
    let depthString = "";
    for (var i = 0; i < depth; i++) {
      depthString += "-- ";
    }
    return depthString;
  }
}

// 自定义二分搜索树集合Set
class MyBinarySearchTreeSet {
  constructor () {
    // 借用二分搜索树来实现这个接口
    this.myBinarySearchTree = new MyBinarySearchTree();
  }

  // 添加元素
  add (element) {
    this.myBinarySearchTree.add(element);
  }

  // 移除元素
  remove (element) {
    this.myBinarySearchTree.remove(element);
  }

  // 是否包含这个元素
  contains (element) {
    return this.myBinarySearchTree.contains(element);
  }

  // 遍历操作 
  // 第一个参数 是回掉函数，
  // 第二个参数 是遍历的方式 深度优先遍历(前pre、中in、后post)，广度优先遍历(层序level)
  each (operator, method) {
    // 遍历方式默认是非递归的前序遍历，
    // 其它的遍历方式就是递归的前、中、后、层序遍历。
    switch (method) {
      case 'pre': this.myBinarySearchTree.preOrder(operator);
      break;
      case 'in': this.myBinarySearchTree.inOrder(operator);
      break;
      case 'post': this.myBinarySearchTree.postOrder(operator);
      break;
      case 'level': this.myBinarySearchTree.levelOrder(operator);
      break;
      default:  this.myBinarySearchTree.nonRecursivePreOrder(operator);
      break;
    }
  }

  // 获取集合中实际的元素个数
  getSize () {
    return this.myBinarySearchTree.getSize();
  }

  // 返回集合是否为空的bool值
  isEmpty () {
    return this.myBinarySearchTree.isEmpty();
  }
}

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

// 自定义二分搜索树树映射节点 TreeMapNode
class MyBinarySearchTreeMapNode {
  constructor (key = null, value = null, left = null, right = null) {
    this.key = key;
    this.value = value;
    this.left = left;
    this.right = right;
  }

  // @Override toString 2018-11-5-jwl
  toString () {
    return this.key.toString() + "---------->" + this.value.toString();
  }
}

// 自定义链表映射 Map
class MyLinkedListMap {
  constructor () {
    this.dummyHead = new MyLinkedListMapNode();
    this.size = 0;
  }

  // 根据key获取节点 -
  getNode (key) {

    let cur = this.dummyHead.next;

    while (cur !== null) {
      if (cur.key === key)
        return cur;
      cur = cur.next;
    }

    return null;
  }

  // 添加操作 +
  add (key, value) {
    let node = this.getNode(key);
    // 这个节点如果存在就 覆盖值即可
    if (node !== null)
      node.value = value;
    else { // 如果不存在，那么就在头部添加以下
      let newNode = new MyLinkedListMapNode(key, value);
      newNode.next = this.dummyHead.next;
      this.dummyHead.next = newNode;
      this.size ++;
    }
  }

  // 删除操作 返回被删除的元素 +
  remove (key) {

    let prev = this.dummyHead;
    // 循环查找
    while (prev.next !== null) {
      if (prev.next.key === key)
        break;
      prev = prev.next;
    }

    // 如果触碰了break， 那就满足条件
    if (prev.next !== null) {
      let delNode = prev.next;
      prev.next = delNode.next;

      let value = delNode.value;
      delNode = delNode.next = null;
      this.size --;
      return value;
    }

    // 如果没有触屏break 那就返回空值回去
    return null;
  }

  // 查询操作 返回查询到的元素 +
  get (key) {
    let node = this.getNode(key);
    if (node === null)
      return null;
    return node.value;
  }

  // 修改操作 +
  set (key, value) {
    let node = this.getNode(key);
    if (node === null)
      throw new Error(key + " doesn't exist.");

    node.value = value;
  }

  // 返回是否包含该key的元素的判断值  +
  contains (key) {
    return this.getNode(key) !== null;
  }

  // 返回映射中实际的元素个数 +
  getSize () {
    return this.size;
  }

  // 返回映射中是否为空的判断值  +
  isEmpty () {
    return this.size === 0;
  }

  // @Override toString() 2018-11-05-jwl
  toString () {
    let mapInfo = `MyLinkedListMap: size = ${this.size}, data = [ `;
    document.body.innerHTML += `MyLinkedListMap: size = ${this.size}, data = [ <br/><br/>`;

    let cur = this.dummyHead.next;

    for (var i = 0; i < this.size - 1; i++) {
      mapInfo += ` ${cur.toString()}, \r\n`;
      document.body.innerHTML += ` ${cur.toString()}, <br/><br/>`;
      cur = cur.next;
    }

    if (cur !== null){
      mapInfo += ` ${cur.toString()} \r\n`;
      document.body.innerHTML += ` ${cur.toString()} <br/><br/>`;
    }

    mapInfo += ` ] \r\n`;
    document.body.innerHTML += ` ] <br/><br/>`;

    return mapInfo;
  }
}

// 自定义二分搜索树映射 Map
class MyBinarySearchTreeMap {
  constructor () {
    this.root = null;
    this.size = 0;
  }

  // 比较的功能
  compare (keyA, keyB) {
    if (keyA === null || keyB === null)
      throw new Error("key is error. key can't compare.");
    if (keyA > keyB)
      return 1;
    else if (keyA < keyB)
      return -1;
    else
      return 0;
  }

  // 根据key获取节点 -
  getNode (node, key) {
    // 先解决最基本的问题
    if (node === null) return null;

    // 开始将复杂的问题 逐渐缩小规模
    // 从而求出小问题的解，最后构建出原问题的解
    switch (this.compare(node.key, key)) {
      case 1 :  // 向左找
        return this.getNode(node.left, key);
      break;
      case -1 : // 向右找
        return this.getNode(node.right, key);
      break;
      case 0 :  // 找到了
        return node;
      break;
      default :
        throw new Error("compare result is error. compare result : 0、 1、 -1 .");
      break;
    }
  }

  // 添加操作 +
  add (key, value) {
    this.root = this.recursiveAdd(this.root, key ,value);
  }

  // 添加操作 递归算法 -
  recursiveAdd (node, key, value) {

    // 解决最简单的问题
    if (node === null) {
      this.size ++;
      return new MyBinarySearchTreeMapNode(key, value);
    }

    // 将复杂的问题规模逐渐变小，
    // 从而求出小问题的解，从而构建出原问题的答案
    if (this.compare(node.key, key) > 0)
      node.left = this.recursiveAdd(node.left, key, value);
    else if (this.compare(node.key, key) < 0)
      node.right = this.recursiveAdd(node.right, key, value);
    else
      node.value = value;

    return node;
  }

  // 删除操作 返回被删除的元素 +
  remove (key) {
    let node = this.getNode(this.root, key);
    if (node === null) 
      return null;

    this.root = this.recursiveRemove(this.root, key);
    return node.value;
  }

  // 删除操作 递归算法 +
  recursiveRemove (node, key) {

    // 解决最基本的问题
    if (node === null)
      return null;

    if (this.compare(node.key, key) > 0) {
      node.left = this.recursiveRemove(node.left, key);
      return node;
    } else if (this.compare(node.key, key) < 0) {
      node.right = this.recursiveRemove(node.right, key);
      return node;
    } else {
      // 当前节点的key 与 待删除的key的那个节点相同
      // 有三种情况
      // 1. 当前节点没有左子树，那么只有让当前节点的右子树直接覆盖当前节点，就表示当前节点被删除了
      // 2. 当前节点没有右子树，那么只有让当前节点的左子树直接覆盖当前节点，就表示当前节点被删除了
      // 3. 当前节点左右子树都有， 那么又分两种情况，使用前驱删除法或者后继删除法
      //      1. 前驱删除法：使用当前节点的左子树上最大的那个节点覆盖当前节点
      //      2. 后继删除法：使用当前节点的右子树上最小的那个节点覆盖当前节点
      
      if (node.left === null) {
        let rightNode = node.right;
        node.right = null;
        this.size --;
        return rightNode;
      } else if (node.right === null) {
        let leftNode = node.left;
        node.left = null;
        this.size --;
        return leftNode;
      } else {
        let predecessor = this.maximum(node.left);
        node.left = this.removeMax(node.left);
        this.size ++;

        // 开始嫁接 当前节点的左右子树
        predecessor.left = node.left;
        predecessor.right = node.right;

        // 将当前节点从根节点剔除
        node = node.left = node.right = null;
        this.size --;

        // 返回嫁接后的新节点
        return predecessor
      }
    }
  }

  // 删除操作的两个辅助函数
  // 获取最大值、删除最大值
  // 以前驱的方式 来辅助删除操作的函数

  // 获取最大值
  maximum (node) {

    // 再也不能往右了，说明当前节点已经是最大的了
    if (node.right === null) 
      return node;

    // 将复杂的问题渐渐减小规模，从而求出小问题的解，最后用小问题的解构建出原问题的答案
    return this.maximum(node.right);
  }

  // 删除最大值
  removeMax (node) {

    // 解决最基本的问题
    if (node.right === null) {
      let leftNode = node.left;
      node.left = null;
      this.size -- ;
      return leftNode;
    }

    // 开始化归
    node.right = this.removeMax(node.right);
    return node;
  }

  // 查询操作 返回查询到的元素 +
  get (key) {
    let node = this.getNode(this.root, key);
    if (node === null)
      return null;
    return node.value;
  }

  // 修改操作 +
  set (key, value) {
    let node = this.getNode(this.root, key);
    if (node === null)
      throw new Error(key + " doesn't exist.");

    node.value = value;
  }

  // 返回是否包含该key的元素的判断值  +
  contains (key) {
    return this.getNode(this.root, key) !== null;
  }

  // 返回映射中实际的元素个数 +
  getSize () {
    return this.size;
  }

  // 返回映射中是否为空的判断值  +
  isEmpty () {
    return this.size === 0;
  }

  // @Override toString() 2018-11-05-jwl
  toString () {
    let mapInfo = `MyBinarySearchTreeMap: size = ${this.size}, data = [ `;
    document.body.innerHTML += `MyBinarySearchTreeMap: size = ${this.size}, data = [ <br/><br/>`;

    // 以非递归的前序遍历 输出字符串
    let stack = new MyLinkedListStack();

    stack.push(this.root);

    if (this.root === null)
      stack.pop();

    while(!stack.isEmpty()) {
      let node = stack.pop();

      if (node.left !== null)
        stack.push(node.left);
      if (node.right !== null)
        stack.push(node.right);

      if (node.left === null && node.right === null) {
        mapInfo += ` ${node.toString()} \r\n`;
        document.body.innerHTML += ` ${node.toString()} <br/><br/>`;
      } else {
        mapInfo += ` ${node.toString()}, \r\n`;
        document.body.innerHTML += ` ${node.toString()}, <br/><br/>`;
      }
    }

    mapInfo += ` ] \r\n`;
    document.body.innerHTML += ` ] <br/><br/>`;

    return mapInfo;
  }
}

// 自定义二叉堆之最大堆 Heap
class MyMaxHeap {
  constructor (capacity = 10) {
    this.myArray = new MyArray(capacity);
  }

  // 添加操作
  add (element) {
    // 追加元素
    this.myArray.push(element);

    // 将追加的元素上浮到堆中合适的位置
    this.siftUp(this.myArray.getSize() - 1);
  }

  // 堆的上浮操作 -
  siftUp (index) {
    this.nonRecursiveSiftUp(index);
    // this.recursiveSiftUp(index);
    
    // 无论是递归还是非递归都有一个 
    // 元素上浮后结束的条件 当前节点元素值 小于其父节点元素值
    // 和 
    // 索引即将越界的终止条件 要上浮的元素索引 小于等于0
  }
  
  // 堆的上浮操作 递归算法 -
  recursiveSiftUp (index) {

    // 解决最基本的问题， 递归终止条件
    if (index <= 0) return;

    let currentValue = this.myArray.get(index);
    let parentIndex = this.calcParentIndex(index);
    let parentValue = this.myArray.get(parentIndex);

    // 递归写法
    if (this.compare(currentValue, parentValue) > 0) {
      this.swap(index, parentIndex);
      this.recursiveSiftUp(parentIndex);
    }
  }

  // 堆的上浮操作 非递归算法 -
  nonRecursiveSiftUp (index) {
    if (index <= 0) return;

    let currentValue = this.myArray.get(index);
    let parentIndex = this.calcParentIndex(index);
    let parentValue = this.myArray.get(parentIndex); 

    while (this.compare(currentValue, parentValue) > 0) {
      // 交换堆中两个元素位置的值
      this.swap(index, parentIndex);

      // 交换了位置之后，元素上浮后的索引变量也要进行相应的变更
      index = parentIndex;
      // 如果索引小于等于0了 那就结束循环
      if (index <= 0) 
        break
      currentValue = this.myArray.get(index);
      parentIndex = this.calcParentIndex(index);
      parentValue = this.myArray.get(parentIndex);
    }
  }

  // 找到优先级最大的元素 （查找元素）操作
  findMax () {
    if (this.myArray.isEmpty())
      throw new Error("can not findMax when heap is empty.");
    return this.myArray.getFirst();
  }

  // 提取优先级最大的元素（删除元素）操作
  extractMax () {
    // 获取堆顶的元素
    let maxElement = this.findMax();

    // 获取堆底的元素
    let element = this.myArray.getLast();
    
    // 让堆底的元素替换掉堆顶的元素
    this.myArray.set(0, element);

    // 移除堆底的元素
    this.myArray.pop();

    // 让堆顶的元素开始下沉，从而能够正常满足堆的性质
    this.siftDown(0);

    // 返回堆顶的元素
    return maxElement;
  }

  // 堆的下沉操作 -
  siftDown (index) {
    this.nonRecursiveSiftDown(index);
    // this.recursiveSiftDown(index);
  }

  // 堆的下沉操作 递归算法
  recursiveSiftDown (index) {

    // 递归终止条件
    // 如果当前索引位置的元素没有左孩子就说也没有右孩子，
    // 那么可以直接终止，因为无法下沉
    if (this.calcLeftChildIndex(index) >= this.myArray.getSize())
      return;

    let leftChildIndex = this.calcLeftChildIndex(index);
    let leftChildValue = this.myArray.get(leftChildIndex);
    let rightChildIndex = this.calcRightChildIndex(index);
    let rightChildValue = null;

    // let maxIndex = 0;
    // if (rightChildIndex >= this.myArray.getSize())
    //   maxIndex = leftChildIndex;
    // else {
    //   rightChildValue = this.myArray.get(rightChildIndex);
    //   if (this.compare(rightChildValue, leftChildValue) > 0)
    //     maxIndex = rightChildIndex;
    //   else
    //     maxIndex = leftChildIndex;
    // }
    
    // 这段代码是上面注释代码的优化
    let maxIndex =  leftChildIndex;
    if (rightChildIndex < this.myArray.getSize()) {
      rightChildValue = this.myArray.get(rightChildIndex);
      if (this.compare(leftChildValue, rightChildValue) < 0)
        maxIndex = rightChildIndex;
    }
  
    let maxValue = this.myArray.get(maxIndex);
    let currentValue = this.myArray.get(index);

    if (this.compare(maxValue, currentValue) > 0) {
      // 交换位置
      this.swap(maxIndex, index);
      // 继续下沉
      this.recursiveSiftDown(maxIndex);
    }

  }

  // 堆的下沉操作 非递归算法 -
  nonRecursiveSiftDown (index) {
    // 该索引位置的元素有左右孩子节点才可以下沉，
    // 在完全二叉树中 如果一个节点没有左孩子必然没有右孩子
    while (this.calcLeftChildIndex(index) < this.myArray.getSize()) {
      let leftChildIndex = this.calcLeftChildIndex(index);
      let leftChildValue = this.myArray.get(leftChildIndex);
      let rightChildIndex = this.calcRightChildIndex(index);
      let rightChildValue = null;
      let maxIndex = leftChildIndex;

      if (rightChildIndex < this.myArray.getSize()) {
        rightChildValue = this.myArray.get(rightChildIndex);
        if (this.compare(leftChildValue, rightChildValue) < 0)
          maxIndex = rightChildIndex;
      }

      let maxValue = this.myArray.get(maxIndex);
      let currentValue = this.myArray.get(index);

      if (this.compare(maxValue, currentValue) > 0) {
        this.swap(maxIndex, index);
        index = maxIndex;
        continue;
      } else
        break;
    }
  }

  // 将堆顶的元素用一个新元素替换出来
  replace(element) {
    let maxElement = this.findMax();

    this.myArray.set(0, element);

    this.siftDown(0);

    return maxElement;
  }

  // 将一个数组变成一个最大堆 -
  heapify (array) {
    
    // 将数组中的元素添加到自定义动态数组里
    for (const element of array)
      this.myArray.push(element);
    
    // 减少一个O(n)的操作，不然性能相对来说会差一些
    // this.myArray.data = array;
    // this.myArray.size = array.length;
    
    // 这个动态数组满足了一棵完全二叉树的性质
    // 获取 这棵完全二叉树 最后一个非叶子节点的索引
    let index = this.calcParentIndex(this.myArray.getSize() - 1);

    // 从最后一个非叶子节点开始遍历  从后向前遍历 不停的下沉， 这个就是heapify的过程
    // for (let i = index; i >= 0; i --) { this.siftDown(i);}
    while (0 <= index)
      this.siftDown(index --);
  }
  
  // 堆中两个元素的位置进行交换
  swap (indexA, indexB) {
    this.myArray.swap(indexA, indexB);
  } 

  // 辅助函数 计算出堆中指定索引位置的元素其父节点的索引 -
  calcParentIndex (index) {
    if (index === 0) // 索引为0是根节点，根节点没有父亲节点，小于0就更加不可以了
      throw new Error("index is 0. doesn't have parent.");
    return Math.floor((index - 1) / 2);
  }

  // 辅助函数 计算出堆中指定索引位置的元素其左孩子节点的索引 -
  calcLeftChildIndex (index) {
    return index * 2 + 1;
  }
  
  // 辅助函数 计算出堆中指定索引位置的元素其右孩子节点的索引 -
  calcRightChildIndex (index) {
    return index * 2 + 2;
  }

  // 比较的功能 -
  compare (elementA, elementB) {
    if (elementA === null || elementB === null)
      throw new Error("element is error. element can't compare.");
    if (elementA > elementB)
      return 1;
    else if (elementA < elementB)
      return -1;
    else
      return 0;
  }

  // 获取堆中实际的元素个数
  size () {
    return this.myArray.getSize();
  }

  // 返回堆中元素是否为空的判断值
  isEmpty () {
    return this.myArray.isEmpty();
  }
}

// 自定义优先队列 PriorityQueue
class MyPriorityQueue {
  constructor () {
    this.maxHeap = new MyMaxHeap();
  }

  // 入队
  enqueue (element) {
    this.maxHeap.add(element);
  }
  
  // 出队
  dequeue () {
    return this.maxHeap.extractMax();
  }
  
  // 查看队首元素
  getFront () {
    return this.maxHeap.findMax();
  }
  
  // 查看队列中实际元素的个数
  getSize () {
    return this.maxHeap.size();
  }
  
  // 返回队列是否为空的判断值
  isEmpty () {
    return this.maxHeap.isEmpty();
  }

  // 扩展： 修改最大堆中的比较算法
  updateCompare (compareMethod) {
    // 传入参数可以替换掉原堆中实现的compare方法
    this.maxHeap.compare = compareMethod;
  }

  // 扩展： 用一个新元素去替换队首的元素，同时再次确认优先级别
  replaceFront (element) {
    // 这样就就可 不需要 出队入队操作这么麻烦了
    return this.maxHeap.replace(element);
  }
}

// 自定义线段树 SegmentTree
class MySegmentTree {
  constructor (array) {
    // 拷贝一份参数数组中的元素
    this.data = new Array(array.length);
    for (var i = 0; i < array.length; i++)
      this.data[i] = array[i];

    // 初始化线段树 开4倍的空间 这样才能在所有情况下存储线段树上所有的节点
    this.tree = new Array(4 * this.data.length);

    // 开始构建线段树
    this.buildingSegmentTree (0, 0, this.data.length - 1);
  }

  // 获取线段树中实际的元素个数
  getSize () {
    return this.data.length;
  }

  // 根据索引获取元素
  get (index) {
    if (index < 0 || index >= this.getSize())
      throw new Error("index is illegal.");
    return this.data[index];
  }

  // 构建线段树
  buildingSegmentTree (treeIndex, left, right) {
    // 解决最基本问题
    // 当一条线段的两端相同时，说明这个区间只有一个元素，
    // 那么递归也到底了
    if (left === right) {
      this.tree[treeIndex] = this.data[left];
      return;
    }

    // 计算当前线段树的左右子树的索引
    const leftChildIndex = this.calcLeftChildIndex(treeIndex);
    const rightChildIndex = this.calcRightChildIndex(treeIndex);

    // 将一个区间拆分为两段，然后继续构建其左右子线段树
    let middle = Math.floor(left + (right - left) / 2)//(left + right) / 2

    // 构建左子线段树
    this.buildingSegmentTree(leftChildIndex, left, middle);
    // 构建右子线段树
    this.buildingSegmentTree(rightChildIndex, middle + 1, right);

    // 融合左子线段树和右子线段树
    this.tree[treeIndex] = this.merge(this.tree[leftChildIndex], this.tree[rightChildIndex]);
  }

  // 查询指定区间的线段树数据
  // 返回区间[queryLeft, queryRight]的值
  query (queryLeft, queryRight) {
    if (queryLeft < 0 || queryRight < 0 || queryLeft > queryRight ||
       queryLeft >= this.data.length || queryRight >= this.data.length)
      throw new Error("queryLeft or queryRight is illegal.");

    // 调用递归的查询方法
    return this.recursiveQuery(0, 0, this.data.length - 1, queryLeft, queryRight);
  }

  // 递归的查询方法 -
  // 在以treeIndex为根的线段树中[left...right]的范围里，
  // 搜索区间[queryLeft...queryRight]的值
  recursiveQuery (treeIndex, left, right, queryLeft, queryRight) {
    // 如果查询范围 与 指定的线段树的区间 相同，那么说明完全匹配，
    // 直接返回当前这个线段即可，每一个节点代表 一个线段(区间)处理后的结果
    if (left === queryLeft && right === queryRight)
      return this.tree[treeIndex];

    // 求出当前查询范围的中间值
    const middle = Math.floor(left + (right - left) / 2);
    
    // 满二叉树肯定有左右孩子节点
    // 上面的判断没有完全匹配，说明需要继续 缩小查询范围，也就是要在左右子树中进行查询了
    const leftChildIndex = this.calcLeftChildIndex(treeIndex);
    const rightChildIndex = this.calcRightChildIndex(treeIndex);

    // 判断：
    //    1. 从左子树中查还是右子树中查，又或者从左右子树中同时查，然后将两个查询结果融合。
    //    2. 如果 待查询的区间的左端点大于查询范围的中间值，说明只需要从右子树中进行查询即可。
    //    3. 如果 待查询的区间的右端点小于查询范围的中间值 + 1，说明只需要从左子树中进行查询。
    //    4. 如果 待查询的区间在左右端点各分部一部分，说明要同时从左右子树中进行查询。
    if (queryLeft > middle)
      return this.recursiveQuery(rightChildIndex, middle + 1, right, queryLeft, queryRight);
    else if (queryRight < middle + 1)
      return this.recursiveQuery(leftChildIndex, left, middle, queryLeft, queryRight);
    else {
      // 求出 左子树中一部分待查询区间中的值
      const leftChildValue = 
      this.recursiveQuery(leftChildIndex, left, middle, queryLeft, middle);
      // 求出 右子树中一部分待查询区间中的值
      const rightChildValue = 
      this.recursiveQuery(rightChildIndex, middle + 1, right, middle + 1, queryRight);
      // 融合左右子树种的数据并返回
      return this.merge(leftChildValue, rightChildValue);
    }
  }

  // 设置指定索引位置的元素 更新操作
  set (index, element) {
    if (index < 0 || index >= this.data.length)
      throw new Error("index is illegal.");

    this.recursiveSet(0, 0, this.data.length - 1, index, element);
  }

  // 递归的设置指定索引位置元素的方法 -
  // 在以treeIndex为根的线段树中更新index的值为element
  recursiveSet (treeIndex, left, right, index, element) {
    
    // 解决最基本的问题 递归到底了就结束
    // 因为找到了该索引位置的节点了
    if (left === right) {
      this.tree[treeIndex] = element;
      this.data[index] = element;
      return;
    }

    // 求出当前查询范围的中间值
    const middle = Math.floor(left + (right - left) / 2);

    // 满二叉树肯定有左右孩子节点
    // 上面的判断没有完全匹配，说明需要继续 缩小查询范围，也就是要在左右子树中进行查询了
    const leftChildIndex = this.calcLeftChildIndex(treeIndex);
    const rightChildIndex = this.calcRightChildIndex(treeIndex);

    // 如果指定的索引大于 查询范围的中间值，那就说明 该索引的元素在右子树中
    // 否则该索引元素在左子树中
    if (index > middle)
      this.recursiveSet(rightChildIndex, middle + 1, right, index, element);
    else // index < middle + 1
      this.recursiveSet(leftChildIndex, left, middle, index, element);

    // 将改变后的左右子树再进行一下融合，因为递归到底时修改了指定索引位置的元素，
    // 那么指定索引位置所在的线段(区间)也需要再次进行融合操作，
    // 从而达到修改一个值改变 相应的线段(区间)
    this.tree[treeIndex] = this.merge(this.tree[leftChildIndex], this.tree[rightChildIndex]);
  }

  // 辅助函数：返回完全二叉树的数组表示中，一个索引所表示的元素的左孩子节点的索引
  // 计算出线段树中指定索引位置的元素其左孩子节点的索引 -
  calcLeftChildIndex (index) {
    return index * 2 + 1;
  }

  // 辅助函数：返回完全二叉树的数组表示中，一个索引所表示的元素的右孩子节点的索引
  // 计算出线段树中指定索引位置的元素其右孩子节点的索引 -
  calcRightChildIndex (index) {
    return index * 2 + 2;
  }

  // 辅助函数： 融合两棵线段树，也就是对线段树进行业务逻辑的处理 -
  merge (treeElementA, treeElmentB) {
    // 默认进行求和操作
    return treeElementA + treeElmentB;
  }

  // 辅助函数：更新融合的方法，也就是自定义处理线段树融合的业务逻辑 +
  updateMerge (mergeMethod) {
    this.merge = mergeMethod;
  }

  // @Override toString() 2018-11-7 jwl
  toString () {
    let segmentTreeConsoleInfo = ""; // 控制台信息
    let segmentTreePageInfo = ""; // 页面信息

        // 输出头部信息
    segmentTreeConsoleInfo += ("SegmentTree:");
    segmentTreePageInfo += ("SegmentTree:");
    segmentTreeConsoleInfo += ("\r\n");
    segmentTreePageInfo += ("<br/><br/>"); 

    // 输出传入的数据信息
    segmentTreeConsoleInfo += ("data = [");
    segmentTreePageInfo += ("data = [");

    for (let i = 0; i < this.data.length - 1; i++) {
        segmentTreeConsoleInfo += (this.data[i] + ",");
        segmentTreePageInfo += (this.data[i] + ",");
    }

    if (this.data != null && this.data.length != 0) {
        segmentTreeConsoleInfo += (this.data[this.data.length - 1]);
        segmentTreePageInfo += (this.data[this.data.length - 1]);
    }
    segmentTreeConsoleInfo += ("],\r\n");
    segmentTreePageInfo += ("],<br/><br/>");

    // 输出生成的线段树信息
    segmentTreeConsoleInfo += ("tree = [");
    segmentTreePageInfo += ("tree = [");
    let treeSize = 0;
    for (let i = 0; i < this.tree.length - 1 ; i++) {
        if (this.tree[i] !== undefined)
          treeSize ++;
        segmentTreeConsoleInfo += (this.tree[i] + ",");
        segmentTreePageInfo += (this.tree[i] + ",");
    }
    if (this.tree != null && this.tree.length != 0) {
        if (this.tree[this.tree.length - 1] !== undefined)
          treeSize ++;
        segmentTreeConsoleInfo += (this.tree[this.tree.length - 1]);
        segmentTreePageInfo += (this.tree[this.tree.length - 1]);
    }
    segmentTreeConsoleInfo += ("],\r\n");
    segmentTreePageInfo += ("],<br/><br/>");
    segmentTreeConsoleInfo += ("originArraySize:" + this.getSize() + "，");
    segmentTreePageInfo += ("originArraySize:" + this.getSize() + "，"); 
    segmentTreeConsoleInfo += ("treeCapacity: " + this.tree.length + "，treeSize: " + treeSize);
    segmentTreePageInfo += ("treeCapacity: " + this.tree.length + "，treeSize: " + treeSize);


    // 返回输出的总信息
    document.body.innerHTML += segmentTreePageInfo;
    return segmentTreeConsoleInfo;
  }
}

// 自定义字典树节点 TrieNode
class MyTrieNode {
  constructor (letterChar, isWord = false) {
    this.letterChar = letterChar;
    this.isWord = isWord; // 是否是单词
    this.next = new Map(); // 存储 字符所对应的节点的 字典映射
  }
}

// 自定义字典树 Trie
class MyTrie {
  constructor () {
    this.root = new MyTrieNode();
    this.size = 0;
  }

  // 向Trie中添加一个新的单词word 
  add (word) {
    // 指定游标
    let cur = this.root;
    // 遍历出当前单词的每一个字符
    for(const c of word) {
      // 下一个字符所对应的映射是否为空
      if (!cur.next.has(c))
        cur.next.set(c, new MyTrieNode(c));
      // 切换到下一个节点
      cur = cur.next.get(c)
    }

    // 如果当前这个单词是一个新的单词
    if (!cur.isWord) {
      // 当前这个字符是这个单词的结尾
      cur.isWord = true;
      this.size ++;
    }
  }

  // 向Trie中添加一个新的单词word 递归算法
  recursiveAdd (word) {
    this.recursiveAddFn(this.root, word, 0);
  }

  // 向Trie中添加一个新的单词word 递归辅助函数 -
  recursiveAddFn (node, word, index) {
    // 解决基本的问题，因为已经到底了
    if (index === word.length) {
      if (!node.isWord) {
        node.isWord = true;
        this.size ++;
      }
      return;
    }

    const map = node.next; // 获取节点的next 也就是字符对应的映射
    const letterChar = word[index]; // 获取当前位置对应的单词中的字符
    // 下一个字符所对应的映射是否为空 为空就添加
    if (!map.has(letterChar))
      map.set(letterChar, new MyTrieNode(letterChar));
    this.recursiveAddFn(map.get(letterChar), word, index + 1);
  }

    // 从Trie中删除一个单词word
  remove (word) {
    return this.recursiveRemove(this.root, word, 0);
  }

  // 从Trie中删除一个单词word 递归算法 -
  recursiveRemove(node, word, index) {
    // 是否删除成功
    let isRemoveOk = false;
    // 递归到底了 
    if (index === word.length) {
      // 如果不是一个单词，那么直接返回 没有删除成功
      if (!node.isWord)
        return isRemoveOk;
      isRemoveOk = true;
      node.isWord = false;
      this.size --;
      return isRemoveOk;
    }

    const map = node.next;
    const letterChar = word[index];
    const nextNode = map.get(letterChar);
    if (map.has(letterChar))
      isRemoveOk = this.recursiveRemove(nextNode, word, index + 1);

    if (isRemoveOk) {
      if (!nextNode.isWord && nextNode.next.size == 0)
        map.delete(letterChar);
    }
    return isRemoveOk;
  }

  // 查询单词word是否在Trie中
  contains (word) {
    // 指定游标
    let cur = this.root;

    // 遍历出当前单词的每一个字符
    for (const c of word) {
      // 获取当前这个字符所对应的节点
      const node = cur.next.get(c);
      // 这个节点不存在，那么就说明就没有存储这个字符
      if (!node)
        return false;
      // 游标切换到这个节点
      cur = node;
    }

    // 单词遍历完毕
    // 返回最后一个字符是否是一个单词的结尾
    return cur.isWord;
  }

  // 查询单词word是否在Trie中 递归算法
  recursiveContains (word) {
    return this.recursiveContainsFn(this.root, word, 0);
  }

  // 查询单词word是否在Trie中 递归赋值函数 -
  recursiveContainsFn (node, word, index) {
    // 解决基本的问题，因为已经到底了
    if (index === word.length)
      return node.isWord;

    const map = node.next; // 获取节点的next 也就是字符对应的映射
    const letterChar = word[index]; // 获取当前位置对应的单词中的字符
    // 下一个字符所对应的映射是否为空 为空那么就说明这个单词没有进行存储
    if (!map.has(letterChar))
      return false;
    return this.recursiveContainsFn(map.get(letterChar), word, index + 1);
  }

  // 查询在Trie中是否有单词以 prefix 为前缀
  isPrefix (prefix) {
    // 指定游标
    let cur = this.root;

    // 遍历出当前单词的每一个字符
    for (const c of prefix) {
      // 获取当前这个字符所对应的节点
      const node = cur.next.get(c);
      // 这个节点不存在，那么就说明就没有存储这个字符
      if ( !node )
        return false;
      // 游标切换到这个节点
      cur = node;
    }

    // 前缀遍历完毕 说明这个前缀有单词与之匹配
    return true;
  }

  // 正则表达式 查询单词word是否在Trie中，目前只支持 统配符 "."
  regexpSearch (regexpWord) {
    return this.match(this.root, regexpWord, 0);
  }

  // 正则表达式 匹配单词 递归算法 -
  match (node, word, index) {
    // 解决基本的问题，因为已经到底了
    if (index === word.length)
      return node.isWord;

    const map = node.next; // 获取节点的next 也就是字符对应的映射
    const letterChar = word[index]; // 获取当前位置对应的单词中的字符
    // 判断这个字符是否是通配符
    if (letterChar !== '.') {
      // 如果映射中不包含这个字符
      if (!map.has(letterChar))
        return false;
      // 如果映射中包含这个字符，那么就去找个字符对应的节点中继续匹配
      return this.match(map.get(letterChar), word, index + 1);
    } else {
      // 遍历 下一个字符的集合
      for (const key of map.keys())
        // 如果 从下一个字符继续匹配，只要匹配成功就返回 true
        if (this.match(map.get(key), word, index + 1))
          return true;
      // 遍历一遍之后还是没有匹配成功 那么就算匹配失败
      return false;
    }
  }

  // 获取字典树中存储的单词数量
  getSize () {
    return this.size;
  }

  // 获取字典树中是否为空
  isEmpty () {
    return this.size === 0;
  }
}

// 自定义字典集合 TrieSet
class MyTrieSet {
  constructor () {
    this.trie = new MyTrie();
  }

  // 添加操作
  add (word) {
    this.trie.add(word);
  }

  // 删除操作 待实现
  remove (word) {
    return this.trie.remove(word);
  }

  // 查单词是否存在
  contains (word) {
    return this.trie.contains(word);
  }

  // 获取实际元素个数
  getSize () {
    return this.trie.getSize();
  }

  // 获取当前集合是否为空
  isEmpty () {
    return this.trie.isEmpty();
  }
}

// 自定义字典树节点升级版 TrieNodeUpgrade
class MyTrieNodeUpgrade {
  constructor (letterChar, element, isWord = false) {
    this.letterChar = letterChar;
    this.element = element; // 升级后可以存储特殊数据
    this.isWord = isWord; // 是否是单词
    this.next = new Map(); // 存储 字符所对应的节点的 字典映射
  }
}

// 自定义字典树升级版 TrieUpgrade
class MyTrieUpgrade {
  constructor () {
    this.root = new MyTrieNodeUpgrade();
    this.size = 0;
  }

  add (word, element) {
    // 指定游标
    let cur = this.root;
    // 遍历出当前单词的每一个字符
    for(const c of word) {
      // 下一个字符所对应的映射是否为空
      if (!cur.next.has(c))
        cur.next.set(c, new MyTrieNodeUpgrade(c));
      // 切换到下一个节点
      cur = cur.next.get(c)
    }

    // 如果当前这个单词是一个新的单词
    if (!cur.isWord) {
      // 当前这个字符是这个单词的结尾
      cur.isWord = true;
      // 存储 额外信息 
      cur.element = element;
      this.size ++;
    }
  }

  // 向Trie中添加一个新的单词word 并且在word中存储额外的信息，如果额外信息存在就覆盖
  put (word, element) {
    // 指定游标
    let cur = this.root;
    // 遍历出当前单词的每一个字符
    for(const c of word) {
      // 下一个字符所对应的映射是否为空
      if (!cur.next.has(c))
        cur.next.set(c, new MyTrieNodeUpgrade(c));
      // 切换到下一个节点
      cur = cur.next.get(c)
    }

    // 如果当前这个单词是一个新的单词
    if (!cur.isWord) {
      // 当前这个字符是这个单词的结尾
      cur.isWord = true;
      this.size ++;
    }

    // 设置或者覆盖 额外信息 
    cur.element = element;
  }

  // 向Trie中添加一个新的单词word 递归算法
  // 并且在word中存储额外的信息，如果额外信息存在就覆盖
  recursivePut (word, element) {
    this.recursiveAddFn(this.root, word, element, 0);
  }

  // 向Trie中添加一个新的单词word 递归辅助函数 -
  // 并且在word中存储额外的信息，如果额外信息存在就覆盖
  recursivePutFn (node, word, element, index) {
    // 解决基本的问题，因为已经到底了
    if (index === word.length) {
      if (!node.isWord) {
        node.isWord = true;
        this.size ++;
      }
      // 设置或者覆盖 额外信息 
      node.element = element;
      return;
    }

    const map = node.next; // 获取节点的next 也就是字符对应的映射
    const letterChar = word[index]; // 获取当前位置对应的单词中的字符
    // 下一个字符所对应的映射是否为空 为空就添加
    if (!map.has(letterChar))
      map.set(letterChar, new MyTrieNodeUpgrade(letterChar));
    this.recursiveAddFn(map.get(letterChar), word, element, index + 1);
  }

  // 从Trie中删除一个单词word
  remove (word) {
    return this.recursiveRemove(this.root, word, 0);
  }

  // 从Trie中删除一个单词word 递归算法 -
  recursiveRemove(node, word, index) {
    let element = null;
    // 递归到底了 
    if (index === word.length) {
      // 如果不是一个单词，那么直接返回 为null的element
      if (!node.isWord)
        return element;
      element = node.element;
      node.isWord = false;
      this.size --;
      return element;
    }

    const map = node.next;
    const letterChar = word[index];
    const nextNode = map.get(letterChar);
    if (map.has(letterChar))
      element = this.recursiveRemove(nextNode, word, index + 1);

    if (element !== null) {
      if (!nextNode.isWord && nextNode.next.size === 0)
        map.delete(letterChar);
    }
    return element;
  }

  // 根据这个单词来获取额外信息
  get (word) {
    // 指定游标
    let cur = this.root;

    // 遍历出当前单词的每一个字符
    for (const c of word) {
      // 获取当前这个字符所对应的节点
      const node = cur.next.get(c);
      // 这个节点不存在，那么就说明就没有存储这个字符
      if (!node)
        return false;
      // 游标切换到这个节点
      cur = node;
    }

    // 单词遍历完毕
    if (cur.isWord)
      return cur.element;
    return null;
  }

  // 获取与这个单词前缀相关的 所有额外信息
  getPrefixAll (prefix) {
    // 指定游标
    let cur = this.root;

    // 遍历出当前单词的每一个字符
    for (const c of prefix) {
      // 获取当前这个字符所对应的节点
      const node = cur.next.get(c);
      // 这个节点不存在，那么就说明就没有存储这个字符
      if (!node)
        return null;
      // 游标切换到这个节点
      cur = node;
    }

    // 前缀遍历完毕 说明这个前缀有单词与之匹配
    // 开始进行获取与这个前缀相关的所有单词及其额外信息
    // 将这些单词和额外信息以 {word1 : elemnt1, word2 : element2} 形式存储并返回
    return this.recursiveGetPrefixAllInfo(cur, prefix, {});
  }

  // 获取与这个单词前缀相关的 所有额外信息 递归算法 -
  recursiveGetPrefixAllInfo (node, word, result) {
    if (node.isWord)
      result[word] = node.element;

    const map = node.next;
    const keys = map.keys();
    for (const key of keys) {
      this.recursiveGetPrefixAllInfo(
        map.get(key), 
        word.concat(key),
        result
      )
    }

    return result;
  }

  // 获取与这个单词前缀相关的 带有层次结构的所有额外信息 递归算法 -
  recursiveGetPrefixAllTreeInfo (node, word) {
    const result = [];
    if (node.isWord)
      result.push({word : node.element});

    const map = node.next;
    const keys = map.keys();
    for (const key of keys)
      result.push(this.recursiveGetPrefixAll(map.get(key), word.concat(node.letterChar)));
    return result;
  }

  // 查询单词word是否在Trie中
  contains (word) {
    // 指定游标
    let cur = this.root;

    // 遍历出当前单词的每一个字符
    for (const c of word) {
      // 获取当前这个字符所对应的节点
      const node = cur.next.get(c);
      // 这个节点不存在，那么就说明就没有存储这个字符
      if (!node)
        return false;
      // 游标切换到这个节点
      cur = node;
    }

    // 单词遍历完毕
    // 返回最后一个字符是否是一个单词的结尾
    return cur.isWord;
  }

  // 查询单词word是否在Trie中 递归算法
  recursiveContains (word) {
    return this.recursiveContainsFn(this.root, word, 0);
  }

  // 查询单词word是否在Trie中 递归赋值函数 -
  recursiveContainsFn (node, word, index) {
    // 解决基本的问题，因为已经到底了
    if (index === word.length)
      return node.isWord;

    const map = node.next; // 获取节点的next 也就是字符对应的映射
    const letterChar = word[index]; // 获取当前位置对应的单词中的字符
    // 下一个字符所对应的映射是否为空 为空那么就说明这个单词没有进行存储
    if (!map.has(letterChar))
      return false;
    return this.recursiveContainsFn(map.get(letterChar), word, index + 1);
  }

  // 查询在Trie中是否有单词以 prefix 为前缀
  isPrefix (prefix) {
    // 指定游标
    let cur = this.root;

    // 遍历出当前单词的每一个字符
    for (const c of prefix) {
      // 获取当前这个字符所对应的节点
      const node = cur.next.get(c);
      // 这个节点不存在，那么就说明就没有存储这个字符
      if ( !node )
        return false;
      // 游标切换到这个节点
      cur = node;
    }

    // 前缀遍历完毕 说明这个前缀有单词与之匹配
    return true;
  }

  // 正则表达式 查询单词word是否在Trie中，目前只支持 统配符 "."
  regexpSearch (regexpWord) {
    return this.match(this.root, regexpWord, 0);
  }

  // 正则表达式 匹配单词 递归算法 -
  match (node, word, index) {
    // 解决基本的问题，因为已经到底了
    if (index === word.length)
      return node.isWord;

    const map = node.next; // 获取节点的next 也就是字符对应的映射
    const letterChar = word[index]; // 获取当前位置对应的单词中的字符
    // 判断这个字符是否是通配符
    if (letterChar !== '.') {
      // 如果映射中不包含这个字符
      if (!map.has(letterChar))
        return false;
      // 如果映射中包含这个字符，那么就去找个字符对应的节点中继续匹配
      return this.match(map.get(letterChar), word, index + 1);
    } else {
      // 遍历 下一个字符的集合
      for (const key of map.keys())
        // 如果 从下一个字符继续匹配，只要匹配成功就返回 true
        if (this.match(map.get(key), word, index + 1))
          return true;
      // 遍历一遍之后还是没有匹配成功 那么就算匹配失败
      return false;
    }
  }

  // 获取字典树中存储的单词数量
  getSize () {
    return this.size;
  }

  // 获取字典树中是否为空
  isEmpty () {
    return this.size === 0;
  } 
}

// 自定义字典映射 TrieMap
class MyTrieMap {
  constructor () {
    this.trie = new MyTrieUpgrade();
  }

  // 添加操作
  add (key, value) {
    this.trie.add(key, value);
  }

  // 查询操作
  get (key) {
    return this.trie.get(key);
  }

  // 删除操作
  remove (key) {
    return this.trie.remove(key);
  }

  // 查看key是否存在
  contains (key) {
    return this.trie.contains(key);
  }

  // 更新操作
  set (key, value) {
    this.trie.set(key, value);
  }

  // 获取映射Map中所有的key
  getKeys () {
    let items = this.trie.getPrefixAll("");
    return Object.keys(items);
  }

  // 获取映射Map中所有的value
  getValues () {
    let items = this.trie.getPrefixAll("");
    return Object.values(items);
  }

  // 获取映射Map中实际元素个数
  getSize () {
    return this.trie.getSize();
  }

  // 查看映射Map中是否为空
  isEmpty () {
    return this.trie.isEmpty();
  }
}

// 自定义并查集 UnionFind
class MyUnionFind {
  constructor () {}

  // 功能：将元素q和元素p这两个数据以及他们所在的集合进行合并
  unionElements (q, p) {}

  // 功能：查询元素q和元素p这两个数据是否在同一个集合中
  isConnected (q, p) {}

  // 功能：当前并查集一共考虑多少个元素
  getSize () {}
}

// 自定义并查集 UnionFind 第一个版本 QuickFind版
// isConnected 操作很快
class MyUnionFindOne {
  constructor (size) {
    // 存储数据所对应的集合的编号
    this.ids = new Array(size);

    // 模拟存入数据
    const len = this.ids.length;
    for (var i = 0; i < len; i++)
      this.ids[i] = i;
  }
  
  // 功能：将元素q和元素p这两个数据以及他们所在的集合进行合并
  // 时间复杂度：O(n)
  unionElements (q, p) {
    const qId = this.find(q);
    const pId = this.find(p);

    if (qId === pId)
      return;

    for (var i = 0; i < this.ids.length; i++)
      if (pId === this.ids[i])
        this.ids[i] = qId;
  }

  // 功能：查询元素q和元素p这两个数据是否在同一个集合中
  // 时间复杂度：O(1)
  isConnected (q, p) {
    return this.ids[q] === this.ids[p];
  }

  // 查找元素所对应的集合编号
  find (index) {
    if (index < 0 || index >= this.ids.length)
      throw new Error("index is out of bound.");
    return this.ids[index];
  }

  // 功能：当前并查集一共考虑多少个元素
  getSize () {
    return this.ids.length;
  }
}

// 自定义并查集 UnionFind 第二个版本 QuickUnion版
// Union 操作变快了
// 还可以更快的
class MyUnionFindTwo {
  constructor (size) {
    // 存储当前节点所指向的父节点
    this.forest = new Array(size);

    // 在初始的时候每一个节点都指向它自己
    // 也就是每一个节点都是独立的一棵树
    const len = this.forest.length;
    for (var i = 0; i < len; i++)
      this.forest[i] = i;
  }
  
  // 功能：将元素q和元素p这两个数据以及他们所在的集合进行合并
  // 时间复杂度：O(h) h 为树的高度
  unionElements (treePrimary,  treeSecondary) {
    const primaryRoot = this.find(treePrimary);
    const secondarRoot = this.find(treeSecondary);

    if (primaryRoot === secondarRoot)
      return;

    // 无论哪棵树往那棵树上进行合并 都一样，他们都是树
    // 这里是主树节点上往次树节点进行合并
    this.forest[primaryRoot] = this.forest[secondarRoot];
  }

  // 功能：查询元素q和元素p这两个数据是否在同一个集合中
  // 时间复杂度：O(h) h 为树的高度
  isConnected (treeQ, treeP) {
    return this.find(treeQ) === this.find(treeP);
  }

  // 查找元素所对应的集合编号
  find (id) {
    if (id < 0 || id >= this.ids.length)
      throw new Error("index is out of bound.");

    // 不断的去查查找当前节点的根节点
    // 根节点的索引是指向自己，如果根节点为 1 那么对应的索引也为 1。
    while (id !== this.forest[id])
      id = this.forest[id];

    return id;
  }

  // 功能：当前并查集一共考虑多少个元素
  getSize () {
    return this.ids.length;
  }
}

// main 函数
class Main {
  constructor () {
    {
      // this.alterLine("MyStack Area");

      // let ms = new MyStack(10);
      // for (let i = 1; i <= 10 ; i++) {
      //     ms.push(i);
      //     console.log(ms.toString());
      // }

      // console.log(ms.peek());
      // this.show(ms.peek());

      // while (!ms.isEmpty()) {
      //   console.log(ms.toString());
      //   ms.pop();
      // }

      // this.alterLine("leetcode 20. 有效的括号");
      // let s = new Solution();
      // this.show(s.isValid("{ [ ( ) ] }"));
      // this.show(s.isValid(" [ ( ] ) "));

      // this.alterLine("MyQueue Area");
      // let mq = new MyQueue(10);
      // for (let i = 1; i <= 10 ; i++) {
      //     mq.enqueue(i);
      //     console.log(mq.toString());
      // }

      // console.log(mq.getFront());
      // this.show(mq.getFront());

      // while (!mq.isEmpty()) {
      //   console.log(mq.toString());
      //   mq.dequeue();
      // }
      
      // this.alterLine("MyLoopQueue Area");
      // let mlq = new MyQueue();
      // for (let i = 1; i <= 10 ; i++) {
      //     mlq.enqueue(i);
          // console.log(mlq.toString());
      // }

      // console.log(mlq.getFront());
      // this.show(mlq.getFront());

      // while (!mlq.isEmpty()) {
      //   console.log(mlq.toString());
      //   mlq.dequeue();
      // }

      // this.alterLine("Queues Comparison Area");
      // let mq = new MyQueue();
      // let mlq = new MyLoopQueue();
      // let performanceTest = new PerformanceTest();

      // let mqInfo = performanceTest.testQueue(mq, 10000);
      // let mlqInfo = performanceTest.testQueue(mlq, 10000);

      // this.alterLine("MyQueue Area");
      // console.log(mqInfo);
      // this.show(mqInfo);

      // this.alterLine("MyLoopQueue Area");
      // console.log(mlqInfo);
      // this.show(mlqInfo);

      // this.alterLine("MyLinkedList Area");
      // let mylinkedList = new MyLinkedList();

      // for (let i = 1; i <= 5 ; i++) {
      //   mylinkedList.addFirst(i);
      //   console.log(mylinkedList.toString());
      // }
      // mylinkedList.insert(2, 88888);
      // console.log(mylinkedList.toString());

      // mylinkedList.remove(2);
      // console.log(mylinkedList.toString());

      // mylinkedList.removeFirst();
      // console.log(mylinkedList.toString());

      // mylinkedList.removeLast();
      // console.log(mylinkedList.toString());
      
      // this.alterLine("MyLinkedListStack Area");
      // let myLinkedListStack = new MyLinkedListStack();
      // for (let i = 1; i <= 5 ; i++) {
      //   myLinkedListStack.push(i);
      //   console.log(myLinkedListStack.toString());
      // }

      // console.log(myLinkedListStack.peek());
      // this.show(myLinkedListStack.peek());

      // for (let i = 0; i < 5 ; i++) {
      //   console.log(myLinkedListStack.toString());
      //   myLinkedListStack.pop();
      // }
      
      // this.alterLine("Stacks Comparison Area");
      // let myStack = new MyStack();
      // let myLinkedListStack = new MyLinkedListStack();
      // let performanceTest = new PerformanceTest();

      // let myStackInfo = performanceTest.testStack(myStack, 100000);
      // let myLinkedListStackInfo = performanceTest.testStack(myLinkedListStack, 100000);

      // this.alterLine("MyStack Area");
      // console.log(myStackInfo);
      // this.show(myStackInfo);

      // this.alterLine("MyLinkedListStack Area");
      // console.log(myLinkedListStackInfo);
      // this.show(myLinkedListStackInfo);
      
      // this.alterLine("MyLinkedListQueue Area");
      // let myLinkedListQueue = new MyLinkedListQueue();
      // for (let i = 1; i <= 5 ; i++) {
      //   myLinkedListQueue.enqueue(i);
      //   console.log(myLinkedListQueue.toString());
      // }

      // console.log(myLinkedListQueue.getFront());
      // this.show(myLinkedListQueue.getFront());

      // for (let i = 0; i < 5 ; i++) {
      //   console.log(myLinkedListQueue.toString());
      //   myLinkedListQueue.dequeue();
      // }
      
      // this.alterLine("leetcode 203. 删除指定元素的所有节点");
      // let s = new Solution();

      // let arr = [1,2,3,5,1,2,1,3,5,3,5,6,3,1,5,1,3];
      // let node = new ListNode(null);
      // node.appendToLinkedListNode(arr);

      // console.log(node.toString());
      // let result = s.removeElements(node, 1);
      // console.log(result.toString());

      // this.alterLine("递归求和");
      // let calc = new Calc();
      // let arr = [1,2,3,4];
      
      // let arrInfo = `[`;
      // for (var i = 0; i < arr.length - 1; i++) {
      //   arrInfo += `${arr[i]},`
      // }
      // arrInfo += `${arr[arr.length - 1]}`;
      // arrInfo += `]`;
      // document.body.innerHTML += `${arrInfo}<br /><br />`;
      // this.show (calc.sum(arr));
      // this.show (calc.tailSum(arr));

      // this.alterLine("leetcode 203. 删除指定元素的所有节点(递归)");
      // let s = new Solution();

      // let arr = [1,2,3,5,1,2,1,3,5,3,5,6,3,1,5,1,3];
      // let node = new ListNode(null);
      // node.appendToLinkedListNode(arr);

      // console.log(node.toString());
      // let result = s.removeElements(node, 2);
      // console.log(result.toString());
    
      // this.alterLine("leetcode 203. 删除指定元素的所有节点(递归) 调试");
      // let s = new Solution();

      // let arr = [1,2,3];
      // let node = new ListNode(null);
      // node.appendToLinkedListNode(arr);
      // this.show(node);
      // s.removeElements(node, 2);
      
      // this.alterLine("MyBinarySearchTree Area");
      // let myBinarySearchTree = new MyBinarySearchTree();
      // let nums = [5, 3, 6, 8, 4, 2];
      // for (var i = 0; i < nums.length; i++) {
      //   myBinarySearchTree.add(nums[i]);
      // }

      // /////////////////
      // //      5      //
      // //    /   \    //
      // //   3    6    //
      // //  / \    \   //
      // // 2  4     8  //
      // /////////////////
      // myBinarySearchTree.preOrder(this.show);

      // this.show(myBinarySearchTree.contains(1));
      // console.log(myBinarySearchTree.contains(1));

      // this.alterLine("MyBinarySearchTree Area");
      // let myBinarySearchTree = new MyBinarySearchTree();
      // let nums = [5, 3, 6, 8, 4, 2];
      // for (var i = 0; i < nums.length; i++) {
      //   myBinarySearchTree.add(nums[i]);
      // }

      // /////////////////
      // //      5      //
      // //    /   \    //
      // //   3    6    //
      // //  / \    \   //
      // // 2  4     8  //
      // /////////////////
      
      // console.log(myBinarySearchTree.toString());
      
      // this.alterLine("MyBinarySearchTree Area");
      // let myBinarySearchTree = new MyBinarySearchTree();
      // let nums = [5, 3, 6, 8, 4, 2];
      // for (var i = 0; i < nums.length; i++) {
      //   myBinarySearchTree.add(nums[i]);
      // }

      // /////////////////
      // //      5      //
      // //    /   \    //
      // //   3    6    //
      // //  / \    \   //
      // // 2  4     8  //
      // /////////////////
      
      // this.alterLine("MyBinarySearchTree PreOrder Area");
      // myBinarySearchTree.preOrder(this.show);

      // this.alterLine("MyBinarySearchTree NonRecursivePreOrder Area");
      // myBinarySearchTree.nonRecursivePreOrder(this.show);

      // this.alterLine("MyBinarySearchTree InOrder Area");
      // myBinarySearchTree.inOrder(this.show);

      // this.alterLine("MyBinarySearchTree PostOrder Area");
      // myBinarySearchTree.postOrder(this.show);

      // this.alterLine("MyBinarySearchTree LevelOrder Area");
      // myBinarySearchTree.levelOrder(this.show);

      // this.alterLine("MyBinarySearchTree remove Min Node Area");
      // {
      //   let tree = new MyBinarySearchTree();

      //   let n = 100;
      //   let random = Math.random;

      //   for (var i = 0; i < n; i++) {
      //     tree.add(n * n * n * random());
      //   }

      //   let array = new MyArray(n);

      //   while(!tree.isEmpty()) {
      //     array.add(tree.removeMin());
      //   }

      //   // 数组中的元素从小到大排序的
      //   console.log(array.toString());

      //   for (var i = 1; i < n; i++) {
      //     //如果数组后面的元素小于数组前面的元素
      //     if (array.get(i) < array.get(i - 1))
      //       throw new Error("error. array element is not (small - big) sort.");
      //   }

      //   console.log("removeMin test completed.");
      //   this.show("removeMin test completed.");
      // }

      // this.alterLine("MyBinarySearchTree remove Max Node Area");
      // {
      //   let tree = new MyBinarySearchTree();

      //   let n = 100;
      //   let random = Math.random;

      //   for (var i = 0; i < n; i++) {
      //     tree.add(n * n * n * random());
      //   }

      //   let array = new MyArray(n);

      //   while(!tree.isEmpty()) {
      //     array.add(tree.removeMax());
      //   }

      //   // 数组中的元素从大到小排序的
      //   console.log(array.toString());

      //   for (var i = 1; i < n; i++) {
      //     //如果数组后面的元素大于数组前面的元素
      //     if (array.get(i) > array.get(i - 1))
      //       throw new Error("error. array element is not (big - small) sort.");
      //   }

      //   console.log("removeMax test completed.");
      //   this.show("removeMax test completed.");
      // }

      // this.alterLine("MyBinarySearchTree Remove Node Area");
      // {
      //   let n = 100;

      //   let tree = new MyBinarySearchTree();
      //   let array = new MyArray(n);

      //   let random = Math.random;

      //   for (var i = 0; i < n; i++) {
      //     tree.add(n * n * n * random());
      //     array.add(tree.removeMin());
      //   }

      //   // 数组中的元素从小到大排序的
      //   console.log(array.toString());

      //   for (var i = 0; i < n; i++) {
      //     tree.remove(array.get(i));
      //   }

      //   console.log("removeMin test "+ (tree.isEmpty() ? "completed." : "no completed."));
      //   this.show("removeMin test "+ (tree.isEmpty() ? "completed." : "no completed."));
      // }
      
      // this.alterLine("MyBinarySearchTreeSet Area");
      // {
      //   let n = 5;
      //   let set = new MyBinarySearchTreeSet();

      //   let random = Math.random;
      //   let temp = null;
      //   for (var i = 0; i < n; i++) {
      //     temp = random();
      //     set.add(n * n * n * temp);
      //     set.add(n * n * n * temp);
      //     set.add(n * n * n * temp);
      //     set.add(n * n * n * temp);
      //     set.add(n * n * n * temp);
      //     set.add(n * n * n * temp);
      //     set.add(n * n * n * temp);
      //   }

      //   console.log(set.getSize());
      //   this.show(set.getSize());

      //   let array = new MyArray(n);
      //   set.each((element) => {
      //     console.log(element);
      //     this.show(element);
      //     array.add(element);
      //   });

      //   for (var i = 0; i < array.getSize(); i++) {
      //     set.remove(array.get(i));
      //   }

      //   console.log(set.getSize());
      //   this.show(set.getSize());
      // }

      // this.alterLine("MyLinkedSet Area");
      // {
      //   let n = 100;
      //   let set = new MyLinkedListSet();

      //   let random = Math.random;
      //   let temp = null;
      //   for (var i = 0; i < n; i++) {
      //     temp = random();
      //     set.add(n * n * n * temp);
      //     set.add(n * n * n * temp);
      //     set.add(n * n * n * temp);
      //     set.add(n * n * n * temp);
      //     set.add(n * n * n * temp);
      //     set.add(n * n * n * temp);
      //     set.add(n * n * n * temp);
      //   }

      //   console.log(set.getSize());
      //   this.show(set.getSize());

      //   let array = new MyArray(n);
      //   set.each((element) => {
      //     console.log(element);
      //     this.show(element);
      //     array.add(element);
      //   });

      //   for (var i = 0; i < array.getSize(); i++) {
      //     set.remove(array.get(i));
      //   }

      //   console.log(set.getSize());
      //   this.show(set.getSize());
      // }
      
      // this.alterLine("Set Comparison Area");
      // let myLinkedListSet = new MyLinkedListSet();
      // let myBinarySearchTreeSet = new MyBinarySearchTreeSet();
      // let performanceTest = new PerformanceTest();

      // let myLinkedListSetInfo = performanceTest.testSet(myLinkedListSet, 5000);
      // let myBinarySearchTreeSetInfo = performanceTest.testSet(myBinarySearchTreeSet, 5000);

      // this.alterLine("MyLinkedListSet Area");
      // console.log(myLinkedListSetInfo);
      // this.show(myLinkedListSetInfo);

      // this.alterLine("MyBinarySearchTreeSet Area");
      // console.log(myBinarySearchTreeSetInfo);
      // this.show(myBinarySearchTreeSetInfo);
      
      // this.alterLine("leetcode 804.唯一摩尔斯密码词");
      // let s = new Solution();
      // let words = ["gin", "zen", "gig", "msg"];
      // this.show(s.uniqueMorseRepresentations(words));
      

     // this.alterLine("MyLinkedListMap Area");
     //  {
     //    let n = 5;
     //    let map = new MyLinkedListMap();
     //    let array = new MyArray();

     //    let random = Math.random;
     //    let temp = null;
     //    let result = null;
     //    for (var i = 0; i < n; i++) {
     //      temp = random();
     //      result = n * n * n * temp;
     //      array.add(result);
     //      array.add(result);
     //      array.add(result);
     //      array.add(result);
     //    }

     //    console.log(array.toString());

     //    for (var i = 0; i < array.getSize(); i++) {
     //      result = array.get(i);
     //      if (map.contains(result))
     //        map.add(result, map.get(result) + 1);
     //      else
     //        map.add(result, 1);
     //    }

     //    console.log(map.toString());

     //    for (var i = 0; i < array.getSize(); i++) {
     //      result = array.get(i);
     //      map.remove(result);
     //    }

     //    console.log(map.toString());

     //  }
     

     //  this.alterLine("MyBinarySearchTreeMap Area");
     //  {
     //    let n = 5;
     //    let map = new MyBinarySearchTreeMap();
     //    let array = new MyArray();

     //    let random = Math.random;
     //    let temp = null;
     //    let result = null;
     //    for (var i = 0; i < n; i++) {
     //      temp = random();
     //      result = n * n * n * temp;
     //      array.add(result);
     //      array.add(result);
     //      array.add(result);
     //      array.add(result);
     //    }

     //    console.log(array.toString());

     //    for (var i = 0; i < array.getSize(); i++) {
     //      result = array.get(i);
     //      if (map.contains(result))
     //        map.add(result, map.get(result) + 1);
     //      else
     //        map.add(result, 1);
     //    }

     //    console.log(map.toString());

     //    for (var i = 0; i < array.getSize(); i++) {
     //      result = array.get(i);
     //      map.remove(result);
     //    }

     //    console.log(map.toString());
     //  }
     
      // this.alterLine("Set Comparison Area");
      // let myLinkedListSet = new MyLinkedListSet();
      // let myBinarySearchTreeSet = new MyBinarySearchTreeSet();
      // let systemSet = new Set();
      // let performanceTest1 = new PerformanceTest();

      // systemSet.remove = systemSet.delete;
      // systemSet.contains = systemSet.has;
      // systemSet.isEmpty = () => systemSet.size === 0;    
      // systemSet.getSize = () => systemSet.size;

      // let myLinkedListSetInfo = performanceTest1.testSet(myLinkedListSet, 50000);
      // let myBinarySearchTreeSetInfo = performanceTest1.testSet(myBinarySearchTreeSet, 50000);
      // let systemSetInfo = performanceTest1.testSet(systemSet, 50000);

      // this.alterLine("MyLinkedListSet Area");
      // console.log(myLinkedListSetInfo);
      // this.show(myLinkedListSetInfo);

      // this.alterLine("MyBinarySearchTreeSet Area");
      // console.log(myBinarySearchTreeSetInfo);
      // this.show(myBinarySearchTreeSetInfo);

      // this.alterLine("SystemSet Area");
      // console.log(systemSetInfo);
      // this.show(systemSetInfo);

      // this.alterLine("Map Comparison Area");
      // let myLinkedListMap = new MyLinkedListMap();
      // let myBinarySearchTreeMap = new MyBinarySearchTreeMap();
      // let systemMap = new Map();
      // let performanceTest = new PerformanceTest();

      // systemMap.remove = systemMap.delete;
      // systemMap.contains = systemMap.has;
      // systemMap.add = systemMap.set;
      // systemMap.isEmpty = () => systemMap.size === 0;
      // systemMap.getSize = () => systemMap.size;

      // let myLinkedListMapInfo = performanceTest.testMap(myLinkedListMap, 50000);
      // let myBinarySearchTreeMapInfo = performanceTest.testMap(myBinarySearchTreeMap, 50000);
      // let systemMapInfo = performanceTest.testMap(systemMap, 50000);


      // this.alterLine("MyLinkedListMap Area");
      // console.log(myLinkedListMapInfo);
      // this.show(myLinkedListMapInfo);

      // this.alterLine("MyBinarySearchTreeMap Area");
      // console.log(myBinarySearchTreeMapInfo);
      // this.show(myBinarySearchTreeMapInfo);

      // this.alterLine("SystemMap Area");
      // console.log(systemMapInfo);
      // this.show(systemMapInfo);

      // this.alterLine("leetcode 349.  两个数组的交集");
      // let s = new Solution();
      // var nums1 = [1,2,2,1], nums2 = [2,2];
      // var nums3 = [4,9,5], nums4 = [9,4,9,8,4];

      // console.log("[" + s.intersection(nums1, nums2) + "]");
      // console.log("[" + s.intersection(nums3, nums4) + "]");
      // this.show("[" + s.intersection(nums1, nums2) + "]");
      // this.show("[" + s.intersection(nums3, nums4) + "]");

      // this.alterLine("leetcode 350.  两个数组的交集 II");

      // console.log("[" + s.intersect(nums1, nums2) + "]");
      // console.log("[" + s.intersect(nums3, nums4) + "]");
      // this.show("[" + s.intersect(nums1, nums2) + "]");
      // this.show("[" + s.intersect(nums3, nums4) + "]");
    }
    
    {
      // this.alterLine("MaxHeap Comparison Area");
      // const n = 1000000;

      // const maxHeapIsHeapify = new MyMaxHeap();
      // const maxHeapNotHeapify = new MyMaxHeap();
      // let performanceTest1 = new PerformanceTest();

      // const random = Math.random;
      // let arr = [];
      // let arr1 = [];

      // // 循环添加随机数的值
      // for (let i = 0; i < n; i++) {
      //   arr.push(random() * n);
      //   arr1.push(arr[i]);
      // }


      // this.alterLine("MaxHeap Is Heapify Area");
      // const maxHeapIsHeapifyInfo = performanceTest1.testHeap(maxHeapIsHeapify, arr, true);
      // console.log(maxHeapIsHeapifyInfo);
      // this.show(maxHeapIsHeapifyInfo);

      // this.alterLine("MaxHeap Not Heapify Area");
      // const maxHeapNotHeapifyInfo = performanceTest1.testHeap(maxHeapNotHeapify, arr1, false);
      // console.log(maxHeapNotHeapifyInfo);
      // this.show(maxHeapNotHeapifyInfo);

      // this.alterLine("MyMaxHeap Replace Area");
      // const n = 20;

      // const maxHeap = new MyMaxHeap();
      // const random = Math.random;

      // // 循环添加随机数的值
      // for (let i = 0; i < n; i++)
      //   maxHeap.add(random() * n);

      // console.log("MaxHeap maxHeap size:" + maxHeap.size());
      // this.show("MaxHeap maxHeap size:" + maxHeap.size());

      // // 使用数组取值
      // let arr = [];
      // for (let i = 0; i < n ; i++)
      //   arr[i] = maxHeap.replace(0);

      // console.log("Array arr size:" + arr.length + "，MaxHeap maxHeap size:" + maxHeap.size());
      // this.show("Array arr size:" + arr.length + "，MaxHeap maxHeap size:" + maxHeap.size());
      // console.log(arr, maxHeap);
      // // 检验一下是否符合要求
      // for (let i = 1; i < n; i++)
      //   if (arr[i - 1] < arr[i]) throw new Error("error.");

      // console.log("test maxHeap completed.");
      // this.show("test maxHeap completed.");
      
      // this.alterLine("leetcode 347. 前K个高频元素");
      // let s = new Solution();

      // let arr = [5,-3,9,1,7,7,9,10,2,2,10,10,3,-1,3,7,-9,-1,3,3];
      // console.log(arr);
      // this.show(arr);

      // let result = s.topKFrequent(arr, 3);
      // console.log(result);
      // this.show(result);
    }

    {
        // this.alterLine("MySegmentTree Area");
        // // 初始数据
        // const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        // // 初始化线段树，将初始数据和融合器传入进去
        // let mySegmentTree = new MySegmentTree(nums);
        // // 指定线段树的融合器
        // mySegmentTree.updateMerge((a, b) => a + b);

        // // 输出
        // console.log(mySegmentTree.toString());
        // this.show("");

        // // 输出查询后的数据
        // this.alterLine("MySegmentTree Queue Area");
        // console.log("查询区间[0, 2]：" + mySegmentTree.query(0,2));
        // this.show("查询区间[0, 2]：" + mySegmentTree.query(0,2));
        // console.log("查询区间[3, 9]：" + mySegmentTree.query(3,9));
        // this.show("查询区间[3, 9]：" + mySegmentTree.query(3,9));
        // console.log("查询区间[0, 9]：" + mySegmentTree.query(0,9));
        // this.show("查询区间[0, 9]：" + mySegmentTree.query(0,9));
        
        // // 输出更新后 再查询的数据
        // this.alterLine("MySegmentTree Update Area");
        // console.log(mySegmentTree.toString());
        // this.show("");
        // mySegmentTree.set(0, 2);
        // console.log("更新索引 0 值为 2：");
        // this.show("更新索引 0 值为 2：");
        // console.log(mySegmentTree.toString());
        // this.show("");
        // console.log("查询区间[0, 2]：" + mySegmentTree.query(0,2));
        // this.show("查询区间[0, 2]：" + mySegmentTree.query(0,2));
        // console.log("查询区间[3, 9]：" + mySegmentTree.query(3,9));
        // this.show("查询区间[3, 9]：" + mySegmentTree.query(3,9));
        // console.log("查询区间[0, 9]：" + mySegmentTree.query(0,9));
        // this.show("查询区间[0, 9]：" + mySegmentTree.query(0,9));
    }

    {
        // this.alterLine("leetcode 303. 区域和检索-数组不可变");
        // let s = new Solution();
        // let nums = [-2, 0, 3, -5, 2, -1];
        // let numArray = s.NumArray(nums);

        // console.log(numArray.sumRange(0, 2));
        // this.show(numArray.sumRange(0, 2));
        // console.log(numArray.sumRange(2, 5));
        // this.show(numArray.sumRange(2, 5));
        // console.log(numArray.sumRange(0, 5));
        // this.show(numArray.sumRange(0, 5));
        
        // this.alterLine("leetcode 307. 区域和检索 - 数组可修改");
        // let s = new Solution();
        // let nums = [1, 3, 5];
        // let numArray = s.NumArray2(nums);

        // console.log(numArray.sumRange(0, 2));
        // this.show(numArray.sumRange(0, 2));
        // numArray.update(1, 2); 
        // console.log(numArray.sumRange(0, 2));
        // this.show(numArray.sumRange(0, 2));
    }

    {
      // this.alterLine("Set Comparison Area");
      // const n = 2000000;

      // const myBSTSet = new MyBinarySearchTreeSet();
      // const myTrieSet = new MyTrieSet();
      // let performanceTest1 = new PerformanceTest();

      // const random = Math.random;
      // let arr = [];

      // // 循环添加随机数的值
      // for (let i = 0; i < n; i++) {
      //   arr.push(i.toString());
      // }

      // this.alterLine("MyBSTSet Comparison Area");
      // const myBSTSetInfo = performanceTest1.testCustomFn(function () {

      //   for(const word of arr)
      //     myBSTSet.add(word);

      // });

      // // 总毫秒数：3173
      // console.log(myBSTSetInfo);
      // this.show(myBSTSetInfo);


      // this.alterLine("MyTrieSet Comparison Area");
      // const myTrieSetInfo = performanceTest1.testCustomFn(function () {

      //   for(const word of arr)
      //     myTrieSet.add(word);

      // });
      
      // // 总毫秒数：2457
      // console.log(myTrieSetInfo);
      // this.show(myTrieSetInfo);
    }

    {
        // this.alterLine("leetcode 208.实现 Trie (前缀树)");

        // let s = new Solution();
        // let trie = s.Trie();
        // this.show(trie.insert("apple") + "");
        // this.show(trie.search("apple") + " // 返回 true");   // 返回 true
        // this.show(trie.search("app") + "// 返回 false");     // 返回 false
        // this.show(trie.startsWith("app") + "// 返回 true"); // 返回 true
        // this.show(trie.insert("app") + "");   
        // this.show(trie.search("app") + "// 返回 true");     // 返回 true

        // this.alterLine("leetcode 211.添加与搜索单词 - 数据结构设计");

        // let s = new Solution();
        // let trie = s.WordDictionary();
        // this.show(trie.addWord("bad") + "");
        // this.show(trie.addWord("dad") + "");
        // this.show(trie.addWord("mad") + "");
        // this.show(trie.search("pad") + "-> false" );//-> false
        // this.show(trie.search("bad") + "-> true" );//-> true
        // this.show(trie.search(".ad") + "-> true" );//-> true
        // this.show(trie.search("b..") + "-> true" );//-> true

        // this.alterLine("leetcode 208. 实现 Trie (前缀树)");

        // let trie = new MyTrie();
        // this.show(trie.add("apple") + "");
        // this.show(trie.contains("apple") + " // 返回 true");   // 返回 true
        // this.show(trie.contains("app") + "// 返回 false");     // 返回 false
        // this.show(trie.isPrefix("app") + "// 返回 true"); // 返回 true
        // this.show(trie.add("app") + "");   
        // this.show(trie.contains("app") + "// 返回 true");     // 返回 true

        // this.alterLine("leetcode 211. 添加与搜索单词 - 数据结构设计");

        // trie = new MyTrie();
        // this.show(trie.add("bad") + "");
        // this.show(trie.add("dad") + "");
        // this.show(trie.add("mad") + "");
        // this.show(trie.regexpSearch("pad") + "-> false" );//-> false
        // this.show(trie.regexpSearch("bad") + "-> true" );//-> true
        // this.show(trie.regexpSearch(".ad") + "-> true" );//-> true
        // this.show(trie.regexpSearch("b..") + "-> true" );//-> true
        // this.show(trie.regexpSearch("b....") + "-> false" );//-> false
        
        // this.alterLine("leetcode 677. 键值映射");
        // let s = new Solution();
        // let trie = s.MapSum();

        // this.show(trie.insert("apple", 3) + " 输出: Null");
        // this.show(trie.sum("ap") + " 输出: 3");
        // this.show(trie.insert("app", 2) + " 输出: Null");
        // this.show(trie.sum("ap") + " 输出: 5");
    }

    
      this.alterLine("Map Comparison Area");
      const n = 2000000;

      const myBSTMap = new MyBinarySearchTreeMap();
      const myTrieMap = new MyTrieMap();
      let performanceTest1 = new PerformanceTest();

      const random = Math.random;
      let arr = [];

      // 循环添加随机数的值
      for (let i = 0; i < n; i++) {
        arr.push(Math.floor(n * random()).toString());
      }

      this.alterLine("MyBSTMap Comparison Area");
      const myBSTMapInfo = performanceTest1.testCustomFn(function () {

        // 添加
        for(const word of arr)
          myBSTMap.add(word, String.fromCharCode(word));

        // 删除
        for(const word of arr)
          myBSTMap.remove(word);

        // 查找
        for(const word of arr)
          if (myBSTMap.contains(word))
            throw new Error("doesn't remove ok.");

      });

      //  总毫秒数：18703
      console.log(myBSTMapInfo);
      this.show(myBSTMapInfo);


      this.alterLine("MyTrieMap Comparison Area");
      const myTrieMapInfo = performanceTest1.testCustomFn(function () {

        for(const word of arr)
          myTrieMap.add(word, String.fromCharCode(word));

        // 删除
        for(const word of arr)
          myTrieMap.remove(word);

        // // 查找
        for(const word of arr)
          if (myTrieMap.contains(word))
            throw new Error("doesn't remove ok.");

      });
      
      // 总毫秒数：8306
      console.log(myTrieMapInfo);
      this.show(myTrieMapInfo);
      console.log(myTrieMap.getKeys()); // 有效
      console.log(myTrieMap.getValues()); // 有效
    
  }

  // 将内容显示在页面上
  show (content) {
    document.body.innerHTML += `${content}<br /><br />`;
  }

  // 展示分割线
  alterLine (title) {
    let line = `--------------------${title}----------------------`
    console.log(line);
    document.body.innerHTML += `${line}<br /><br />`;
  }
}

// 性能测试
class PerformanceTest {
  constructor () {}

  // 对比队列
  testQueue (queue, openCount) {
    let startTime = Date.now();

    let random = Math.random;
    for (var i = 0; i < openCount; i++) {
      queue.enqueue(random() * openCount);
    }

    while(!queue.isEmpty()) {
      queue.dequeue();
    }

    let endTime = Date.now();

    return this.calcTime(endTime - startTime);
  }

  // 对比栈
  testStack (stack, openCount) {
    let startTime = Date.now();

    let random = Math.random;
    for (var i = 0; i < openCount; i++) {
      stack.push(random() * openCount);
    }

    while(!stack.isEmpty()) {
      stack.pop();
    }

    let endTime = Date.now();

    return this.calcTime(endTime - startTime);
  }

  // 对比集合
  testSet (set, openCount) {
    let startTime = Date.now();

    let random = Math.random;
    let arr = [];
    let temp = null;

    // 第一遍测试
    for (var i = 0; i < openCount; i++) {
      temp = random();
      // 添加重复元素，从而测试集合去重的能力
      set.add(temp * openCount);
      set.add(temp * openCount);

      arr.push(temp * openCount)
    }
    
    for (var i = 0; i < openCount; i++) {
      set.remove(arr[i]);
    }

    // 第二遍测试
    for (var i = 0; i < openCount; i++) {
      set.add(arr[i]);
      set.add(arr[i]);
    }

    while(!set.isEmpty()) {
      set.remove(arr[set.getSize() - 1]);
    }

    let endTime = Date.now();

    // 求出两次测试的平均时间
    let avgTime = Math.ceil((endTime - startTime) / 2);

    return this.calcTime(avgTime);
  }

  // 对比映射
  testMap (map, openCount) {
    let startTime = Date.now();

    let array = new MyArray();
    let random = Math.random;
    let temp = null;
    let result = null;
    for (var i = 0; i < openCount; i++) {
      temp = random();
      result = openCount * temp;
      array.add(result);
      array.add(result);
      array.add(result);
      array.add(result);
    }

    for (var i = 0; i < array.getSize(); i++) {
      result = array.get(i);
      if (map.contains(result))
        map.add(result, map.get(result) + 1);
      else
        map.add(result, 1);
    }

    for (var i = 0; i < array.getSize(); i++) {
        result = array.get(i);
        map.remove(result);
    }

    let endTime = Date.now();

    return this.calcTime(endTime - startTime);
  }

  // 对比堆 主要对比 使用heapify 与 不使用heapify时的性能
  testHeap (heap, array, isHeapify) {
    const startTime = Date.now();

    // 是否支持 heapify
    if (isHeapify)
      heap.heapify(array);
    else {
      for (const element of array)
        heap.add(element);
    }

    console.log("heap size:" + heap.size() + "\r\n");
    document.body.innerHTML += ("heap size:" + heap.size() + "<br /><br />");

    // 使用数组取值
    let arr = new Array(heap.size());
    for (let i = 0; i < arr.length ; i++)
      arr[i] = heap.extractMax();

    console.log(
      "Array size:" + arr.length + "，heap size:" + heap.size() + "\r\n");
    document.body.innerHTML += (
      "Array size:" + arr.length + "，heap size:" + heap.size() + "<br /><br />");

    // 检验一下是否符合要求
    for (let i = 1; i < arr.length; i++)
      if (arr[i - 1] < arr[i]) throw new Error("error.");

    console.log(
      "test heap completed." + "\r\n");
    document.body.innerHTML += ("test heap completed." + "<br /><br />");

    const endTime = Date.now();
    return this.calcTime(endTime - startTime);
  }

  // 计算运行的时间，转换为 天-小时-分钟-秒-毫秒
  calcTime (result) {

    //获取距离的天数
    var day = Math.floor(result / (24 * 60 * 60 * 1000));

    //获取距离的小时数
    var hours = Math.floor(result / ( 60 * 60 * 1000) % 24);


    //获取距离的分钟数
    var minutes = Math.floor(result / (60 * 1000) % 60);

    //获取距离的秒数
    var seconds = Math.floor(result / 1000 % 60);

    //获取距离的毫秒数
    var milliSeconds = Math.floor(result % 1000);

    // 计算时间
    day = day < 10 ? "0" + day : day;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    milliSeconds = milliSeconds < 100 ?
      (milliSeconds < 10 ? "00" + milliSeconds : "0" + milliSeconds) : milliSeconds;
  
    // 输出耗时字符串
    result = day + "天" + hours + "小时" + minutes + "分" +
     seconds + "秒" + milliSeconds + "毫秒" + 
     "  <<<<============>>>>  总毫秒数：" + result;

    return result;
  }

  // 自定义对比
  testCustomFn (fn) {
    let startTime = Date.now();

    fn();

    let endTime = Date.now();

    return this.calcTime(endTime - startTime);
  }
}

// 链表节点类
class ListNode {
  constructor (val) {
    this.val = val;
    this.next = null;
  }

  // 将一个数组对象 转换为一个链表 并且追加到当前节点上
  appendToLinkedListNode (array) {

    let head = null;
    if (this.val === null) { // 头部添加
      head = this;
      head.val = array[0];
      head.next = null;
    } else { // 插入式
      head = new ListNode(array[0]);
      head.next = this.next;
      this.next = head;
    }

    // 添加节点的方式  头部添加、尾部添加、中间插入

    // 尾部添加节点的方式
    for (var i = 1; i < array.length; i++) {
      head.next = new ListNode(array[i]);
      head = head.next;
    }
  }

  // 输出链表中的信息
  // @Override toString 2018-10-21-jwl
  // toString () {
  //   let arrInfo = `ListNode: \n`;
  //   arrInfo += `data = front  [`;
  //   let node = this;
  //   while (node.next !== null) {
  //     arrInfo += `${node.val}->`;
  //     node = node.next;
  //   }    
  //   arrInfo += `${node.val}->`;
  //   arrInfo += "NULL] tail";

  //   // 在页面上展示
  //   document.body.innerHTML += `${arrInfo}<br /><br /> `;

  //   return arrInfo;
  // }

  toString () {
    let arrInfo = `ListNode = `;
    arrInfo += `front  [`;
    let node = this;
    while (node.next !== null) {
      arrInfo += `${node.val}->`;
      node = node.next;
    }
    arrInfo += `${node.val}->`;
    arrInfo += "NULL] tail";

    return arrInfo;
  }
}

// 递归基础类
class Calc {
  constructor () {}

  // 递归求和
  sum (array, cur = 0) {

    // 解决最基本的问题
    if (cur === array.length) {
      return 0;
    }

    // 化归思想
    // 将原问题分解为性质相同的小问题
    // 将众多小问题的答案构建出原问题的答案
    return array[cur] + this.sum(array, cur + 1);

  }
  // 尾递归求和
  tailSum (array, cur = 0, result = 0) {

    // 解决最基本的问题
    if (cur === array.length) {
      return result; // 这里是上面的sum不一样，这里直接返回最终计算结果
    }

    // 化归思想 ： 将原问题分解为性质相同的小问题，使用小问题的解构建出原问题的解。
    // 减少或者复用程序调用系统栈： 将运算操作一次性执行完毕，然后再执行子函数。
    return this.tailSum(array, cur + 1, result + array[cur]);
  }
}

// 答题
class Solution {

  // leetcode 20. 有效的括号
  isValid (s) {
    
    /**
     * @param {string} s
     * @return {boolean}
     */
    var isValid = function(s) {
        let stack = [];

        // 以遍历的方式进行匹配操作
        for (let i = 0; i < s.length; i++) {

          // 是否是正括号
          switch (s[i]) {
            case '{' :
            case '[' : 
            case '(' : 
              stack.push(s[i]);
            break;
            default:
              break;
          }
          // 是否是反括号
          switch (s[i]) {
            case '}' :
              if (stack.length === 0 || stack.pop() !== '{') {
                console.log("valid error. not parentheses. in");
                return false;
              }
            break;
            case ']' :

              if (stack.length === 0 || stack.pop() !== '[') {
                console.log("valid error. not parentheses. in");
                return false;
              }
            break;
            case ')' : 
              if (stack.length === 0 || stack.pop() !== '(') {
                console.log("valid error. not parentheses. in");
                return false;
              }
            break;
            default:
            break;
          }
        }

        // 是否全部匹配成功
        if (stack.length === 0) {
          return true;
        } else {
          console.log("valid error. not parentheses. out");
          return false;
        }
    }

    return isValid(s);
  }

  // leetcode 203. 移除链表元素
  removeElements (head, val) {

    /**
     * Definition for singly-linked list.
     * function ListNode(val) {
     *     this.val = val;
     *     this.next = null;
     * }
     */
    /**
     * @param {ListNode} head
     * @param {number} val
     * @return {ListNode}
     */
    var removeElements = function(head, val) {
    
      // 对头步进行特殊处理
      while(head !== null && head.val === val) {
        head = head.next;
      }

      // 处理后的头部如果为null 那直接返回
      if (head === null) {
        return null;
      }

      // 因为头部已经做了特殊处理， head即不为null 并且 head.val不等于null
      // 那么可以直接从 head的下一个节点开始判断。
      let prev = head;
      while(prev.next !== null) {
        if (prev.next.val === val) {
          let delNode = prev.next;
          prev.next = delNode.next;
          delNode = null;
        } else {
          prev = prev.next;
        }
      }

      return head;
    };
    
    var removeElements = function(head, val) {
      
      if (head === null) {
        return null;
      }

      let dummyHead = new ListNode(0);
      dummyHead.next = head;
      let cur = dummyHead;
      while (cur.next !== null) {
        if (cur.next.val === val) {
          cur.next = cur.next.next;
        } else {
          cur = cur.next;
        }
      }
      return dummyHead.next;
    };

    // 递归求解三种方式
    var removeElements = function(head, val) {

      // 解决最基本的问题
      if (head === null) {
        return null;
      }

      // 第一种解决方式
      //   let node = removeElements(head.next, val);

      //   if (head.val === val) {
      //     head = node;
      //   } else {
      //     head.next = node;
      //   }

      //   return head;
      
      // 第二种解决方式    
      // if (head.val === val) {
      //   head = removeElements(head.next, val);
      // } else {
      //   head.next = removeElements(head.next, val);
      // }
      // return head;
        
      // 第三种方式
      head.next = removeElements(head.next, val);
      if (head.val === val) {
        return head.next;
      } else {
        return head;
      }
    }

    // 尾递归的方式 失败 没有到达那个程度
    // var removeElements = function(head, val, node = null) {
    //   if (head === null) {
    //     return node;
    //   }


    //   return removeElements(head.next, val , node = head);

    // }
    
    // 深入理解递归过程
    var removeElements = function(head, val, depth = 0) {

      // 首次输出 开始调用函数
      let depthString = generateDepathString(depth);
      let info =  depthString + "Call: remove " + val + " in " + head;
      show(info);

      if (head === null) {
        // 第二次输出  解决最基本的问题时
        info = depthString + "Return ：" + head;
        show(info);

        return null;
      }

      let result = removeElements(head.next, val, depth + 1);

      // 第三次输出 将原问题分解为小问题
      info = depthString + "After： remove " + val + " ：" + result;
      show(info);

      let ret = null;
      if (head.val === val) {
        ret = result;
      } else {
        head.next = result;
        ret = head;
      }

      // 第四次输出 求出小问题的解
      info = depthString + "Return ：" + ret;
      show(info);

      return ret;
    }

    // 辅助函数 生成递归深度字符串
    function generateDepathString (depth) {
      let arrInfo = ``;
      for (var i = 0; i < depth; i++) {
        arrInfo += `-- `;// -- 表示深度，--相同则代表在同一递归深度
      }
      return arrInfo;
    }

    // 辅助函数 输出内容 到页面和控制台上
    function show (content) {
      document.body.innerHTML += `${content}<br /><br />`;
      console.log(content);
    }

    return removeElements(head, val);
  }

  // leetcode 804. 唯一摩尔斯密码词
  uniqueMorseRepresentations (words) {

    /**
     * @param {string[]} words
     * @return {number}
     * 使用自己的二分搜索树来实现
     */
    var uniqueMorseRepresentations = function(words) {
        // 摩斯码
        const codes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
        
        const myBinarySearchTreeSet = new MyBinarySearchTreeSet();
        let content = "";
        // 获取起始字符的aceii码，
        // 从而可以求出某个单词的每一个字符在字母表中占的位置索引，
        // 根据这些位置索引就可以在摩斯表中找到相应的摩斯码，
        // 一个单词就是一组摩斯码，然后使用set添加，就可以直接实现去重的操作了
        const start = "a".charCodeAt(0);
        for (const word of words) {
          for (const w of word) 
            content += codes[w.charCodeAt(0) - start];

          myBinarySearchTreeSet.add(content);
          content = "";
        }

        return myBinarySearchTreeSet.getSize();
    };

    /**
     * @param {string[]} words
     * @return {number}
     * 使用系统内置的Set集合类
     */
    var uniqueMorseRepresentations = function(words) {
        // 摩斯码
        const codes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
        
        const set = new Set();
        let content = "";
        // 获取起始字符的aceii码，
        // 从而可以求出某个单词的每一个字符在字母表中占的位置索引，
        // 根据这些位置索引就可以在摩斯表中找到相应的摩斯码，
        // 一个单词就是一组摩斯码，然后使用set添加，就可以直接实现去重的操作了
        const start = "a".charCodeAt(0);
        for (const word of words) {
          for (const w of word) 
            content += codes[w.charCodeAt(0) - start];

          set.add(content);
          content = "";
        }

        return set.size;
    };

    return uniqueMorseRepresentations(words);
  }

  // leetcode 349. 两个数组的交集
  intersection (nums1, nums2) {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    var intersection = function(nums1, nums2) {
        let set = new Set();
        let arr = [];

        for (const num of nums1)
          set.add(num);

        for (const num of nums2) {
          if (set.has(num)) {
            arr.push(num);
            set.delete(num);
          }
        }

        return arr;
    };

    return intersection(nums1, nums2);
  }

  // leetcode 350.两个数组的交集 II
  intersect (nums1, nums2) {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    var intersect = function(nums1, nums2) {
      let map = new Map();
      let arr = [];

      for (const num of nums1) {
        if (map.has(num))
          map.set(num, map.get(num) + 1);
        else
          map.set(num, 1);
      }

      for (const num of nums2) {
        if (map.has(num)) {
          arr.push(num);
          let result = map.get(num) - 1;
          map.set(num, result);

          if (result === 0)
            map.delete(num);
        }
      }

      return arr;
    };

    return intersect(nums1, nums2);
  }

  // leetcode 347. 前K个高频元素
  topKFrequent (nums, k) {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     * 原版
     */
    var topKFrequent = function(nums, k) {
        let map = new Map();
        // 统计 数组中每一个元素出现频率
        for (const num of nums) {
          if (map.has(num))
            map.set(num, map.get(num) + 1);
          else
            map.set(num, 1);
        }

        // 优先队列：使用的时候指定优先级比较的方式
        let queue = new MyPriorityQueue();
        // 变更优先队列中的定义优先级的方法
        queue.updateCompare((elementA, elementB) => {
          // 原的比较算法是 值越大 优先级越大
          // 现在改为 值越小 优先级越大
          if (elementA.value < elementB.value)
            return 1;
          else if (elementA.value > elementB.value)
            return -1;
          else
            return 0;
        });

        for (const key of map.keys()) {
          if (queue.getSize() < k)
            queue.enqueue({"key": key, "value": map.get(key)});
          else if (map.get(key) > queue.getFront().value) {
            queue.replaceFront({"key": key, "value": map.get(key)});
            // queue.dequeue();
            // queue.enqueue({"key": key, "value": map.get(key)});
          }
        }

        let result = [];
        for (var i = 0; i < k; i++) {
          result.push(queue.dequeue().key);
        }
        return result;
    };

    // 精简版
    var topKFrequent = function(nums, k) {
        let map = new Map();
        // 统计 数组中每一个元素出现频率
        for (const num of nums) {
          if (map.has(num))
            map.set(num, map.get(num) + 1);
          else
            map.set(num, 1);
        }

        // 优先队列：使用的时候指定优先级比较的方式
        let queue = new MyPriorityQueue();
        // 变更优先队列中的定义优先级的方法
        queue.updateCompare((keyA, keyB) => {
          // 原的比较算法是 值越大 优先级越大
          // 现在改为 值越小 优先级越大
          if (map.get(keyA) < map.get(keyB))
            return 1;
          else if (map.get(keyA) > map.get(keyB))
            return -1;
          else
            return 0;
        });

        for (const key of map.keys()) {
          if (queue.getSize() < k)
            queue.enqueue(key);
          else if (map.get(key) > map.get(queue.getFront())) {
            queue.replaceFront(key);
          }
        }

        let result = [];
        for (var i = 0; i < k; i++) {
          result.push(queue.dequeue());
        }
        return result;
    };

    return topKFrequent (nums, k);
  }

  // leetcode 303. 区域和检索-数组不可变
  NumArray (nums) {
    /**
     * @param {number[]} nums
     * 处理方式一：对原数组进行预处理操作
     */
    var NumArray = function(nums) {
        if (nums.length > 0) {
          this.data = new Array(nums.length + 1);
          this.data[0] = 0;
          for (var i = 0; i < nums.length; i++) {
            this.data[i + 1] = this.data[i] + nums[i];
          }
        }
    };

    /** 
     * @param {number} i 
     * @param {number} j
     * @return {number}
     */
    NumArray.prototype.sumRange = function(i, j) {
        return this.data[j + 1] - this.data[i];
    };

    /** 
     * Your NumArray object will be instantiated and called as such:
     * var obj = Object.create(NumArray).createNew(nums)
     * var param_1 = obj.sumRange(i,j)
     */
    
    /**
     * @param {number[]} nums
     * 处理方式二：使用线段树
     */
    var NumArray = function(nums) {
        if (nums.length > 0) {
          this.mySegmentTree = new MySegmentTree(nums);
        }
    };

    /** 
     * @param {number} i 
     * @param {number} j
     * @return {number}
     */
    NumArray.prototype.sumRange = function(i, j) {
        return this.mySegmentTree.query(i, j)
    };

    return new NumArray(nums);
  }

  // leetcode 307. 区域和检索 - 数组可修改
  NumArray2 (nums) {
    /**
     * @param {number[]} nums
     * 方式一：对原数组进行预处理操作
     */
    var NumArray = function(nums) {
        // 克隆一份原数组
        this.data = new Array(nums.length);
        for (var i = 0; i < nums.length; i++) {
          this.data[i] = nums[i]
        }

        if (nums.length > 0) {
          this.sum = new Array(nums.length + 1);
          this.sum[0] = 0;
          for (let i = 0; i < nums.length; i++)
            this.sum[i + 1] = this.sum[i] + nums[i];
        }
    };

    /** 
     * @param {number} i 
     * @param {number} val
     * @return {void}
     */
    NumArray.prototype.update = function(i, val) {
        this.data[i] = val;
        
        for (let j = 0; j < this.data.length; j++)
            this.sum[j + 1] = this.sum[j] + this.data[j];
    };

    /** 
     * @param {number} i 
     * @param {number} j
     * @return {number}
     */
    NumArray.prototype.sumRange = function(i, j) {
        return this.sum[j + 1] - this.sum[i];
    };

    /** 
     * Your NumArray object will be instantiated and called as such:
     * var obj = Object.create(NumArray).createNew(nums)
     * obj.update(i,val)
     * var param_2 = obj.sumRange(i,j)
     */
    
    /**
     * @param {number[]} nums
     * 方式二：对原数组进行预处理操作
     */
    var NumArray = function(nums) {
      this.tree = new MySegmentTree(nums);
    };

    /** 
     * @param {number} i 
     * @param {number} val
     * @return {void}
     */
    NumArray.prototype.update = function(i, val) {
      this.tree.set(i, val);
    };

    /** 
     * @param {number} i 
     * @param {number} j
     * @return {number}
     */
    NumArray.prototype.sumRange = function(i, j) {
        return this.tree.query(i, j);
    };

    return new NumArray(nums);
  }

  // leetcode 208.实现 Trie (前缀树)
  Trie () {

    // 数组版的Trie 静态Trie
    function ArrayTrie () {
      // TrieNode
      var TrieNode = function (isWord = false) {
        this.isWord = isWord;
        this.next = new Array(26);
      }

      /**
       * Initialize your data structure here.
       */
      var Trie = function() {
          this.root = new TrieNode();
      };

      /**
       * Inserts a word into the trie. 
       * @param {string} word
       * @return {void}
       */
      Trie.prototype.insert = function(word) {
          // 指定游标
          let cur = this.root;

          for (const c of word) {
            const index = c.charCodeAt(0) - 97;
            const array = cur.next;
            if (array[index] === null || array[index] === undefined)
              array[index] = new TrieNode();
            cur = array[index];
          }

          if (!cur.isWord)
            cur.isWord = true;
      };

      /**
       * Returns if the word is in the trie. 
       * @param {string} word
       * @return {boolean}
       */
      Trie.prototype.search = function(word) {
          // 指定游标
          let cur = this.root;

          for (const c of word) {
            const index = c.charCodeAt(0) - 97;
            const array = cur.next;
            if (array[index] === null || array[index] === undefined)
              return false;
            cur = array[index];
          }

          return cur.isWord;
      };

      /**
       * Returns if there is any word in the trie that starts with the given prefix. 
       * @param {string} prefix
       * @return {boolean}
       */
      Trie.prototype.startsWith = function(prefix) {
          // 指定游标
          let cur = this.root;

          for (const c of prefix) {
            const index = c.charCodeAt(0) - 97;
            const array = cur.next;
            if (array[index] === null || array[index] === undefined)
              return false;
            cur = array[index];
          }

          return true;
      };

      /** 
       * Your Trie object will be instantiated and called as such:
       * var obj = Object.create(Trie).createNew()
       * obj.insert(word)
       * var param_2 = obj.search(word)
       * var param_3 = obj.startsWith(prefix)
       */
      
      return new Trie();
    }

    // 映射版的Trie 动态Trie
    function MapTrie () {

      // TrieNode
      var TrieNode = function (isWord = false) {
        this.isWord = isWord;
        this.next = new Map();
      }
      /**
       * Initialize your data structure here.
       */
      var Trie = function() {
          this.root = new TrieNode();
      };

      /**
       * Inserts a word into the trie. 
       * @param {string} word
       * @return {void}
       */
      Trie.prototype.insert = function(word) {
          // 指定游标
          let cur = this.root;

          for (const c of word) {
            const map = cur.next;
            if (!map.has(c))
              map.set(c, new TrieNode());
            cur = map.get(c);
          }

          if (!cur.isWord)
            cur.isWord = true;
      };

      /**
       * Returns if the word is in the trie. 
       * @param {string} word
       * @return {boolean}
       */
      Trie.prototype.search = function(word) {
          // 指定游标
          let cur = this.root;

          for (const c of word) {
            const map = cur.next;
            if (!map.has(c))
              return false;
            cur = map.get(c);
          }

          return cur.isWord;          
      };

      /**
       * Returns if there is any word in the trie that starts with the given prefix. 
       * @param {string} prefix
       * @return {boolean}
       */
      Trie.prototype.startsWith = function(prefix) {
          // 指定游标
          let cur = this.root;

          for (const c of prefix) {
            const map = cur.next;
            if (!map.has(c))
              return false;
            cur = map.get(c);
          }
          
          return true;    
      };

      /** 
       * Your Trie object will be instantiated and called as such:
       * var obj = Object.create(Trie).createNew()
       * obj.insert(word)
       * var param_2 = obj.search(word)
       * var param_3 = obj.startsWith(prefix)
       */
      
      return new Trie();
    }

    // return new ArrayTrie();
    return new MapTrie();
  }

  // leetcode 211.添加与搜索单词 - 数据结构设计
  WordDictionary () {

    // 数组版
    function ArrayWordDictionary() {
      // TrieNode
      var TrieNode = function () {
        this.isWord = false;
        this.next = new Array(26);
      }

      /**
       * Initialize your data structure here.
       */
      var WordDictionary = function() {
          this.root = new TrieNode();
      };

      /**
       * Adds a word into the data structure. 
       * @param {string} word
       * @return {void}
       */
      WordDictionary.prototype.addWord = function(word) {
          // 指定游标
          let cur = this.root;

          for (const c of word) {
            const index = c.charCodeAt(0) - 97;
            const array = cur.next;
            if (!array[index])
              array[index] = new TrieNode();
            cur = array[index];
          }

          if (!cur.isWord)
            cur.isWord = true;      
      };

      /**
       * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
       * @param {string} word
       * @return {boolean}
       */
      WordDictionary.prototype.search = function(word) {
         return this.recursiveMatch(this.root, word, 0);
      };

      // 递归搜索
      WordDictionary.prototype.recursiveMatch = function (node, word, index) {
        if (index === word.length)
          return node.isWord;

        const letterChar = word[index];

        if (letterChar !== ".") {
          const i = letterChar.charCodeAt(0) - 97;

          if (!node.next[i])
            return false;
          return this.recursiveMatch(node.next[i], word, index + 1);
        } else {
          for (const next of node.next) {
            if (next === undefined)
              continue;
            if (this.recursiveMatch(next, word, index + 1))
              return true;
          }
          return false;
        }
      }

      /** 
       * Your WordDictionary object will be instantiated and called as such:
       * var obj = Object.create(WordDictionary).createNew()
       * obj.addWord(word)
       * var param_2 = obj.search(word)
       */
      return new WordDictionary();
    }

    // 映射版
    function MapWordDictionary() {
      // TrieNode
      var TrieNode = function (isWord = false) {
        this.isWord = isWord;
        this.next = new Map();
      }
      /**
       * Initialize your data structure here.
       */
      var WordDictionary = function() {
          this.root = new TrieNode();
      };

      /**
       * Adds a word into the data structure. 
       * @param {string} word
       * @return {void}
       */
      WordDictionary.prototype.addWord = function(word) {
          let cur = this.root;

          for (const c of word) {
            if (!cur.next.has(c))
              cur.next.set(c, new TrieNode());
            cur = cur.next.get(c);
          }

          if (!cur.isWord)
            cur.isWord = true;
      };

      /**
       * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
       * @param {string} word
       * @return {boolean}
       */
      WordDictionary.prototype.search = function(word) {
          return this.recursiveMatch(this.root, word, 0);
      };
      WordDictionary.prototype.recursiveMatch = function(node, word, index) {
          if (index === word.length)
            return node.isWord;

          const letterChar = word[index];
          if (letterChar !== ".") {
            const map = node.next;
            if (!map.has(letterChar))
              return false;
            return this.recursiveMatch(map.get(letterChar), word, index + 1);
          } else {
            const map = node.next;
            const keys = map.keys();
            for (const key of keys)
              if (this.recursiveMatch(map.get(key), word, index + 1))
                return true;
            return false;
          }
      };

      /** 
       * Your WordDictionary object will be instantiated and called as such:
       * var obj = Object.create(WordDictionary).createNew()
       * obj.addWord(word)
       * var param_2 = obj.search(word)
       */
      return new WordDictionary();
    }

    // return new ArrayWordDictionary();
    return new MapWordDictionary();
  }

  // leetcode 677. 键值映射
  MapSum () {

    // 数组版
    function ArrayVersion () {
      var TrieNode = function (value) {
        this.value = value;
        this.next = new Array(26);
      }

      /**
       * Initialize your data structure here.
       */
      var MapSum = function() {
          this.root = new TrieNode(0);
      };

      /** 
       * @param {string} key 
       * @param {number} val
       * @return {void}
       */
      MapSum.prototype.insert = function(key, val) {
          this.__insert(this.root, key, val, 0);
      };
      MapSum.prototype.__insert = function(node, word, value, index) {
          if (index === word.length) {
            node.value = value;
            return;
          }

          const array = node.next;
          const i = word[index].charCodeAt(0) - 97;
          if (!array[i])
            array[i] = new TrieNode(0);
          this.__insert(array[i], word, value, index + 1);
      };

      /** 
       * @param {string} prefix
       * @return {number}
       */
      MapSum.prototype.sum = function(prefix) {
        // 先进行前缀匹配
        let cur = this.root;
        for (const c of prefix) {
          const index = c.charCodeAt(0) - 97;
          if (!cur.next[index])
            return 0;
          cur = cur.next[index];
        }

        // 前缀匹配成功之后 进行剩余单词的匹配 求和
        return this.__sum(cur)
      };

      MapSum.prototype.__sum = function(node) {
        let result = node.value || 0;

        for (const next of node.next) {
          if (!next)
            continue;
          result += this.__sum(next);
        }

        return result;
      };

      /** 
       * Your MapSum object will be instantiated and called as such:
       * var obj = Object.create(MapSum).createNew()
       * obj.insert(key,val)
       * var param_2 = obj.sum(prefix)
       */
      
      return new MapSum();
    }

    // 映射版
    function MapVersion () {
      var TrieNode = function (value) {
        this.value = value;
        this.next = new Map();
      }
      /**
       * Initialize your data structure here.
       */
      var MapSum = function() {
          this.root = new TrieNode();
      };

      /** 
       * @param {string} key 
       * @param {number} val
       * @return {void}
       */
      MapSum.prototype.insert = function(key, val) {
          let cur = this.root;

          for (const c of key) {
            const map = cur.next;
            if (!map.has(c))
              map.set(c, new TrieNode());
            cur = map.get(c);
          }

          cur.value = val;
      };


      /** 
       * @param {string} prefix
       * @return {number}
       */
      MapSum.prototype.sum = function(prefix) {
          // 先处理前缀部分
          let cur = this.root;

          for (const c of prefix) {
            const map = cur.next;
            if (!map.has(c))
              return 0;
            cur = map.get(c);
          }
          
          return this.__sum(cur);
      };
      MapSum.prototype.__sum = function(node) {
          let result = node.value || 0;

          const map = node.next;
          const keys = map.keys();
          for (const key of keys)
            result += this.__sum(map.get(key));

          return result;
      };



      /** 
       * Your MapSum object will be instantiated and called as such:
       * var obj = Object.create(MapSum).createNew()
       * obj.insert(key,val)
       * var param_2 = obj.sum(prefix)
       */
      return new MapSum();
    }

    // return new ArrayVersion();
    return new MapVersion();
  }

}

// Student
class Student {
  constructor (studentName, studentScore) {
    this.name = studentName;
    this.score = studentScore;
  }

  //@Override toString 2018-10-19-jwl
  toString () {
    let studentInfo = `Student(name: ${this.name}, score: ${this.score})`;
    return studentInfo;
  }
}

// 页面加载完毕
window.onload = function () {
  // 执行主函数
  new Main();
}
