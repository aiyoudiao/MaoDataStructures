// main 函数
class Main {
  constructor () {
    this.alterLine("Set Comparison Area");
    let myLinkedListSet = new MyLinkedListSet();
    let myBinarySearchTreeSet = new MyBinarySearchTreeSet();
    let performanceTest = new PerformanceTest();

    let myLinkedListSetInfo = performanceTest.testSet(myLinkedListSet, 5000);
    let myBinarySearchTreeSetInfo = performanceTest.testSet(myBinarySearchTreeSet, 5000);

    this.alterLine("MyLinkedListSet Area");
    console.log(myLinkedListSetInfo);
    this.show(myLinkedListSetInfo);

    this.alterLine("MyBinarySearchTreeSet Area");
    console.log(myBinarySearchTreeSetInfo);
    this.show(myBinarySearchTreeSetInfo);
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
