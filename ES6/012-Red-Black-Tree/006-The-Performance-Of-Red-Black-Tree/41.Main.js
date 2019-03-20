// main 函数
class Main {
  constructor () {
      this.alterLine("RedBlackTree Comparison Area");
      const n = 2000000;

      const myBSTMap = new MyBinarySearchTreeMap();
      const myAVLTree = new MyAVLTree();
      const myRedBlackTree = new MyRedBlackTree();
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
      });

      // 总毫秒数：4771
      console.log(myBSTMapInfo + "   节点个数：" + myBSTMap.getSize());
      this.show(myBSTMapInfo + "   节点个数：" + myBSTMap.getSize());

      this.alterLine("MyAVLTree Comparison Area");
      // const that = this;
      const myAVLTreeInfo = performanceTest1.testCustomFn(function () {

        for(const word of arrNumber)
          myAVLTree.add(word, String.fromCharCode(word));
      });
      
      // 总毫秒数：6226
      console.log(myAVLTreeInfo + "   节点个数：" + myAVLTree.getSize());
      this.show(myAVLTreeInfo + "   节点个数：" + myAVLTree.getSize());

      this.alterLine("MyRedBlackTree Comparison Area");
      
      const myRedBlackTreeInfo = performanceTest1.testCustomFn(function () {

        for(const word of arrNumber)
          myRedBlackTree.add(word, String.fromCharCode(word));
      });
      
      // 总毫秒数：6396
      console.log(myRedBlackTreeInfo + "   节点个数：" + myRedBlackTree.getSize());
      this.show(myRedBlackTreeInfo + "   节点个数：" + myRedBlackTree.getSize());

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
