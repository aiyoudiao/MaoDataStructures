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

  // 在指定索引处插入元素
  insert (index, element) {
    // 先判断数组是否已满
    if (this.size == this.getCapacity()) {
      throw new Error("add error. Array is full.");
    }

    // 然后判断索引是否符合要求
    if (index < 0 || index > this.size) {
      throw new Error("insert error. require  index < 0 or index > size");
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
      throw new Error("add error. Array is full.");
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
      throw new Error("get error. index < 0 or index >= size");
    }
    return this.data[index];
  }

  // set
  set (index, newElement) {
    // 不能修改没有存放元素的位置
    if (index < 0 || index >= this.size) {
      throw new Error("set error. index < 0 or index >= size");
    }
    this.data[index] = newElement;
  }

  // @Override toString 2018-10-17-jwl
  toString () {
    let arrInfo = `Array: size = ${this.getSize()}，capacity = ${this.getCapacity()}，\n`;
    arrInfo += `data = [`;
    for (var i = 0; i < this.size - 1; i++) {
      arrInfo += `${this.data[i]}, `;
    }
    arrInfo += `${this.data[this.size - 1]}`;
    arrInfo += `]`;

    // 在页面上展示
    document.body.innerHTML += `${arrInfo}<br /><br /> `;

    return arrInfo;
  }
}

