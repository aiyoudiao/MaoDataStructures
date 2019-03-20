// main 函数
class Main {
  constructor () {
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
