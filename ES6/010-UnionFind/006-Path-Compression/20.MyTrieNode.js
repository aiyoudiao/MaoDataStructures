// 自定义字典树节点 TrieNode
class MyTrieNode {
  constructor (letterChar, isWord = false) {
    this.letterChar = letterChar;
    this.isWord = isWord; // 是否是单词
    this.next = new Map(); // 存储 字符所对应的节点的 字典映射
  }
}

