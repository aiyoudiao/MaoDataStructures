// main 函数
class Main {
  constructor () {
    this.alterLine("UnionFind Comparison Area");
    // 十万级别
    const size = 100000; // 并查集维护节点数
    const openCount = 100000; // 操作数

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
    const myUnionFindOne = new MyUnionFindOne(size);
    const myUnionFindTwo = new MyUnionFindTwo(size);
    const myUnionFindThree = new MyUnionFindThree(size);
    const performanceTest = new PerformanceTest();

    // 测试后获取测试信息
    const myUnionFindOneInfo = performanceTest.testUnionFind(
      myUnionFindOne,
      openCount,
      primaryArray,
      secondaryArray
    );
    const myUnionFindTwoInfo = performanceTest.testUnionFind(
      myUnionFindTwo,
      openCount,
      primaryArray,
      secondaryArray
    );
    const myUnionFindThreeInfo = performanceTest.testUnionFind(
      myUnionFindThree,
      openCount,
      primaryArray,
      secondaryArray
    );

    // 总毫秒数：24143
    console.log("MyUnionFindOne time：" + myUnionFindOneInfo, myUnionFindOne);
    this.show("MyUnionFindOne time：" + myUnionFindOneInfo);
    // 总毫秒数：32050
    console.log("MyUnionFindTwo time：" + myUnionFindTwoInfo, myUnionFindTwo);
    this.show("MyUnionFindTwo time：" + myUnionFindTwoInfo);
    // 总毫秒数：69
    console.log("MyUnionFindThree time：" + myUnionFindThreeInfo, myUnionFindThree);
    this.show("MyUnionFindThree time：" + myUnionFindThreeInfo);

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
