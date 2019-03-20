// 自定义字典集合 TrieSet
class MyTrieSet {
  constructor () {
    this.trie = new MyTrie();
  }

  // 添加操作
  add (word) {
    this.trie.add(word);
  }

  // 删除操作 待实现
  remove (word) {
    return this.trie.remove(word);
  }

  // 查单词是否存在
  contains (word) {
    return this.trie.contains(word);
  }

  // 获取实际元素个数
  getSize () {
    return this.trie.getSize();
  }

  // 获取当前集合是否为空
  isEmpty () {
    return this.trie.isEmpty();
  }
}

