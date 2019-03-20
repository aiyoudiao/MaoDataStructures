// main 函数
class Main {
  constructor () {
    let ma = new MyArray(20);
    for (let i = 1; i <= 10 ; i++) {
        ma.add(i);
    }

    console.log(ma.toString());

    ma.insert(1, 200);
    console.log(ma.toString());

    ma.unshift(-1);
    console.log(ma.toString());

    ma.push(9999);
    console.log(ma.toString());

    ma.set(5, 8888);
    console.log(ma.get(5));
    this.show(ma.get(5));
  }

  // 将内容显示在页面上
  show (content) {
    document.body.innerHTML += `${content}<br /><br />`;
  }
}

window.onload = function () {
  // 执行主函数
  new Main();
}
