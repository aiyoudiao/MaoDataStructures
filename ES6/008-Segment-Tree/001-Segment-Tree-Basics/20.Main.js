// main 函数
class Main {
  constructor () {
    this.alterLine("leetcode 347. 前K个高频元素");
    let s = new Solution();

    let arr = [5,-3,9,1,7,7,9,10,2,2,10,10,3,-1,3,7,-9,-1,3,3];
    console.log(arr);
    this.show(arr);

    let result = s.topKFrequent(arr, 3);
    console.log(result);
    this.show(result);

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
