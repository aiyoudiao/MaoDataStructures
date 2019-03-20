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
    
    return removeElements(head, val);
  }
}

