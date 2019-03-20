# 喵数据结构

## 说明

【从蛋壳到满天飞】JS 数据结构解析和算法实现，全部文章大概的内容如下：
Arrays(数组)、Stacks(栈)、Queues(队列)、LinkedList(链表)、Recursion(递归思想)、BinarySearchTree(二分搜索树)、Set(集合)、Map(映射)、Heap(堆)、PriorityQueue(优先队列)、SegmentTree(线段树)、Trie(字典树)、UnionFind(并查集)、AVLTree(AVL 平衡树)、RedBlackTree(红黑平衡树)、HashTable(哈希表)

源代码有三个：ES6（单个单个的 class 类型的 js 文件） | JS + HTML（一个 js 配合一个 html）| JAVA (一个一个的工程)

源代码相关的文章已经陆续发布至[掘金平台](github博客)和[思否平台](github博客)，光看文章能够掌握两成，动手敲代码、动脑思考、画图才可以掌握八成。

这个适合 对数据结构想了解并且感兴趣的人群，整理这些笔记加源码，时间跨度也算将近半年时间了，希望对想学习数据结构的人或者正在学习数据结构的人群有帮助。

## 目录

整理中...

```
├─001-Arrays
│  ├─001-Array-Basics
│  ├─002-Create-Our-Own-Array
│  ├─003-Add-Element-in-Array
│  ├─004-Query-and-Update-Element
│  ├─005-Contain-Find-and-Remove
│  ├─006-Generic-Data-Structures
│  ├─007-Dynamic-Array
│  └─008-Amortized-Time-Complexity
├─002-Stacks-and-Queues
│  ├─001-Create-Our-Own-Stack
│  ├─002-Stack-Valid-Parentheses-In-Leetcode
│  ├─003-Create-Our-Own-Queue
│  └─004-Queues-Comparison
├─003-Linked-List
│  ├─001-Linked-List-Basics
│  ├─002-Add-Elements-In-LinkedList
│  ├─003-DummyHead-In-LinkedList
│  ├─004-Query-And-Update-In-LinkedList
│  ├─005-Remove-Element-In-LinkedList
│  ├─006-Implement-Stack-In-LinkedList
│  ├─007-Stacks-Comparison
│  └─008-Implement-Queue-In-LinkedList
├─004-Recursion
│  ├─001-Remove-LinkedList-Elements
│  ├─002-Test-Your-LinkedList-Solution
│  ├─003-Recursion-Basics
│  ├─004-Recursion-Remove-LinkedList-Elements
│  └─005-Debug-Recursive-Solution
├─005-Binary-Search-Tree
│  ├─001-Binary-Search-Tree-Basics
│  ├─002-Add-Elements-In-BST
│  ├─003-Improved-Add-Elements-In-BST
│  ├─004-Search-Elements-In-BST
│  ├─005-PreOrder-Traverse-In-BST
│  ├─006-Debug-PreOrder-Traverse-In-BST
│  ├─007-InOrder-And-PostOrder-Traverse-In-BST
│  ├─008-Non-Recursion-PreOrder-Traverse-In-BST
│  ├─009-Level-Traverse-In-BST
│  ├─010-Remove-Min-And-Max-In-BST
│  └─011-Remove-Elements-In-BST
├─006-Set-And-Map
│  ├─001-Set-Basics-And-BSTSet
│  ├─002-Create-Our-Own-LinkedListSet
│  ├─003-Time-Complexity-Of-Set
│  ├─004-TreeSet-And-Set-Problems-In-Leetcode
│  ├─005-Map-Basics
│  ├─006-Create-Our-Own-LinekdListMap
│  ├─007-Create-Our-Own-BSTMap
│  ├─008-Time-Complexity-Of-Map
│  └─009-LeetCode-Problems-About-Map-And-Set
├─007-Heap-And-Priority-Queue
│  ├─001-Heap-Basics
│  ├─002-Add-Elements-And-Sift-Up-In-Heap
│  ├─003-Extract-Max-Element-And-Sift-Down-In-Heap
│  ├─004-Heapify-And-Replace-In-Heap
│  ├─005-Priority-Queue
│  └─006-Priority-Queue-Problems-In-Leetcode
├─008-Segment-Tree
│  ├─001-Segment-Tree-Basics
│  ├─002-Building-Segment-Tree
│  ├─003-Query-In-Segment-Tree
│  ├─004-Segment-Tree-Problems-In-Leetcode
│  └─005-Update-Single-Element-In-Segment-Tree
├─009-Trie
│  ├─001-Trie-Basics
│  ├─002-Searching-In-Trie
│  ├─003-Prefix-In-Trie
│  ├─004-Trie-And-Pattern-Match
│  ├─005-Trie-And-Map
│  └─006-Trie-About
├─010-UnionFind
│  ├─001-UnionFind-Interface
│  ├─002-Quick-Find
│  ├─003-Quick-Union
│  ├─004-Optimized-By-Size
│  ├─005-Optimized-By-Rank
│  ├─006-Path-Compression
│  └─007-More-About-Union-Find
├─011-AVL-Tree
│  ├─001-Calculating-Balance-Factor
│  ├─002-Checking-Balancing-And-Binary-Search-Property
│  ├─003-Rotation-Operations
│  ├─004-The-Implementation-Of-Left-Rotation-And-Right-Rotation
│  ├─005-LR-And-RL-In-AVLTree
│  ├─006-Remove-Elements-In-AVL-Tree
│  └─007-Map-And-Set-In-AVL-Tree
├─012-Red-Black-Tree
│  ├─001-The-Equivalence-Of-RBTree-And-2-3-Tree
│  ├─002-Keep-Root-Black-And-Left-Rotation
│  ├─003-Flip-Colors-And-Right-Rotation
│  ├─004-Adding-Elements-In-Rad-Black-Tree
│  ├─005-Time-Complexity-Of-Red-Black-Tree
│  └─006-The-Performance-Of-Red-Black-Tree
└─013-Hash-Table
    ├─001-Hash-Table-Basics
    ├─002-Hash-Function
    ├─003-Hash-Table-Implementation
    ├─004-Resizing-In-Hash-Table
    └─005-More-About-Resizing-In-Hash-Table
```

## 使用说明

1. 前端看代码：ES6 文件夹，编辑器添加这个文件夹
2. 前端看代码效果：JS 文件夹，打开里面子文件夹中的 index.html
3. 后端看代码加运行效果：JAVA 文件夹，编辑器打开子文件夹中的工程

## 参与贡献

整理中...
