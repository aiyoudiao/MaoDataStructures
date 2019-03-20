// main 函数
class Main {
  constructor () {
    this.alterLine("leetcode 208. 实现 Trie (前缀树)");

    let trie = new MyTrie();
    this.show(trie.add("apple") + "");
    this.show(trie.contains("apple") + " // 返回 true");   // 返回 true
    this.show(trie.contains("app") + "// 返回 false");     // 返回 false
    this.show(trie.isPrefix("app") + "// 返回 true"); // 返回 true
    this.show(trie.add("app") + "");   
    this.show(trie.contains("app") + "// 返回 true");     // 返回 true

    this.alterLine("leetcode 211. 添加与搜索单词 - 数据结构设计");

    trie = new MyTrie();
    this.show(trie.add("bad") + "");
    this.show(trie.add("dad") + "");
    this.show(trie.add("mad") + "");
    this.show(trie.regexpSearch("pad") + "-> false" );//-> false
    this.show(trie.regexpSearch("bad") + "-> true" );//-> true
    this.show(trie.regexpSearch(".ad") + "-> true" );//-> true
    this.show(trie.regexpSearch("b..") + "-> true" );//-> true
    this.show(trie.regexpSearch("b....") + "-> false" );//-> false
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
