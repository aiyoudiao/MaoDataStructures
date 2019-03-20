// main 函数
class Main {
  constructor () {
    {
      // this.alterLine("MyStack Area");

      // let ms = new MyStack(10);
      // for (let i = 1; i <= 10 ; i++) {
      //     ms.push(i);
      //     console.log(ms.toString());
      // }

      // console.log(ms.peek());
      // this.show(ms.peek());

      // while (!ms.isEmpty()) {
      //   console.log(ms.toString());
      //   ms.pop();
      // }

      // this.alterLine("leetcode 20. 有效的括号");
      // let s = new Solution();
      // this.show(s.isValid("{ [ ( ) ] }"));
      // this.show(s.isValid(" [ ( ] ) "));

      // this.alterLine("MyQueue Area");
      // let mq = new MyQueue(10);
      // for (let i = 1; i <= 10 ; i++) {
      //     mq.enqueue(i);
      //     console.log(mq.toString());
      // }

      // console.log(mq.getFront());
      // this.show(mq.getFront());

      // while (!mq.isEmpty()) {
      //   console.log(mq.toString());
      //   mq.dequeue();
      // }
      
      // this.alterLine("MyLoopQueue Area");
      // let mlq = new MyQueue();
      // for (let i = 1; i <= 10 ; i++) {
      //     mlq.enqueue(i);
          // console.log(mlq.toString());
      // }

      // console.log(mlq.getFront());
      // this.show(mlq.getFront());

      // while (!mlq.isEmpty()) {
      //   console.log(mlq.toString());
      //   mlq.dequeue();
      // }

      // this.alterLine("Queues Comparison Area");
      // let mq = new MyQueue();
      // let mlq = new MyLoopQueue();
      // let performanceTest = new PerformanceTest();

      // let mqInfo = performanceTest.testQueue(mq, 10000);
      // let mlqInfo = performanceTest.testQueue(mlq, 10000);

      // this.alterLine("MyQueue Area");
      // console.log(mqInfo);
      // this.show(mqInfo);

      // this.alterLine("MyLoopQueue Area");
      // console.log(mlqInfo);
      // this.show(mlqInfo);

      // this.alterLine("MyLinkedList Area");
      // let mylinkedList = new MyLinkedList();

      // for (let i = 1; i <= 5 ; i++) {
      //   mylinkedList.addFirst(i);
      //   console.log(mylinkedList.toString());
      // }
      // mylinkedList.insert(2, 88888);
      // console.log(mylinkedList.toString());

      // mylinkedList.remove(2);
      // console.log(mylinkedList.toString());

      // mylinkedList.removeFirst();
      // console.log(mylinkedList.toString());

      // mylinkedList.removeLast();
      // console.log(mylinkedList.toString());
      
      // this.alterLine("MyLinkedListStack Area");
      // let myLinkedListStack = new MyLinkedListStack();
      // for (let i = 1; i <= 5 ; i++) {
      //   myLinkedListStack.push(i);
      //   console.log(myLinkedListStack.toString());
      // }

      // console.log(myLinkedListStack.peek());
      // this.show(myLinkedListStack.peek());

      // for (let i = 0; i < 5 ; i++) {
      //   console.log(myLinkedListStack.toString());
      //   myLinkedListStack.pop();
      // }
      
      // this.alterLine("Stacks Comparison Area");
      // let myStack = new MyStack();
      // let myLinkedListStack = new MyLinkedListStack();
      // let performanceTest = new PerformanceTest();

      // let myStackInfo = performanceTest.testStack(myStack, 100000);
      // let myLinkedListStackInfo = performanceTest.testStack(myLinkedListStack, 100000);

      // this.alterLine("MyStack Area");
      // console.log(myStackInfo);
      // this.show(myStackInfo);

      // this.alterLine("MyLinkedListStack Area");
      // console.log(myLinkedListStackInfo);
      // this.show(myLinkedListStackInfo);
      
      // this.alterLine("MyLinkedListQueue Area");
      // let myLinkedListQueue = new MyLinkedListQueue();
      // for (let i = 1; i <= 5 ; i++) {
      //   myLinkedListQueue.enqueue(i);
      //   console.log(myLinkedListQueue.toString());
      // }

      // console.log(myLinkedListQueue.getFront());
      // this.show(myLinkedListQueue.getFront());

      // for (let i = 0; i < 5 ; i++) {
      //   console.log(myLinkedListQueue.toString());
      //   myLinkedListQueue.dequeue();
      // }
      
      // this.alterLine("leetcode 203. 删除指定元素的所有节点");
      // let s = new Solution();

      // let arr = [1,2,3,5,1,2,1,3,5,3,5,6,3,1,5,1,3];
      // let node = new ListNode(null);
      // node.appendToLinkedListNode(arr);

      // console.log(node.toString());
      // let result = s.removeElements(node, 1);
      // console.log(result.toString());

      // this.alterLine("递归求和");
      // let calc = new Calc();
      // let arr = [1,2,3,4];
      
      // let arrInfo = `[`;
      // for (var i = 0; i < arr.length - 1; i++) {
      //   arrInfo += `${arr[i]},`
      // }
      // arrInfo += `${arr[arr.length - 1]}`;
      // arrInfo += `]`;
      // document.body.innerHTML += `${arrInfo}<br /><br />`;
      // this.show (calc.sum(arr));
      // this.show (calc.tailSum(arr));

      // this.alterLine("leetcode 203. 删除指定元素的所有节点(递归)");
      // let s = new Solution();

      // let arr = [1,2,3,5,1,2,1,3,5,3,5,6,3,1,5,1,3];
      // let node = new ListNode(null);
      // node.appendToLinkedListNode(arr);

      // console.log(node.toString());
      // let result = s.removeElements(node, 2);
      // console.log(result.toString());
    
      // this.alterLine("leetcode 203. 删除指定元素的所有节点(递归) 调试");
      // let s = new Solution();

      // let arr = [1,2,3];
      // let node = new ListNode(null);
      // node.appendToLinkedListNode(arr);
      // this.show(node);
      // s.removeElements(node, 2);
      
      // this.alterLine("MyBinarySearchTree Area");
      // let myBinarySearchTree = new MyBinarySearchTree();
      // let nums = [5, 3, 6, 8, 4, 2];
      // for (var i = 0; i < nums.length; i++) {
      //   myBinarySearchTree.add(nums[i]);
      // }

      // /////////////////
      // //      5      //
      // //    /   \    //
      // //   3    6    //
      // //  / \    \   //
      // // 2  4     8  //
      // /////////////////
      // myBinarySearchTree.preOrder(this.show);

      // this.show(myBinarySearchTree.contains(1));
      // console.log(myBinarySearchTree.contains(1));

      // this.alterLine("MyBinarySearchTree Area");
      // let myBinarySearchTree = new MyBinarySearchTree();
      // let nums = [5, 3, 6, 8, 4, 2];
      // for (var i = 0; i < nums.length; i++) {
      //   myBinarySearchTree.add(nums[i]);
      // }

      // /////////////////
      // //      5      //
      // //    /   \    //
      // //   3    6    //
      // //  / \    \   //
      // // 2  4     8  //
      // /////////////////
      
      // console.log(myBinarySearchTree.toString());
      
      // this.alterLine("MyBinarySearchTree Area");
      // let myBinarySearchTree = new MyBinarySearchTree();
      // let nums = [5, 3, 6, 8, 4, 2];
      // for (var i = 0; i < nums.length; i++) {
      //   myBinarySearchTree.add(nums[i]);
      // }

      // /////////////////
      // //      5      //
      // //    /   \    //
      // //   3    6    //
      // //  / \    \   //
      // // 2  4     8  //
      // /////////////////
      
      // this.alterLine("MyBinarySearchTree PreOrder Area");
      // myBinarySearchTree.preOrder(this.show);

      // this.alterLine("MyBinarySearchTree NonRecursivePreOrder Area");
      // myBinarySearchTree.nonRecursivePreOrder(this.show);

      // this.alterLine("MyBinarySearchTree InOrder Area");
      // myBinarySearchTree.inOrder(this.show);

      // this.alterLine("MyBinarySearchTree PostOrder Area");
      // myBinarySearchTree.postOrder(this.show);

      // this.alterLine("MyBinarySearchTree LevelOrder Area");
      // myBinarySearchTree.levelOrder(this.show);

      // this.alterLine("MyBinarySearchTree remove Min Node Area");
      // {
      //   let tree = new MyBinarySearchTree();

      //   let n = 100;
      //   let random = Math.random;

      //   for (var i = 0; i < n; i++) {
      //     tree.add(n * n * n * random());
      //   }

      //   let array = new MyArray(n);

      //   while(!tree.isEmpty()) {
      //     array.add(tree.removeMin());
      //   }

      //   // 数组中的元素从小到大排序的
      //   console.log(array.toString());

      //   for (var i = 1; i < n; i++) {
      //     //如果数组后面的元素小于数组前面的元素
      //     if (array.get(i) < array.get(i - 1))
      //       throw new Error("error. array element is not (small - big) sort.");
      //   }

      //   console.log("removeMin test completed.");
      //   this.show("removeMin test completed.");
      // }

      // this.alterLine("MyBinarySearchTree remove Max Node Area");
      // {
      //   let tree = new MyBinarySearchTree();

      //   let n = 100;
      //   let random = Math.random;

      //   for (var i = 0; i < n; i++) {
      //     tree.add(n * n * n * random());
      //   }

      //   let array = new MyArray(n);

      //   while(!tree.isEmpty()) {
      //     array.add(tree.removeMax());
      //   }

      //   // 数组中的元素从大到小排序的
      //   console.log(array.toString());

      //   for (var i = 1; i < n; i++) {
      //     //如果数组后面的元素大于数组前面的元素
      //     if (array.get(i) > array.get(i - 1))
      //       throw new Error("error. array element is not (big - small) sort.");
      //   }

      //   console.log("removeMax test completed.");
      //   this.show("removeMax test completed.");
      // }

      // this.alterLine("MyBinarySearchTree Remove Node Area");
      // {
      //   let n = 100;

      //   let tree = new MyBinarySearchTree();
      //   let array = new MyArray(n);

      //   let random = Math.random;

      //   for (var i = 0; i < n; i++) {
      //     tree.add(n * n * n * random());
      //     array.add(tree.removeMin());
      //   }

      //   // 数组中的元素从小到大排序的
      //   console.log(array.toString());

      //   for (var i = 0; i < n; i++) {
      //     tree.remove(array.get(i));
      //   }

      //   console.log("removeMin test "+ (tree.isEmpty() ? "completed." : "no completed."));
      //   this.show("removeMin test "+ (tree.isEmpty() ? "completed." : "no completed."));
      // }
      
      // this.alterLine("MyBinarySearchTreeSet Area");
      // {
      //   let n = 5;
      //   let set = new MyBinarySearchTreeSet();

      //   let random = Math.random;
      //   let temp = null;
      //   for (var i = 0; i < n; i++) {
      //     temp = random();
      //     set.add(n * n * n * temp);
      //     set.add(n * n * n * temp);
      //     set.add(n * n * n * temp);
      //     set.add(n * n * n * temp);
      //     set.add(n * n * n * temp);
      //     set.add(n * n * n * temp);
      //     set.add(n * n * n * temp);
      //   }

      //   console.log(set.getSize());
      //   this.show(set.getSize());

      //   let array = new MyArray(n);
      //   set.each((element) => {
      //     console.log(element);
      //     this.show(element);
      //     array.add(element);
      //   });

      //   for (var i = 0; i < array.getSize(); i++) {
      //     set.remove(array.get(i));
      //   }

      //   console.log(set.getSize());
      //   this.show(set.getSize());
      // }

      // this.alterLine("MyLinkedSet Area");
      // {
      //   let n = 100;
      //   let set = new MyLinkedListSet();

      //   let random = Math.random;
      //   let temp = null;
      //   for (var i = 0; i < n; i++) {
      //     temp = random();
      //     set.add(n * n * n * temp);
      //     set.add(n * n * n * temp);
      //     set.add(n * n * n * temp);
      //     set.add(n * n * n * temp);
      //     set.add(n * n * n * temp);
      //     set.add(n * n * n * temp);
      //     set.add(n * n * n * temp);
      //   }

      //   console.log(set.getSize());
      //   this.show(set.getSize());

      //   let array = new MyArray(n);
      //   set.each((element) => {
      //     console.log(element);
      //     this.show(element);
      //     array.add(element);
      //   });

      //   for (var i = 0; i < array.getSize(); i++) {
      //     set.remove(array.get(i));
      //   }

      //   console.log(set.getSize());
      //   this.show(set.getSize());
      // }
      
      // this.alterLine("Set Comparison Area");
      // let myLinkedListSet = new MyLinkedListSet();
      // let myBinarySearchTreeSet = new MyBinarySearchTreeSet();
      // let performanceTest = new PerformanceTest();

      // let myLinkedListSetInfo = performanceTest.testSet(myLinkedListSet, 5000);
      // let myBinarySearchTreeSetInfo = performanceTest.testSet(myBinarySearchTreeSet, 5000);

      // this.alterLine("MyLinkedListSet Area");
      // console.log(myLinkedListSetInfo);
      // this.show(myLinkedListSetInfo);

      // this.alterLine("MyBinarySearchTreeSet Area");
      // console.log(myBinarySearchTreeSetInfo);
      // this.show(myBinarySearchTreeSetInfo);
      
      // this.alterLine("leetcode 804.唯一摩尔斯密码词");
      // let s = new Solution();
      // let words = ["gin", "zen", "gig", "msg"];
      // this.show(s.uniqueMorseRepresentations(words));
      
     // this.alterLine("MyLinkedListMap Area");
     //  {
     //    let n = 5;
     //    let map = new MyLinkedListMap();
     //    let array = new MyArray();

     //    let random = Math.random;
     //    let temp = null;
     //    let result = null;
     //    for (var i = 0; i < n; i++) {
     //      temp = random();
     //      result = n * n * n * temp;
     //      array.add(result);
     //      array.add(result);
     //      array.add(result);
     //      array.add(result);
     //    }

     //    console.log(array.toString());

     //    for (var i = 0; i < array.getSize(); i++) {
     //      result = array.get(i);
     //      if (map.contains(result))
     //        map.add(result, map.get(result) + 1);
     //      else
     //        map.add(result, 1);
     //    }

     //    console.log(map.toString());

     //    for (var i = 0; i < array.getSize(); i++) {
     //      result = array.get(i);
     //      map.remove(result);
     //    }

     //    console.log(map.toString());

     //  }
     
     //  this.alterLine("MyBinarySearchTreeMap Area");
     //  {
     //    let n = 5;
     //    let map = new MyBinarySearchTreeMap();
     //    let array = new MyArray();

     //    let random = Math.random;
     //    let temp = null;
     //    let result = null;
     //    for (var i = 0; i < n; i++) {
     //      temp = random();
     //      result = n * n * n * temp;
     //      array.add(result);
     //      array.add(result);
     //      array.add(result);
     //      array.add(result);
     //    }

     //    console.log(array.toString());

     //    for (var i = 0; i < array.getSize(); i++) {
     //      result = array.get(i);
     //      if (map.contains(result))
     //        map.add(result, map.get(result) + 1);
     //      else
     //        map.add(result, 1);
     //    }

     //    console.log(map.toString());

     //    for (var i = 0; i < array.getSize(); i++) {
     //      result = array.get(i);
     //      map.remove(result);
     //    }

     //    console.log(map.toString());
     //  }
     
      // this.alterLine("Set Comparison Area");
      // let myLinkedListSet = new MyLinkedListSet();
      // let myBinarySearchTreeSet = new MyBinarySearchTreeSet();
      // let systemSet = new Set();
      // let performanceTest1 = new PerformanceTest();

      // systemSet.remove = systemSet.delete;
      // systemSet.contains = systemSet.has;
      // systemSet.isEmpty = () => systemSet.size === 0;    
      // systemSet.getSize = () => systemSet.size;

      // let myLinkedListSetInfo = performanceTest1.testSet(myLinkedListSet, 50000);
      // let myBinarySearchTreeSetInfo = performanceTest1.testSet(myBinarySearchTreeSet, 50000);
      // let systemSetInfo = performanceTest1.testSet(systemSet, 50000);

      // this.alterLine("MyLinkedListSet Area");
      // console.log(myLinkedListSetInfo);
      // this.show(myLinkedListSetInfo);

      // this.alterLine("MyBinarySearchTreeSet Area");
      // console.log(myBinarySearchTreeSetInfo);
      // this.show(myBinarySearchTreeSetInfo);

      // this.alterLine("SystemSet Area");
      // console.log(systemSetInfo);
      // this.show(systemSetInfo);

      // this.alterLine("Map Comparison Area");
      // let myLinkedListMap = new MyLinkedListMap();
      // let myBinarySearchTreeMap = new MyBinarySearchTreeMap();
      // let systemMap = new Map();
      // let performanceTest = new PerformanceTest();

      // systemMap.remove = systemMap.delete;
      // systemMap.contains = systemMap.has;
      // systemMap.add = systemMap.set;
      // systemMap.isEmpty = () => systemMap.size === 0;
      // systemMap.getSize = () => systemMap.size;

      // let myLinkedListMapInfo = performanceTest.testMap(myLinkedListMap, 50000);
      // let myBinarySearchTreeMapInfo = performanceTest.testMap(myBinarySearchTreeMap, 50000);
      // let systemMapInfo = performanceTest.testMap(systemMap, 50000);

      // this.alterLine("MyLinkedListMap Area");
      // console.log(myLinkedListMapInfo);
      // this.show(myLinkedListMapInfo);

      // this.alterLine("MyBinarySearchTreeMap Area");
      // console.log(myBinarySearchTreeMapInfo);
      // this.show(myBinarySearchTreeMapInfo);

      // this.alterLine("SystemMap Area");
      // console.log(systemMapInfo);
      // this.show(systemMapInfo);

      // this.alterLine("leetcode 349.  两个数组的交集");
      // let s = new Solution();
      // var nums1 = [1,2,2,1], nums2 = [2,2];
      // var nums3 = [4,9,5], nums4 = [9,4,9,8,4];

      // console.log("[" + s.intersection(nums1, nums2) + "]");
      // console.log("[" + s.intersection(nums3, nums4) + "]");
      // this.show("[" + s.intersection(nums1, nums2) + "]");
      // this.show("[" + s.intersection(nums3, nums4) + "]");

      // this.alterLine("leetcode 350.  两个数组的交集 II");

      // console.log("[" + s.intersect(nums1, nums2) + "]");
      // console.log("[" + s.intersect(nums3, nums4) + "]");
      // this.show("[" + s.intersect(nums1, nums2) + "]");
      // this.show("[" + s.intersect(nums3, nums4) + "]");
    }
    
    {
      // this.alterLine("MaxHeap Comparison Area");
      // const n = 1000000;

      // const maxHeapIsHeapify = new MyMaxHeap();
      // const maxHeapNotHeapify = new MyMaxHeap();
      // let performanceTest1 = new PerformanceTest();

      // const random = Math.random;
      // let arr = [];
      // let arr1 = [];

      // // 循环添加随机数的值
      // for (let i = 0; i < n; i++) {
      //   arr.push(random() * n);
      //   arr1.push(arr[i]);
      // }

      // this.alterLine("MaxHeap Is Heapify Area");
      // const maxHeapIsHeapifyInfo = performanceTest1.testHeap(maxHeapIsHeapify, arr, true);
      // console.log(maxHeapIsHeapifyInfo);
      // this.show(maxHeapIsHeapifyInfo);

      // this.alterLine("MaxHeap Not Heapify Area");
      // const maxHeapNotHeapifyInfo = performanceTest1.testHeap(maxHeapNotHeapify, arr1, false);
      // console.log(maxHeapNotHeapifyInfo);
      // this.show(maxHeapNotHeapifyInfo);

      // this.alterLine("MyMaxHeap Replace Area");
      // const n = 20;

      // const maxHeap = new MyMaxHeap();
      // const random = Math.random;

      // // 循环添加随机数的值
      // for (let i = 0; i < n; i++)
      //   maxHeap.add(random() * n);

      // console.log("MaxHeap maxHeap size:" + maxHeap.size());
      // this.show("MaxHeap maxHeap size:" + maxHeap.size());

      // // 使用数组取值
      // let arr = [];
      // for (let i = 0; i < n ; i++)
      //   arr[i] = maxHeap.replace(0);

      // console.log("Array arr size:" + arr.length + "，MaxHeap maxHeap size:" + maxHeap.size());
      // this.show("Array arr size:" + arr.length + "，MaxHeap maxHeap size:" + maxHeap.size());
      // console.log(arr, maxHeap);
      // // 检验一下是否符合要求
      // for (let i = 1; i < n; i++)
      //   if (arr[i - 1] < arr[i]) throw new Error("error.");

      // console.log("test maxHeap completed.");
      // this.show("test maxHeap completed.");
      
      // this.alterLine("leetcode 347. 前K个高频元素");
      // let s = new Solution();

      // let arr = [5,-3,9,1,7,7,9,10,2,2,10,10,3,-1,3,7,-9,-1,3,3];
      // console.log(arr);
      // this.show(arr);

      // let result = s.topKFrequent(arr, 3);
      // console.log(result);
      // this.show(result);
    }

    {
        // this.alterLine("MySegmentTree Area");
        // // 初始数据
        // const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        // // 初始化线段树，将初始数据和融合器传入进去
        // let mySegmentTree = new MySegmentTree(nums);
        // // 指定线段树的融合器
        // mySegmentTree.updateMerge((a, b) => a + b);

        // // 输出
        // console.log(mySegmentTree.toString());
        // this.show("");

        // // 输出查询后的数据
        // this.alterLine("MySegmentTree Queue Area");
        // console.log("查询区间[0, 2]：" + mySegmentTree.query(0,2));
        // this.show("查询区间[0, 2]：" + mySegmentTree.query(0,2));
        // console.log("查询区间[3, 9]：" + mySegmentTree.query(3,9));
        // this.show("查询区间[3, 9]：" + mySegmentTree.query(3,9));
        // console.log("查询区间[0, 9]：" + mySegmentTree.query(0,9));
        // this.show("查询区间[0, 9]：" + mySegmentTree.query(0,9));
        
        // // 输出更新后 再查询的数据
        // this.alterLine("MySegmentTree Update Area");
        // console.log(mySegmentTree.toString());
        // this.show("");
        // mySegmentTree.set(0, 2);
        // console.log("更新索引 0 值为 2：");
        // this.show("更新索引 0 值为 2：");
        // console.log(mySegmentTree.toString());
        // this.show("");
        // console.log("查询区间[0, 2]：" + mySegmentTree.query(0,2));
        // this.show("查询区间[0, 2]：" + mySegmentTree.query(0,2));
        // console.log("查询区间[3, 9]：" + mySegmentTree.query(3,9));
        // this.show("查询区间[3, 9]：" + mySegmentTree.query(3,9));
        // console.log("查询区间[0, 9]：" + mySegmentTree.query(0,9));
        // this.show("查询区间[0, 9]：" + mySegmentTree.query(0,9));
    }

    {
        // this.alterLine("leetcode 303. 区域和检索-数组不可变");
        // let s = new Solution();
        // let nums = [-2, 0, 3, -5, 2, -1];
        // let numArray = s.NumArray(nums);

        // console.log(numArray.sumRange(0, 2));
        // this.show(numArray.sumRange(0, 2));
        // console.log(numArray.sumRange(2, 5));
        // this.show(numArray.sumRange(2, 5));
        // console.log(numArray.sumRange(0, 5));
        // this.show(numArray.sumRange(0, 5));
        
        // this.alterLine("leetcode 307. 区域和检索 - 数组可修改");
        // let s = new Solution();
        // let nums = [1, 3, 5];
        // let numArray = s.NumArray2(nums);

        // console.log(numArray.sumRange(0, 2));
        // this.show(numArray.sumRange(0, 2));
        // numArray.update(1, 2); 
        // console.log(numArray.sumRange(0, 2));
        // this.show(numArray.sumRange(0, 2));
    }

    {
      // this.alterLine("Set Comparison Area");
      // const n = 2000000;

      // const myBSTSet = new MyBinarySearchTreeSet();
      // const myTrieSet = new MyTrieSet();
      // let performanceTest1 = new PerformanceTest();

      // const random = Math.random;
      // let arr = [];

      // // 循环添加随机数的值
      // for (let i = 0; i < n; i++) {
      //   arr.push(i.toString());
      // }

      // this.alterLine("MyBSTSet Comparison Area");
      // const myBSTSetInfo = performanceTest1.testCustomFn(function () {

      //   for(const word of arr)
      //     myBSTSet.add(word);

      // });

      // // 总毫秒数：3173
      // console.log(myBSTSetInfo);
      // this.show(myBSTSetInfo);

      // this.alterLine("MyTrieSet Comparison Area");
      // const myTrieSetInfo = performanceTest1.testCustomFn(function () {

      //   for(const word of arr)
      //     myTrieSet.add(word);

      // });
      
      // // 总毫秒数：2457
      // console.log(myTrieSetInfo);
      // this.show(myTrieSetInfo);
    }

    this.alterLine("leetcode 208.实现 Trie (前缀树)");

    let s = new Solution();
    let trie = s.Trie();
    this.show(trie.insert("apple") + "");
    this.show(trie.search("apple") + " // 返回 true");   // 返回 true
    this.show(trie.search("app") + "// 返回 false");     // 返回 false
    this.show(trie.startsWith("app") + "// 返回 true"); // 返回 true
    this.show(trie.insert("app") + "");   
    this.show(trie.search("app") + "// 返回 true");     // 返回 true
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