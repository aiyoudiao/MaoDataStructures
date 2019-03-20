// main 函数
class Main {
  constructor () {
    this.alterLine("MyLoopQueue Area");
    let mlq = new MyQueue(10);
    for (let i = 1; i <= 10 ; i++) {
        mlq.enqueue(i);
        console.log(mlq.toString());
    }

    console.log(mlq.getFront());
    this.show(mlq.getFront());

    while (!mlq.isEmpty()) {
      console.log(mlq.toString());
      mlq.dequeue();
    }

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
