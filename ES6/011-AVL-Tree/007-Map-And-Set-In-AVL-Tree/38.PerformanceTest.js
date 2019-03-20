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

  // 对比并查集
  testUnionFind (unionFind, openCount, primaryArray, secondaryArray) {

    const size = unionFind.getSize();
    const random = Math.random;

    return this.testCustomFn(function () {
      // 合并操作
      for (var i = 0; i < openCount; i++) {
        let primaryId = primaryArray[i];
        let secondaryId = secondaryArray[i];

        unionFind.unionElements(primaryId, secondaryId);
      }

      // 查询连接操作
      for (var i = 0; i < openCount; i++) {
        let primaryRandomId = Math.floor(random() * size);
        let secondaryRandomId = Math.floor(random() * size);

        unionFind.unionElements(primaryRandomId, secondaryRandomId);
      }

    });
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

