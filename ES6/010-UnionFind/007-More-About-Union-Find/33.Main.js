// main 函数
class Main {
  constructor () {
      this.alterLine("UnionFind Comparison Area");
      // 千万级别
      const size = 10000000; // 并查集维护节点数
      const openCount = 10000000; // 操作数

      // 生成同一份测试数据的辅助代码
      const random = Math.random;
      const primaryArray = new Array(openCount);
      const secondaryArray = new Array(openCount);

      // 生成同一份测试数据
      for (var i = 0; i < openCount; i++) {
          primaryArray[i] = Math.floor(random() * size);
          secondaryArray[i] = Math.floor(random() * size);
      }

      // 开始测试
      const myUnionFindThree = new MyUnionFindThree(size);
      const myUnionFindFour = new MyUnionFindFour(size);
      const myUnionFindFive = new MyUnionFindFive(size);
      const myUnionFindSix = new MyUnionFindSix(size);
      const performanceTest = new PerformanceTest();

      // 测试后获取测试信息
      const myUnionFindThreeInfo = performanceTest.testUnionFind(
        myUnionFindThree,
        openCount,
        primaryArray,
        secondaryArray
      );
      const myUnionFindFourInfo = performanceTest.testUnionFind(
        myUnionFindFour,
        openCount,
        primaryArray,
        secondaryArray
      );
      const myUnionFindFiveInfo = performanceTest.testUnionFind(
        myUnionFindFive,
        openCount,
        primaryArray,
        secondaryArray
      );
      const myUnionFindSixInfo = performanceTest.testUnionFind(
        myUnionFindSix,
        openCount,
        primaryArray,
        secondaryArray
      );

      // 总毫秒数：8042
      console.log("MyUnionFindThree time：" + myUnionFindThreeInfo, myUnionFindThree);
      this.show("MyUnionFindThree time：" + myUnionFindThreeInfo);
      // 总毫秒数：7463
      console.log("MyUnionFindFour time：" + myUnionFindFourInfo, myUnionFindFour);
      this.show("MyUnionFindFour time：" + myUnionFindFourInfo);
      // 总毫秒数：5118
      console.log("MyUnionFindFive time：" + myUnionFindFiveInfo, myUnionFindFive);
      this.show("MyUnionFindFive time：" + myUnionFindFiveInfo);
      // 总毫秒数：5852
      console.log("MyUnionFindSix time：" + myUnionFindSixInfo, myUnionFindSix);
      this.show("MyUnionFindSix time：" + myUnionFindSixInfo);

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
