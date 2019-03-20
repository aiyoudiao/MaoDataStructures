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
      throw new Error("get error. index < 0 or index >= size.");
    }
    return this.data[index];
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
    this.data[this.size - 1] = undefined;
    this.size --;

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

