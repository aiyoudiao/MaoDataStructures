// main 函数
class Main {
  constructor () {
    this.alterLine("HashTable Comparison Area");
    const n = 2000000;

    const random = Math.random;
    let arrNumber = new Array(n);

    // 循环添加随机数的值
    for (let i = 0; i < n; i++)
      arrNumber[i] = Math.floor(n * random());

    const hashTable = new MyHashTableByAVLTree(1572869);
    const hashTable1 = new MyHashTableBySystem(1572869);
    const performanceTest1 = new PerformanceTest();

    const that = this;
    const hashTableInfo = performanceTest1.testCustomFn(function () {
        // 添加
        for(const word of arrNumber)
          hashTable.add(word, String.fromCharCode(word));

        that.show("size : " + hashTable.getSize());
        console.log("size : " + hashTable.getSize());

        // 删除
        for(const word of arrNumber)
          hashTable.remove(word);

        // 查找
        for(const word of arrNumber)
          if (hashTable.contains(word))
            throw new Error("doesn't remove ok.");
    });

    //  总毫秒数：
    console.log(hashTableInfo);
    console.log(hashTable);
    this.show(hashTableInfo);

    const hashTableInfo1 = performanceTest1.testCustomFn(function () {
        // 添加
        for(const word of arrNumber)
          hashTable1.add(word, String.fromCharCode(word));

        that.show("size : " + hashTable1.getSize());
        console.log("size : " + hashTable1.getSize());

        // 删除
        for(const word of arrNumber)
          hashTable1.remove(word);

        // 查找
        for(const word of arrNumber)
          if (hashTable1.contains(word))
            throw new Error("doesn't remove ok.");
    });

    //  总毫秒数：
    console.log(hashTableInfo1);
    console.log(hashTable1);
    this.show(hashTableInfo1);
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
