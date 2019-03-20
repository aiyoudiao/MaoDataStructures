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

  // 向Trie中添加一个新的单词word 递归辅助函数
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
    recursiveAddFn(map.get(letterChar), word, index + 1);
  }
}

