// main 函数
class Main {
  constructor () {
    this.alterLine("MyLinkedListStack Area");
    let myLinkedListStack = new MyLinkedListStack();
    for (let i = 1; i <= 5 ; i++) {
      myLinkedListStack.push(i);
      console.log(myLinkedListStack.toString());
    }

    console.log(myLinkedListStack.peek());
    this.show(myLinkedListStack.peek());

    for (let i = 0; i < 5 ; i++) {
      console.log(myLinkedListStack.toString());
      myLinkedListStack.pop();
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
