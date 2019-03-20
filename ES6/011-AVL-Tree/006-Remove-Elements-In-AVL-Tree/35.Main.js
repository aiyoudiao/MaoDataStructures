// main 函数
class Main {
  constructor () {
      this.alterLine("Map Comparison Area");
      const n = 2000000;
      // const n = 200;

      const myBSTMap = new MyBinarySearchTreeMap();
      const myAVLTree = new MyAVLTree();
      let performanceTest1 = new PerformanceTest();

      const random = Math.random;
      let arrNumber = new Array(n);

      // 循环添加随机数的值
      for (let i = 0; i < n; i++)
        arrNumber[i] = Math.floor(n * random());

      this.alterLine("MyBSTMap Comparison Area");
      const myBSTMapInfo = performanceTest1.testCustomFn(function () {

        // 添加
        for(const word of arrNumber)
          myBSTMap.add(word, String.fromCharCode(word));

        // 删除
        for(const word of arrNumber)
          myBSTMap.remove(word);

        // 查找
        for(const word of arrNumber)
          if (myBSTMap.contains(word))
            throw new Error("doesn't remove ok.");
      });

      //  总毫秒数：
      console.log(myBSTMapInfo);
      console.log(myBSTMap);
      this.show(myBSTMapInfo);

      this.alterLine("MyAVLTree Comparison Area");
      const that = this;
      const myAVLTreeInfo = performanceTest1.testCustomFn(function () {

        for(const word of arrNumber)
          myAVLTree.add(word, String.fromCharCode(word));
        
        // 输出当前这棵myAVLTree树是否是一个二分搜索树
        that.show("Is Binary Search Tree : " + myAVLTree.isBanarySearchTree());
        console.log("Is Binary Search Tree : " + myAVLTree.isBanarySearchTree());
        
        // 输出当前这棵myAVLTree树是否是一个平衡二叉树
        that.show("Is Balanced : " + myAVLTree.isBalanced());
        console.log("Is Balanced : " + myAVLTree.isBalanced());

        // 删除
        for(const word of arrNumber) {
          myAVLTree.remove(word);
        }    

        // // 查找
        for(const word of arrNumber)
          if (myAVLTree.contains(word))
            throw new Error("doesn't remove ok.");
      });
      
      console.log(myAVLTree);
      // 总毫秒数：
      console.log(myAVLTreeInfo);
      this.show(myAVLTreeInfo);

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
