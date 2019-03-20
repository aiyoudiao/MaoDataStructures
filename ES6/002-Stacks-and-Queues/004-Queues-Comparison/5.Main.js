// main 函数
class Main {
  constructor () {
    this.alterLine("Queues Comparison Area");
    let mq = new MyQueue();
    let mlq = new MyLoopQueue();
    let performanceTest = new PerformanceTest();

    let mqInfo = performanceTest.testQueue(mq, 10000);
    let mlqInfo = performanceTest.testQueue(mlq, 10000);

    this.alterLine("MyQueue Area");
    console.log(mqInfo);
    this.show(mqInfo);

    this.alterLine("MyLoopQueue Area");
    console.log(mlqInfo);
    this.show(mlqInfo);

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
