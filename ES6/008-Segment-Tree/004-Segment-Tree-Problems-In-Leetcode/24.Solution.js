// 答题
class Solution {

  // leetcode 20. 有效的括号
  isValid (s) {
    
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
            case '{' :
            case '[' : 
            case '(' : 
              stack.push(s[i]);
            break;
            default:
              break;
          }
          // 是否是反括号
          switch (s[i]) {
            case '}' :
              if (stack.length === 0 || stack.pop() !== '{') {
                console.log("valid error. not parentheses. in");
                return false;
              }
            break;
            case ']' :

              if (stack.length === 0 || stack.pop() !== '[') {
                console.log("valid error. not parentheses. in");
                return false;
              }
            break;
            case ')' : 
              if (stack.length === 0 || stack.pop() !== '(') {
                console.log("valid error. not parentheses. in");
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
          console.log("valid error. not parentheses. out");
          return false;
        }
    }

    return isValid(s);
  }

  // leetcode 203. 移除链表元素
  removeElements (head, val) {

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
      while(head !== null && head.val === val) {
        head = head.next;
      }

      // 处理后的头部如果为null 那直接返回
      if (head === null) {
        return null;
      }

      // 因为头部已经做了特殊处理， head即不为null 并且 head.val不等于null
      // 那么可以直接从 head的下一个节点开始判断。
      let prev = head;
      while(prev.next !== null) {
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
    }

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
      let info =  depthString + "Call: remove " + val + " in " + head;
      show(info);

      if (head === null) {
        // 第二次输出  解决最基本的问题时
        info = depthString + "Return ：" + head;
        show(info);

        return null;
      }

      let result = removeElements(head.next, val, depth + 1);

      // 第三次输出 将原问题分解为小问题
      info = depthString + "After： remove " + val + " ：" + result;
      show(info);

      let ret = null;
      if (head.val === val) {
        ret = result;
      } else {
        head.next = result;
        ret = head;
      }

      // 第四次输出 求出小问题的解
      info = depthString + "Return ：" + ret;
      show(info);

      return ret;
    }

    // 辅助函数 生成递归深度字符串
    function generateDepathString (depth) {
      let arrInfo = ``;
      for (var i = 0; i < depth; i++) {
        arrInfo += `-- `;// -- 表示深度，--相同则代表在同一递归深度
      }
      return arrInfo;
    }

    // 辅助函数 输出内容 到页面和控制台上
    function show (content) {
      document.body.innerHTML += `${content}<br /><br />`;
      console.log(content);
    }

    return removeElements(head, val);
  }

  // leetcode 804. 唯一摩尔斯密码词
  uniqueMorseRepresentations (words) {

    /**
     * @param {string[]} words
     * @return {number}
     * 使用自己的二分搜索树来实现
     */
    var uniqueMorseRepresentations = function(words) {
        // 摩斯码
        const codes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
        
        const myBinarySearchTreeSet = new MyBinarySearchTreeSet();
        let content = "";
        // 获取起始字符的aceii码，
        // 从而可以求出某个单词的每一个字符在字母表中占的位置索引，
        // 根据这些位置索引就可以在摩斯表中找到相应的摩斯码，
        // 一个单词就是一组摩斯码，然后使用set添加，就可以直接实现去重的操作了
        const start = "a".charCodeAt(0);
        for (const word of words) {
          for (const w of word) 
            content += codes[w.charCodeAt(0) - start];

          myBinarySearchTreeSet.add(content);
          content = "";
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
        const codes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
        
        const set = new Set();
        let content = "";
        // 获取起始字符的aceii码，
        // 从而可以求出某个单词的每一个字符在字母表中占的位置索引，
        // 根据这些位置索引就可以在摩斯表中找到相应的摩斯码，
        // 一个单词就是一组摩斯码，然后使用set添加，就可以直接实现去重的操作了
        const start = "a".charCodeAt(0);
        for (const word of words) {
          for (const w of word) 
            content += codes[w.charCodeAt(0) - start];

          set.add(content);
          content = "";
        }

        return set.size;
    };

    return uniqueMorseRepresentations(words);
  }

  // leetcode 349. 两个数组的交集
  intersection (nums1, nums2) {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    var intersection = function(nums1, nums2) {
        let set = new Set();
        let arr = [];

        for (const num of nums1)
          set.add(num);

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
  intersect (nums1, nums2) {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    var intersect = function(nums1, nums2) {
      let map = new Map();
      let arr = [];

      for (const num of nums1) {
        if (map.has(num))
          map.set(num, map.get(num) + 1);
        else
          map.set(num, 1);
      }

      for (const num of nums2) {
        if (map.has(num)) {
          arr.push(num);
          let result = map.get(num) - 1;
          map.set(num, result);

          if (result === 0)
            map.delete(num);
        }
      }

      return arr;
    };

    return intersect(nums1, nums2);
  }

  // leetcode 347. 前K个高频元素
  topKFrequent (nums, k) {
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
          if (map.has(num))
            map.set(num, map.get(num) + 1);
          else
            map.set(num, 1);
        }

        // 优先队列：使用的时候指定优先级比较的方式
        let queue = new MyPriorityQueue();
        // 变更优先队列中的定义优先级的方法
        queue.updateCompare((elementA, elementB) => {
          // 原的比较算法是 值越大 优先级越大
          // 现在改为 值越小 优先级越大
          if (elementA.value < elementB.value)
            return 1;
          else if (elementA.value > elementB.value)
            return -1;
          else
            return 0;
        });

        for (const key of map.keys()) {
          if (queue.getSize() < k)
            queue.enqueue({"key": key, "value": map.get(key)});
          else if (map.get(key) > queue.getFront().value) {
            queue.replaceFront({"key": key, "value": map.get(key)});
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
          if (map.has(num))
            map.set(num, map.get(num) + 1);
          else
            map.set(num, 1);
        }

        // 优先队列：使用的时候指定优先级比较的方式
        let queue = new MyPriorityQueue();
        // 变更优先队列中的定义优先级的方法
        queue.updateCompare((keyA, keyB) => {
          // 原的比较算法是 值越大 优先级越大
          // 现在改为 值越小 优先级越大
          if (map.get(keyA) < map.get(keyB))
            return 1;
          else if (map.get(keyA) > map.get(keyB))
            return -1;
          else
            return 0;
        });

        for (const key of map.keys()) {
          if (queue.getSize() < k)
            queue.enqueue(key);
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

    return topKFrequent (nums, k);
  }

  // leetcode 303. 区域和检索-数组不可变
  NumArray (nums) {
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
        return this.mySegmentTree.query(i, j)
    };

    return new NumArray(nums);
  }

  // leetcode 307. 区域和检索 - 数组可修改
  NumArray2 (nums) {
    /**
     * @param {number[]} nums
     * 方式一：对原数组进行预处理操作
     */
    var NumArray = function(nums) {
        // 克隆一份原数组
        this.data = new Array(nums.length);
        for (var i = 0; i < nums.length; i++) {
          this.data[i] = nums[i]
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
  }
}

