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

