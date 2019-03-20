// main 函数
class Main {
  constructor () {
    this.alterLine("MaxHeap Comparison Area");
    const n = 1000000;

    const maxHeapIsHeapify = new MyMaxHeap();
    const maxHeapNotHeapify = new MyMaxHeap();
    let performanceTest1 = new PerformanceTest();

    const random = Math.random;
    let arr = [];
    let arr1 = [];

    // 循环添加随机数的值
    for (let i = 0; i < n; i++) {
      arr.push(random() * n);
      arr1.push(arr[i]);
    }

    this.alterLine("MaxHeap Is Heapify Area");
    const maxHeapIsHeapifyInfo = performanceTest1.testHeap(maxHeapIsHeapify, arr, true);
    console.log(maxHeapIsHeapifyInfo);
    this.show(maxHeapIsHeapifyInfo);

    this.alterLine("MaxHeap Not Heapify Area");
    const maxHeapNotHeapifyInfo = performanceTest1.testHeap(maxHeapNotHeapify, arr1, false);
    console.log(maxHeapNotHeapifyInfo);
    this.show(maxHeapNotHeapifyInfo);

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

// 页面加载完毕
window.onload = function () {
  // 执行主函数
  new Main();
}
