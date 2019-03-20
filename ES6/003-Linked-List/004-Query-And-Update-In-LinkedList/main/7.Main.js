// main 函数
class Main {
  constructor () {

    // this.alterLine("MyStack Area");

    // let ms = new MyStack(10);
    // for (let i = 1; i <= 10 ; i++) {
    //     ms.push(i);
    //     console.log(ms.toString());
    // }

    // console.log(ms.peek());
    // this.show(ms.peek());

    // while (!ms.isEmpty()) {
    //   console.log(ms.toString());
    //   ms.pop();
    // }

    // this.alterLine("leetcode 20. 有效的括号");
    // let s = new Solution();
    // this.show(s.isValid("{ [ ( ) ] }"));
    // this.show(s.isValid(" [ ( ] ) "));

    // this.alterLine("MyQueue Area");
    // let mq = new MyQueue(10);
    // for (let i = 1; i <= 10 ; i++) {
    //     mq.enqueue(i);
    //     console.log(mq.toString());
    // }

    // console.log(mq.getFront());
    // this.show(mq.getFront());

    // while (!mq.isEmpty()) {
    //   console.log(mq.toString());
    //   mq.dequeue();
    // }
    
    // this.alterLine("MyLoopQueue Area");
    // let mlq = new MyQueue();
    // for (let i = 1; i <= 10 ; i++) {
    //     mlq.enqueue(i);
        // console.log(mlq.toString());
    // }

    // console.log(mlq.getFront());
    // this.show(mlq.getFront());

    // while (!mlq.isEmpty()) {
    //   console.log(mlq.toString());
    //   mlq.dequeue();
    // }

    // this.alterLine("Queues Comparison Area");
    // let mq = new MyQueue();
    // let mlq = new MyLoopQueue();
    // let performanceTest = new PerformanceTest();

    // let mqInfo = performanceTest.testQueue(mq, 10000);
    // let mlqInfo = performanceTest.testQueue(mlq, 10000);

    // this.alterLine("MyQueue Area");
    // console.log(mqInfo);
    // this.show(mqInfo);

    // this.alterLine("MyLoopQueue Area");
    // console.log(mlqInfo);
    // this.show(mlqInfo);

    let mylinkedList = new MyLinkedList();

    for (let i = 1; i <= 5 ; i++) {
      mylinkedList.addFirst(i);
      console.log(mylinkedList.toString());
    }
    mylinkedList.insert(2, 88888);
    console.log(mylinkedList.toString());
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