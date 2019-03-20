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

