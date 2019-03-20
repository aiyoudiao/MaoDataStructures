// 自定义字典树节点升级版 TrieNodeUpgrade
class MyTrieNodeUpgrade {
  constructor (letterChar, element, isWord = false) {
    this.letterChar = letterChar;
    this.element = element; // 升级后可以存储特殊数据
    this.isWord = isWord; // 是否是单词
    this.next = new Map(); // 存储 字符所对应的节点的 字典映射
  }
}

