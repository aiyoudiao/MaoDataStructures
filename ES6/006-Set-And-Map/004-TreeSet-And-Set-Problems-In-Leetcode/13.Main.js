// main 函数
class Main {
  constructor () {
    this.alterLine("leetcode 804.唯一摩尔斯密码词");
    let s = new Solution();
    let words = ["gin", "zen", "gig", "msg"];
    this.show(s.uniqueMorseRepresentations(words));
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
