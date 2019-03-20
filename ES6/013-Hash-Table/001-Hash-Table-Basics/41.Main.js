// main 函数
class Main {
  constructor() {
    var s = 'leetcode';
    this.show(new Solution().firstUniqChar(s) + ' =====> 返回 0.');

    var s = 'loveleetcode';
    this.show(new Solution().firstUniqChar(s) + ' =====> 返回 2.');
  }

  // 将内容显示在页面上
  show(content) {
    document.body.innerHTML += `${content}<br /><br />`;
  }

  // 展示分割线
  alterLine(title) {
    let line = `--------------------${title}----------------------`;
    console.log(line);
    document.body.innerHTML += `${line}<br /><br />`;
  }
}

// 页面加载完毕
window.onload = function() {
  // 执行主函数
  new Main();
};
