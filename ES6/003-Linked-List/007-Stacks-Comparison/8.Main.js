// main 函数
class Main {
  constructor () {
    this.alterLine("Stacks Comparison Area");
    let myStack = new MyStack();
    let myLinkedListStack = new MyLinkedListStack();
    let performanceTest = new PerformanceTest();

    let myStackInfo = performanceTest.testStack(myStack, 100000);
    let myLinkedListStackInfo = performanceTest.testStack(myLinkedListStack, 100000);

    this.alterLine("MyStack Area");
    console.log(myStackInfo);
    this.show(myStackInfo);

    this.alterLine("MyLinkedListStack Area");
    console.log(myLinkedListStackInfo);
    this.show(myLinkedListStackInfo);
    
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
