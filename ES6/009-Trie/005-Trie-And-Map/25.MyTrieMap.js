// 自定义字典映射 TrieMap
class MyTrieMap {
  constructor () {
    this.trie = new MyTrieUpgrade();
  }

  // 添加操作
  add (key, value) {
    this.trie.add(key, value);
  }

  // 查询操作
  get (key) {
    return this.trie.get(key);
  }

  // 删除操作
  remove (key) {
    return null;
  }

  // 查看key是否存在
  contains (key) {
    return this.trie.contains(key);
  }

  // 更新操作
  set (key, value) {
    this.trie.set(key, value);
  }

  // 获取映射Map中所有的key
  getKeys () {
    let items = this.trie.getPrefixAll("");
    return Object.keys(items);
  }

  // 获取映射Map中所有的value
  getValues () {
    let items = this.trie.getPrefixAll("");
    return Object.values(items);
  }

  // 获取映射Map中实际元素个数
  getSize () {
    return this.trie.getSize();
  }

  // 查看映射Map中是否为空
  isEmpty () {
    return this.trie.isEmpty();
  }
}

