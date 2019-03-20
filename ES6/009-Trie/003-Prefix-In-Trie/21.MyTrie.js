// 自定义字典树 Trie
class MyTrie {
  constructor () {
    this.root = new MyTrieNode();
    this.size = 0;
  }

  // 向Trie中添加一个新的单词word 
  add (word) {
    // 指定游标
    let cur = this.root;
    // 遍历出当前单词的每一个字符
    for(const c of word) {
      // 下一个字符所对应的映射是否为空
      if (!cur.next.has(c))
        cur.next.set(c, new MyTrieNode(c));
      // 切换到下一个节点
      cur = cur.next.get(c)
    }

    // 如果当前这个单词是一个新的单词
    if (!cur.isWord) {
      // 当前这个字符是这个单词的结尾
      cur.isWord = true;
      this.size ++;
    }
  }

  // 向Trie中添加一个新的单词word 递归算法
  recursiveAdd (word) {
    this.recursiveAddFn(this.root, word, 0);
  }

  // 向Trie中添加一个新的单词word 递归辅助函数 -
  recursiveAddFn (node, word, index) {
    // 解决基本的问题，因为已经到底了
    if (index === word.length) {
      if (!node.isWord) {
        node.isWord = true;
        this.size ++;
      }
      return;
    }

    const map = node.next; // 获取节点的next 也就是字符对应的映射
    const letterChar = word[index]; // 获取当前位置对应的单词中的字符
    // 下一个字符所对应的映射是否为空 为空就添加
    if (!map.has(letterChar))
      map.set(letterChar, new MyTrieNode(letterChar));
    this.recursiveAddFn(map.get(letterChar), word, index + 1);
  }

  // 查询单词word是否在Trie中
  contains (word) {
    // 指定游标
    let cur = this.root;

    // 遍历出当前单词的每一个字符
    for (const c of word) {
      // 获取当前这个字符所对应的节点
      const node = cur.next.get(c);
      // 这个节点不存在，那么就说明就没有存储这个字符
      if ( node === null)
        return false;
      // 游标切换到这个节点
      cur = node;
    }

    // 单词遍历完毕
    // 返回最后一个字符是否是一个单词的结尾
    return cur.isWord;
  }

  // 查询单词word是否在Trie中 递归算法
  recursiveContains (word) {
    return this.recursiveContainsFn(this.root, word, 0);
  }

  // 查询单词word是否在Trie中 递归赋值函数 -
  recursiveContainsFn (node, word, index) {
    // 解决基本的问题，因为已经到底了
    if (index === word.length)
      return node.isWord;

    const map = node.next; // 获取节点的next 也就是字符对应的映射
    const letterChar = word[index]; // 获取当前位置对应的单词中的字符
    // 下一个字符所对应的映射是否为空 为空那么就说明这个单词没有进行存储
    if (!map.has(letterChar))
      return false;
    return this.recursiveContainsFn(map.get(letterChar), word, index + 1);
  }

  // 查询在Trie中是否有单词以 prefix 为前缀
  isPrefix (prefix) {
    // 指定游标
    let cur = this.root;

    // 遍历出当前单词的每一个字符
    for (const c of prefix) {
      // 获取当前这个字符所对应的节点
      const node = cur.next.get(c);
      // 这个节点不存在，那么就说明就没有存储这个字符
      if ( node === null)
        return false;
      // 游标切换到这个节点
      cur = node;
    }

    // 前缀遍历完毕 说明这个前缀有单词与之匹配
    return true;
  }

  // 获取字典树中存储的单词数量
  getSize () {
    return this.size;
  }

  // 获取字典树中是否为空
  isEmpty () {
    return this.size === 0;
  }
}

