// main 函数
class Main {
  constructor () {
    this.alterLine("MyLinkedListQueue Area");
    let myLinkedListQueue = new MyLinkedListQueue();
    for (let i = 1; i <= 5 ; i++) {
      myLinkedListQueue.enqueue(i);
      console.log(myLinkedListQueue.toString());
    }

    console.log(myLinkedListQueue.getFront());
    this.show(myLinkedListQueue.getFront());

    for (let i = 0; i < 5 ; i++) {
      console.log(myLinkedListQueue.toString());
      myLinkedListQueue.dequeue();
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
