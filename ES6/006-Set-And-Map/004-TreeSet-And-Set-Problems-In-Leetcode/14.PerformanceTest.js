// 性能测试
class PerformanceTest {
  constructor () {}

  // 对比都列
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
}

