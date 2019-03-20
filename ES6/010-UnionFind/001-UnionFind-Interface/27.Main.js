// main 函数
class Main {
  constructor () {
      this.alterLine("Map Comparison Area");
      const n = 2000000;

      const myBSTMap = new MyBinarySearchTreeMap();
      const myTrieMap = new MyTrieMap();
      let performanceTest1 = new PerformanceTest();

      const random = Math.random;
      let arr = [];

      // 循环添加随机数的值
      for (let i = 0; i < n; i++) {
        arr.push(Math.floor(n * random()).toString());
      }

      this.alterLine("MyBSTMap Comparison Area");
      const myBSTMapInfo = performanceTest1.testCustomFn(function () {

        // 添加
        for(const word of arr)
          myBSTMap.add(word, String.fromCharCode(word));

        // 删除
        for(const word of arr)
          myBSTMap.remove(word);

        // 查找
        for(const word of arr)
          if (myBSTMap.contains(word))
            throw new Error("doesn't remove ok.");

      });

      //  总毫秒数：18703
      console.log(myBSTMapInfo);
      this.show(myBSTMapInfo);

      this.alterLine("MyTrieMap Comparison Area");
      const myTrieMapInfo = performanceTest1.testCustomFn(function () {

        for(const word of arr)
          myTrieMap.add(word, String.fromCharCode(word));

        // 删除
        for(const word of arr)
          myTrieMap.remove(word);

        // // 查找
        for(const word of arr)
          if (myTrieMap.contains(word))
            throw new Error("doesn't remove ok.");

      });
      
      // 总毫秒数：8306
      console.log(myTrieMapInfo);
      this.show(myTrieMapInfo);
      console.log(myTrieMap.getKeys()); // 有效
      console.log(myTrieMap.getValues()); // 有效
    
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
