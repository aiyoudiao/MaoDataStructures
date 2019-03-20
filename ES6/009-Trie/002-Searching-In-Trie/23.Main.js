// main 函数
class Main {
  constructor () {
      this.alterLine("Set Comparison Area");
      const n = 2000000;

      const myBSTSet = new MyBinarySearchTreeSet();
      const myTrieSet = new MyTrieSet();
      let performanceTest1 = new PerformanceTest();

      const random = Math.random;
      let arr = [];

      // 循环添加随机数的值
      for (let i = 0; i < n; i++) {
        arr.push(i.toString());
      }

      this.alterLine("MyBSTSet Comparison Area");
      const myBSTSetInfo = performanceTest1.testCustomFn(function () {

        for(const word of arr)
          myBSTSet.add(word);

      });

      // 总毫秒数：3173
      console.log(myBSTSetInfo);
      this.show(myBSTSetInfo);

      this.alterLine("MyTrieSet Comparison Area");
      const myTrieSetInfo = performanceTest1.testCustomFn(function () {

        for(const word of arr)
          myTrieSet.add(word);

      });
      
      // 总毫秒数：2457
      console.log(myTrieSetInfo);
      this.show(myTrieSetInfo);

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
