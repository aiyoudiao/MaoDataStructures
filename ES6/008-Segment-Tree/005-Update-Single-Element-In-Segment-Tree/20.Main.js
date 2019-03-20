// main 函数
class Main {
  constructor () {
    this.alterLine("leetcode 307. 区域和检索 - 数组可修改");
    let s = new Solution();
    let nums = [1, 3, 5];
    let numArray = s.NumArray2(nums);

    console.log(numArray.sumRange(0, 2));
    this.show(numArray.sumRange(0, 2));
    numArray.update(1, 2); 
    console.log(numArray.sumRange(0, 2));
    this.show(numArray.sumRange(0, 2));

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
