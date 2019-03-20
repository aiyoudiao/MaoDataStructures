// main 函数
class Main {
  constructor () {
    this.alterLine("Set Comparison Area");
    let myLinkedListSet = new MyLinkedListSet();
    let myBinarySearchTreeSet = new MyBinarySearchTreeSet();
    let systemSet = new Set();
    let performanceTest1 = new PerformanceTest();

    systemSet.remove = systemSet.delete;
    systemSet.contains = systemSet.has;
    systemSet.isEmpty = () => systemSet.size === 0;    
    systemSet.getSize = () => systemSet.size;

    let myLinkedListSetInfo = performanceTest1.testSet(myLinkedListSet, 50000);
    let myBinarySearchTreeSetInfo = performanceTest1.testSet(myBinarySearchTreeSet, 50000);
    let systemSetInfo = performanceTest1.testSet(systemSet, 50000);

    this.alterLine("MyLinkedListSet Area");
    console.log(myLinkedListSetInfo);
    this.show(myLinkedListSetInfo);

    this.alterLine("MyBinarySearchTreeSet Area");
    console.log(myBinarySearchTreeSetInfo);
    this.show(myBinarySearchTreeSetInfo);

    this.alterLine("SystemSet Area");
    console.log(systemSetInfo);
    this.show(systemSetInfo);

    this.alterLine("Map Comparison Area");
    let myLinkedListMap = new MyLinkedListMap();
    let myBinarySearchTreeMap = new MyBinarySearchTreeMap();
    let systemMap = new Map();
    let performanceTest = new PerformanceTest();

    systemMap.remove = systemMap.delete;
    systemMap.contains = systemMap.has;
    systemMap.add = systemMap.set;
    systemMap.isEmpty = () => systemMap.size === 0;
    systemMap.getSize = () => systemMap.size;

    let myLinkedListMapInfo = performanceTest.testMap(myLinkedListMap, 50000);
    let myBinarySearchTreeMapInfo = performanceTest.testMap(myBinarySearchTreeMap, 50000);
    let systemMapInfo = performanceTest.testMap(systemMap, 50000);

    this.alterLine("MyLinkedListMap Area");
    console.log(myLinkedListMapInfo);
    this.show(myLinkedListMapInfo);

    this.alterLine("MyBinarySearchTreeMap Area");
    console.log(myBinarySearchTreeMapInfo);
    this.show(myBinarySearchTreeMapInfo);

    this.alterLine("SystemMap Area");
    console.log(systemMapInfo);
    this.show(systemMapInfo);

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
