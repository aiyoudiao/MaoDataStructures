// 输出
// 定义数组
// 定义数组
// 遍历输出
// 修改数组中某个元素
// foreach 遍历数组
class MyArray {
  // 构造函数，传入数组的容量capacity构造Array 默认数组的容量capacity=10
  constructor (capacity = 10) {
    this.data = new Array(10);
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

}
