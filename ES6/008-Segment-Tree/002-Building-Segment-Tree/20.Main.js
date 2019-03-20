// main 函数
class Main {
  constructor () {
    this.alterLine("MySegmentTree Area");
    // 初始数据
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    // 初始化线段树，将初始数据和融合器传入进去
    let mySegmentTree = new MySegmentTree(nums);
    // 指定线段树的融合器
    mySegmentTree.updateMerge((a, b) => a + b);

    // 输出
    console.log(mySegmentTree.toString());
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
