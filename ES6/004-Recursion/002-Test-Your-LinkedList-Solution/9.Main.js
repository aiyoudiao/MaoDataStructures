// main 函数
class Main {
  constructor () {
    this.alterLine("leetcode 203. 删除指定元素的所有节点");
    let s = new Solution();

    let arr = [1,2,3,5,1,2,1,3,5,3,5,6,3,1,5,1,3];
    let node = new ListNode(null);
    node.appendToLinkedListNode(arr);

    console.log(node.toString());
    let result = s.removeElements(node, 1);
    console.log(result.toString());

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
