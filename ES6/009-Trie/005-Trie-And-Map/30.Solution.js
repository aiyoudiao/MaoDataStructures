// 答题
class Solution {
  // leetcode 20. 有效的括号
  isValid(s) {
    /**
     * @param {string} s
     * @return {boolean}
     */
    var isValid = function(s) {
      let stack = [];

      // 以遍历的方式进行匹配操作
      for (let i = 0; i < s.length; i++) {
        // 是否是正括号
        switch (s[i]) {
          case '{':
          case '[':
          case '(':
            stack.push(s[i]);
            break;
          default:
            break;
        }
        // 是否是反括号
        switch (s[i]) {
          case '}':
            if (stack.length === 0 || stack.pop() !== '{') {
              console.log('valid error. not parentheses. in');
              return false;
            }
            break;
          case ']':
            if (stack.length === 0 || stack.pop() !== '[') {
              console.log('valid error. not parentheses. in');
              return false;
            }
            break;
          case ')':
            if (stack.length === 0 || stack.pop() !== '(') {
              console.log('valid error. not parentheses. in');
              return false;
            }
            break;
          default:
            break;
        }
      }

      // 是否全部匹配成功
      if (stack.length === 0) {
        return true;
      } else {
        console.log('valid error. not parentheses. out');
        return false;
      }
    };

    return isValid(s);
  }

  // leetcode 203. 移除链表元素
  removeElements(head, val) {
    /**
     * Definition for singly-linked list.
     * function ListNode(val) {
     *     this.val = val;
     *     this.next = null;
     * }
     */
    /**
     * @param {ListNode} head
     * @param {number} val
     * @return {ListNode}
     */
    var removeElements = function(head, val) {
      // 对头步进行特殊处理
      while (head !== null && head.val === val) {
        head = head.next;
      }

      // 处理后的头部如果为null 那直接返回
      if (head === null) {
        return null;
      }

      // 因为头部已经做了特殊处理， head即不为null 并且 head.val不等于null
      // 那么可以直接从 head的下一个节点开始判断。
      let prev = head;
      while (prev.next !== null) {
        if (prev.next.val === val) {
          let delNode = prev.next;
          prev.next = delNode.next;
          delNode = null;
        } else {
          prev = prev.next;
        }
      }

      return head;
    };

    var removeElements = function(head, val) {
      if (head === null) {
        return null;
      }

      let dummyHead = new ListNode(0);
      dummyHead.next = head;
      let cur = dummyHead;
      while (cur.next !== null) {
        if (cur.next.val === val) {
          cur.next = cur.next.next;
        } else {
          cur = cur.next;
        }
      }
      return dummyHead.next;
    };

    // 递归求解三种方式
    var removeElements = function(head, val) {
      // 解决最基本的问题
      if (head === null) {
        return null;
      }

      // 第一种解决方式
      //   let node = removeElements(head.next, val);

      //   if (head.val === val) {
      //     head = node;
      //   } else {
      //     head.next = node;
      //   }

      //   return head;

      // 第二种解决方式
      // if (head.val === val) {
      //   head = removeElements(head.next, val);
      // } else {
      //   head.next = removeElements(head.next, val);
      // }
      // return head;

      // 第三种方式
      head.next = removeElements(head.next, val);
      if (head.val === val) {
        return head.next;
      } else {
        return head;
      }
    };

    // 尾递归的方式 失败 没有到达那个程度
    // var removeElements = function(head, val, node = null) {
    //   if (head === null) {
    //     return node;
    //   }

    //   return removeElements(head.next, val , node = head);

    // }

    // 深入理解递归过程
    var removeElements = function(head, val, depth = 0) {
      // 首次输出 开始调用函数
      let depthString = generateDepathString(depth);
      let info = depthString + 'Call: remove ' + val + ' in ' + head;
      show(info);

      if (head === null) {
        // 第二次输出  解决最基本的问题时
        info = depthString + 'Return ：' + head;
        show(info);

        return null;
      }

      let result = removeElements(head.next, val, depth + 1);

      // 第三次输出 将原问题分解为小问题
      info = depthString + 'After： remove ' + val + ' ：' + result;
      show(info);

      let ret = null;
      if (head.val === val) {
        ret = result;
      } else {
        head.next = result;
        ret = head;
      }

      // 第四次输出 求出小问题的解
      info = depthString + 'Return ：' + ret;
      show(info);

      return ret;
    };

    // 辅助函数 生成递归深度字符串
    function generateDepathString(depth) {
      let arrInfo = ``;
      for (var i = 0; i < depth; i++) {
        arrInfo += `-- `; // -- 表示深度，--相同则代表在同一递归深度
      }
      return arrInfo;
    }

    // 辅助函数 输出内容 到页面和控制台上
    function show(content) {
      document.body.innerHTML += `${content}<br /><br />`;
      console.log(content);
    }

    return removeElements(head, val);
  }

  // leetcode 804. 唯一摩尔斯密码词
  uniqueMorseRepresentations(words) {
    /**
     * @param {string[]} words
     * @return {number}
     * 使用自己的二分搜索树来实现
     */
    var uniqueMorseRepresentations = function(words) {
      // 摩斯码
      const codes = [
        '.-',
        '-...',
        '-.-.',
        '-..',
        '.',
        '..-.',
        '--.',
        '....',
        '..',
        '.---',
        '-.-',
        '.-..',
        '--',
        '-.',
        '---',
        '.--.',
        '--.-',
        '.-.',
        '...',
        '-',
        '..-',
        '...-',
        '.--',
        '-..-',
        '-.--',
        '--..'
      ];

      const myBinarySearchTreeSet = new MyBinarySearchTreeSet();
      let content = '';
      // 获取起始字符的aceii码，
      // 从而可以求出某个单词的每一个字符在字母表中占的位置索引，
      // 根据这些位置索引就可以在摩斯表中找到相应的摩斯码，
      // 一个单词就是一组摩斯码，然后使用set添加，就可以直接实现去重的操作了
      const start = 'a'.charCodeAt(0);
      for (const word of words) {
        for (const w of word) content += codes[w.charCodeAt(0) - start];

        myBinarySearchTreeSet.add(content);
        content = '';
      }

      return myBinarySearchTreeSet.getSize();
    };

    /**
     * @param {string[]} words
     * @return {number}
     * 使用系统内置的Set集合类
     */
    var uniqueMorseRepresentations = function(words) {
      // 摩斯码
      const codes = [
        '.-',
        '-...',
        '-.-.',
        '-..',
        '.',
        '..-.',
        '--.',
        '....',
        '..',
        '.---',
        '-.-',
        '.-..',
        '--',
        '-.',
        '---',
        '.--.',
        '--.-',
        '.-.',
        '...',
        '-',
        '..-',
        '...-',
        '.--',
        '-..-',
        '-.--',
        '--..'
      ];

      const set = new Set();
      let content = '';
      // 获取起始字符的aceii码，
      // 从而可以求出某个单词的每一个字符在字母表中占的位置索引，
      // 根据这些位置索引就可以在摩斯表中找到相应的摩斯码，
      // 一个单词就是一组摩斯码，然后使用set添加，就可以直接实现去重的操作了
      const start = 'a'.charCodeAt(0);
      for (const word of words) {
        for (const w of word) content += codes[w.charCodeAt(0) - start];

        set.add(content);
        content = '';
      }

      return set.size;
    };

    return uniqueMorseRepresentations(words);
  }

  // leetcode 349. 两个数组的交集
  intersection(nums1, nums2) {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    var intersection = function(nums1, nums2) {
      let set = new Set();
      let arr = [];

      for (const num of nums1) set.add(num);

      for (const num of nums2) {
        if (set.has(num)) {
          arr.push(num);
          set.delete(num);
        }
      }

      return arr;
    };

    return intersection(nums1, nums2);
  }

  // leetcode 350.两个数组的交集 II
  intersect(nums1, nums2) {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    var intersect = function(nums1, nums2) {
      let map = new Map();
      let arr = [];

      for (const num of nums1) {
        if (map.has(num)) map.set(num, map.get(num) + 1);
        else map.set(num, 1);
      }

      for (const num of nums2) {
        if (map.has(num)) {
          arr.push(num);
          let result = map.get(num) - 1;
          map.set(num, result);

          if (result === 0) map.delete(num);
        }
      }

      return arr;
    };

    return intersect(nums1, nums2);
  }

  // leetcode 347. 前K个高频元素
  topKFrequent(nums, k) {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     * 原版
     */
    var topKFrequent = function(nums, k) {
      let map = new Map();
      // 统计 数组中每一个元素出现频率
      for (const num of nums) {
        if (map.has(num)) map.set(num, map.get(num) + 1);
        else map.set(num, 1);
      }

      // 优先队列：使用的时候指定优先级比较的方式
      let queue = new MyPriorityQueue();
      // 变更优先队列中的定义优先级的方法
      queue.updateCompare((elementA, elementB) => {
        // 原的比较算法是 值越大 优先级越大
        // 现在改为 值越小 优先级越大
        if (elementA.value < elementB.value) return 1;
        else if (elementA.value > elementB.value) return -1;
        else return 0;
      });

      for (const key of map.keys()) {
        if (queue.getSize() < k)
          queue.enqueue({ key: key, value: map.get(key) });
        else if (map.get(key) > queue.getFront().value) {
          queue.replaceFront({ key: key, value: map.get(key) });
          // queue.dequeue();
          // queue.enqueue({"key": key, "value": map.get(key)});
        }
      }

      let result = [];
      for (var i = 0; i < k; i++) {
        result.push(queue.dequeue().key);
      }
      return result;
    };

    // 精简版
    var topKFrequent = function(nums, k) {
      let map = new Map();
      // 统计 数组中每一个元素出现频率
      for (const num of nums) {
        if (map.has(num)) map.set(num, map.get(num) + 1);
        else map.set(num, 1);
      }

      // 优先队列：使用的时候指定优先级比较的方式
      let queue = new MyPriorityQueue();
      // 变更优先队列中的定义优先级的方法
      queue.updateCompare((keyA, keyB) => {
        // 原的比较算法是 值越大 优先级越大
        // 现在改为 值越小 优先级越大
        if (map.get(keyA) < map.get(keyB)) return 1;
        else if (map.get(keyA) > map.get(keyB)) return -1;
        else return 0;
      });

      for (const key of map.keys()) {
        if (queue.getSize() < k) queue.enqueue(key);
        else if (map.get(key) > map.get(queue.getFront())) {
          queue.replaceFront(key);
        }
      }

      let result = [];
      for (var i = 0; i < k; i++) {
        result.push(queue.dequeue());
      }
      return result;
    };

    return topKFrequent(nums, k);
  }

  // leetcode 303. 区域和检索-数组不可变
  NumArray(nums) {
    /**
     * @param {number[]} nums
     * 处理方式一：对原数组进行预处理操作
     */
    var NumArray = function(nums) {
      if (nums.length > 0) {
        this.data = new Array(nums.length + 1);
        this.data[0] = 0;
        for (var i = 0; i < nums.length; i++) {
          this.data[i + 1] = this.data[i] + nums[i];
        }
      }
    };

    /**
     * @param {number} i
     * @param {number} j
     * @return {number}
     */
    NumArray.prototype.sumRange = function(i, j) {
      return this.data[j + 1] - this.data[i];
    };

    /**
     * Your NumArray object will be instantiated and called as such:
     * var obj = Object.create(NumArray).createNew(nums)
     * var param_1 = obj.sumRange(i,j)
     */

    /**
     * @param {number[]} nums
     * 处理方式二：使用线段树
     */
    var NumArray = function(nums) {
      if (nums.length > 0) {
        this.mySegmentTree = new MySegmentTree(nums);
      }
    };

    /**
     * @param {number} i
     * @param {number} j
     * @return {number}
     */
    NumArray.prototype.sumRange = function(i, j) {
      return this.mySegmentTree.query(i, j);
    };

    return new NumArray(nums);
  }

  // leetcode 307. 区域和检索 - 数组可修改
  NumArray2(nums) {
    /**
     * @param {number[]} nums
     * 方式一：对原数组进行预处理操作
     */
    var NumArray = function(nums) {
      // 克隆一份原数组
      this.data = new Array(nums.length);
      for (var i = 0; i < nums.length; i++) {
        this.data[i] = nums[i];
      }

      if (nums.length > 0) {
        this.sum = new Array(nums.length + 1);
        this.sum[0] = 0;
        for (let i = 0; i < nums.length; i++)
          this.sum[i + 1] = this.sum[i] + nums[i];
      }
    };

    /**
     * @param {number} i
     * @param {number} val
     * @return {void}
     */
    NumArray.prototype.update = function(i, val) {
      this.data[i] = val;

      for (let j = 0; j < this.data.length; j++)
        this.sum[j + 1] = this.sum[j] + this.data[j];
    };

    /**
     * @param {number} i
     * @param {number} j
     * @return {number}
     */
    NumArray.prototype.sumRange = function(i, j) {
      return this.sum[j + 1] - this.sum[i];
    };

    /**
     * Your NumArray object will be instantiated and called as such:
     * var obj = Object.create(NumArray).createNew(nums)
     * obj.update(i,val)
     * var param_2 = obj.sumRange(i,j)
     */

    /**
     * @param {number[]} nums
     * 方式二：对原数组进行预处理操作
     */
    var NumArray = function(nums) {
      this.tree = new MySegmentTree(nums);
    };

    /**
     * @param {number} i
     * @param {number} val
     * @return {void}
     */
    NumArray.prototype.update = function(i, val) {
      this.tree.set(i, val);
    };

    /**
     * @param {number} i
     * @param {number} j
     * @return {number}
     */
    NumArray.prototype.sumRange = function(i, j) {
      return this.tree.query(i, j);
    };

    return new NumArray(nums);
  }

  // leetcode 208.实现 Trie (前缀树)
  Trie() {
    // 数组版的Trie 静态Trie
    function ArrayTrie() {
      // TrieNode
      var TrieNode = function(isWord = false) {
        this.isWord = isWord;
        this.next = new Array(26);
      };

      /**
       * Initialize your data structure here.
       */
      var Trie = function() {
        this.root = new TrieNode();
      };

      /**
       * Inserts a word into the trie.
       * @param {string} word
       * @return {void}
       */
      Trie.prototype.insert = function(word) {
        // 指定游标
        let cur = this.root;

        for (const c of word) {
          const index = c.charCodeAt(0) - 97;
          const array = cur.next;
          if (array[index] === null || array[index] === undefined)
            array[index] = new TrieNode();
          cur = array[index];
        }

        if (!cur.isWord) cur.isWord = true;
      };

      /**
       * Returns if the word is in the trie.
       * @param {string} word
       * @return {boolean}
       */
      Trie.prototype.search = function(word) {
        // 指定游标
        let cur = this.root;

        for (const c of word) {
          const index = c.charCodeAt(0) - 97;
          const array = cur.next;
          if (array[index] === null || array[index] === undefined) return false;
          cur = array[index];
        }

        return cur.isWord;
      };

      /**
       * Returns if there is any word in the trie that starts with the given prefix.
       * @param {string} prefix
       * @return {boolean}
       */
      Trie.prototype.startsWith = function(prefix) {
        // 指定游标
        let cur = this.root;

        for (const c of prefix) {
          const index = c.charCodeAt(0) - 97;
          const array = cur.next;
          if (array[index] === null || array[index] === undefined) return false;
          cur = array[index];
        }

        return true;
      };

      /**
       * Your Trie object will be instantiated and called as such:
       * var obj = Object.create(Trie).createNew()
       * obj.insert(word)
       * var param_2 = obj.search(word)
       * var param_3 = obj.startsWith(prefix)
       */

      return new Trie();
    }

    // 映射版的Trie 动态Trie
    function MapTrie() {
      // TrieNode
      var TrieNode = function(isWord = false) {
        this.isWord = isWord;
        this.next = new Map();
      };
      /**
       * Initialize your data structure here.
       */
      var Trie = function() {
        this.root = new TrieNode();
      };

      /**
       * Inserts a word into the trie.
       * @param {string} word
       * @return {void}
       */
      Trie.prototype.insert = function(word) {
        // 指定游标
        let cur = this.root;

        for (const c of word) {
          const map = cur.next;
          if (!map.has(c)) map.set(c, new TrieNode());
          cur = map.get(c);
        }

        if (!cur.isWord) cur.isWord = true;
      };

      /**
       * Returns if the word is in the trie.
       * @param {string} word
       * @return {boolean}
       */
      Trie.prototype.search = function(word) {
        // 指定游标
        let cur = this.root;

        for (const c of word) {
          const map = cur.next;
          if (!map.has(c)) return false;
          cur = map.get(c);
        }

        return cur.isWord;
      };

      /**
       * Returns if there is any word in the trie that starts with the given prefix.
       * @param {string} prefix
       * @return {boolean}
       */
      Trie.prototype.startsWith = function(prefix) {
        // 指定游标
        let cur = this.root;

        for (const c of prefix) {
          const map = cur.next;
          if (!map.has(c)) return false;
          cur = map.get(c);
        }

        return true;
      };

      /**
       * Your Trie object will be instantiated and called as such:
       * var obj = Object.create(Trie).createNew()
       * obj.insert(word)
       * var param_2 = obj.search(word)
       * var param_3 = obj.startsWith(prefix)
       */

      return new Trie();
    }

    // return new ArrayTrie();
    return new MapTrie();
  }

  // leetcode 211.添加与搜索单词 - 数据结构设计
  WordDictionary() {
    // 数组版
    function ArrayWordDictionary() {
      // TrieNode
      var TrieNode = function() {
        this.isWord = false;
        this.next = new Array(26);
      };

      /**
       * Initialize your data structure here.
       */
      var WordDictionary = function() {
        this.root = new TrieNode();
      };

      /**
       * Adds a word into the data structure.
       * @param {string} word
       * @return {void}
       */
      WordDictionary.prototype.addWord = function(word) {
        // 指定游标
        let cur = this.root;

        for (const c of word) {
          const index = c.charCodeAt(0) - 97;
          const array = cur.next;
          if (!array[index]) array[index] = new TrieNode();
          cur = array[index];
        }

        if (!cur.isWord) cur.isWord = true;
      };

      /**
       * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
       * @param {string} word
       * @return {boolean}
       */
      WordDictionary.prototype.search = function(word) {
        return this.recursiveMatch(this.root, word, 0);
      };

      // 递归搜索
      WordDictionary.prototype.recursiveMatch = function(node, word, index) {
        if (index === word.length) return node.isWord;

        const letterChar = word[index];

        if (letterChar !== '.') {
          const i = letterChar.charCodeAt(0) - 97;

          if (!node.next[i]) return false;
          return this.recursiveMatch(node.next[i], word, index + 1);
        } else {
          for (const next of node.next) {
            if (next === undefined) continue;
            if (this.recursiveMatch(next, word, index + 1)) return true;
          }
          return false;
        }
      };

      /**
       * Your WordDictionary object will be instantiated and called as such:
       * var obj = Object.create(WordDictionary).createNew()
       * obj.addWord(word)
       * var param_2 = obj.search(word)
       */
      return new WordDictionary();
    }

    // 映射版
    function MapWordDictionary() {
      // TrieNode
      var TrieNode = function(isWord = false) {
        this.isWord = isWord;
        this.next = new Map();
      };
      /**
       * Initialize your data structure here.
       */
      var WordDictionary = function() {
        this.root = new TrieNode();
      };

      /**
       * Adds a word into the data structure.
       * @param {string} word
       * @return {void}
       */
      WordDictionary.prototype.addWord = function(word) {
        let cur = this.root;

        for (const c of word) {
          if (!cur.next.has(c)) cur.next.set(c, new TrieNode());
          cur = cur.next.get(c);
        }

        if (!cur.isWord) cur.isWord = true;
      };

      /**
       * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
       * @param {string} word
       * @return {boolean}
       */
      WordDictionary.prototype.search = function(word) {
        return this.recursiveMatch(this.root, word, 0);
      };
      WordDictionary.prototype.recursiveMatch = function(node, word, index) {
        if (index === word.length) return node.isWord;

        const letterChar = word[index];
        if (letterChar !== '.') {
          const map = node.next;
          if (!map.has(letterChar)) return false;
          return this.recursiveMatch(map.get(letterChar), word, index + 1);
        } else {
          const map = node.next;
          const keys = map.keys();
          for (const key of keys)
            if (this.recursiveMatch(map.get(key), word, index + 1)) return true;
          return false;
        }
      };

      /**
       * Your WordDictionary object will be instantiated and called as such:
       * var obj = Object.create(WordDictionary).createNew()
       * obj.addWord(word)
       * var param_2 = obj.search(word)
       */
      return new WordDictionary();
    }

    // return new ArrayWordDictionary();
    return new MapWordDictionary();
  }

  // leetcode 677. 键值映射
  MapSum() {
    // 数组版
    function ArrayVersion() {
      var TrieNode = function(value) {
        this.value = value;
        this.next = new Array(26);
      };

      /**
       * Initialize your data structure here.
       */
      var MapSum = function() {
        this.root = new TrieNode(0);
      };

      /**
       * @param {string} key
       * @param {number} val
       * @return {void}
       */
      MapSum.prototype.insert = function(key, val) {
        this.__insert(this.root, key, val, 0);
      };
      MapSum.prototype.__insert = function(node, word, value, index) {
        if (index === word.length) {
          node.value = value;
          return;
        }

        const array = node.next;
        const i = word[index].charCodeAt(0) - 97;
        if (!array[i]) array[i] = new TrieNode(0);
        this.__insert(array[i], word, value, index + 1);
      };

      /**
       * @param {string} prefix
       * @return {number}
       */
      MapSum.prototype.sum = function(prefix) {
        // 先进行前缀匹配
        let cur = this.root;
        for (const c of prefix) {
          const index = c.charCodeAt(0) - 97;
          if (!cur.next[index]) return 0;
          cur = cur.next[index];
        }

        // 前缀匹配成功之后 进行剩余单词的匹配 求和
        return this.__sum(cur);
      };

      MapSum.prototype.__sum = function(node) {
        let result = node.value || 0;

        for (const next of node.next) {
          if (!next) continue;
          result += this.__sum(next);
        }

        return result;
      };

      /**
       * Your MapSum object will be instantiated and called as such:
       * var obj = Object.create(MapSum).createNew()
       * obj.insert(key,val)
       * var param_2 = obj.sum(prefix)
       */

      return new MapSum();
    }

    // 映射版
    function MapVersion() {
      var TrieNode = function(value) {
        this.value = value;
        this.next = new Map();
      };
      /**
       * Initialize your data structure here.
       */
      var MapSum = function() {
        this.root = new TrieNode();
      };

      /**
       * @param {string} key
       * @param {number} val
       * @return {void}
       */
      MapSum.prototype.insert = function(key, val) {
        let cur = this.root;

        for (const c of key) {
          const map = cur.next;
          if (!map.has(c)) map.set(c, new TrieNode());
          cur = map.get(c);
        }

        cur.value = val;
      };

      /**
       * @param {string} prefix
       * @return {number}
       */
      MapSum.prototype.sum = function(prefix) {
        // 先处理前缀部分
        let cur = this.root;

        for (const c of prefix) {
          const map = cur.next;
          if (!map.has(c)) return 0;
          cur = map.get(c);
        }

        return this.__sum(cur);
      };
      MapSum.prototype.__sum = function(node) {
        let result = node.value || 0;

        const map = node.next;
        const keys = map.keys();
        for (const key of keys) result += this.__sum(map.get(key));

        return result;
      };

      /**
       * Your MapSum object will be instantiated and called as such:
       * var obj = Object.create(MapSum).createNew()
       * obj.insert(key,val)
       * var param_2 = obj.sum(prefix)
       */
      return new MapSum();
    }

    // return new ArrayVersion();
    return new MapVersion();
  }
}
