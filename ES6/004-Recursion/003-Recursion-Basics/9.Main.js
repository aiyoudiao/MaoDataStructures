// main 函数
class Main {
  constructor () {
    this.alterLine("递归求和");
    let calc = new Calc();
    let arr = [1,2,3,4];
    
    let arrInfo = `[`;
    for (var i = 0; i < arr.length - 1; i++) {
      arrInfo += `${arr[i]},`
    }
    arrInfo += `${arr[arr.length - 1]}`;
    arrInfo += `]`;
    document.body.innerHTML += `${arrInfo}<br /><br />`;
    this.show (calc.sum(arr));
    this.show (calc.tailSum(arr));

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
