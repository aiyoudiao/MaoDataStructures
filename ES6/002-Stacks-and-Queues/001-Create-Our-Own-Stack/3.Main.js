// main 函数
class Main {
  constructor () {
    this.alterLine("MyStack Area");

    let ms = new MyStack(10);
    for (let i = 1; i <= 10 ; i++) {
        ms.push(i);
        console.log(ms.toString());
    }

    console.log(ms.peek());
    this.show(ms.peek());

    while (!ms.isEmpty()) {
      console.log(ms.toString());
      ms.pop();
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
