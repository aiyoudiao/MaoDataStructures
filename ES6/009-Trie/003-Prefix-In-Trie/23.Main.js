// main 函数
class Main {
  constructor () {
    this.alterLine("leetcode 208.实现 Trie (前缀树)");

    let s = new Solution();
    let trie = s.Trie();
    this.show(trie.insert("apple") + "");
    this.show(trie.search("apple") + " // 返回 true");   // 返回 true
    this.show(trie.search("app") + "// 返回 false");     // 返回 false
    this.show(trie.startsWith("app") + "// 返回 true"); // 返回 true
    this.show(trie.insert("app") + "");   
    this.show(trie.search("app") + "// 返回 true");     // 返回 true
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
