// main 函数
class Main {
  constructor () {
    this.alterLine("MyBinarySearchTree remove Min Node Area");
    {
      let tree = new MyBinarySearchTree();

      let n = 100;
      let random = Math.random;

      for (var i = 0; i < n; i++) {
        tree.add(n * n * n * random());
      }

      let array = new MyArray(n);

      while(!tree.isEmpty()) {
        array.add(tree.removeMin());
      }

      // 数组中的元素从小到大排序的
      console.log(array.toString());

      for (var i = 1; i < n; i++) {
        //如果数组后面的元素小于数组前面的元素
        if (array.get(i) < array.get(i - 1))
          throw new Error("error. array element is not (small - big) sort.");
      }

      console.log("removeMin test completed.");
      this.show("removeMin test completed.");
    }

    this.alterLine("MyBinarySearchTree remove Max Node Area");
    {
      let tree = new MyBinarySearchTree();

      let n = 100;
      let random = Math.random;

      for (var i = 0; i < n; i++) {
        tree.add(n * n * n * random());
      }

      let array = new MyArray(n);

      while(!tree.isEmpty()) {
        array.add(tree.removeMax());
      }

      // 数组中的元素从大到小排序的
      console.log(array.toString());

      for (var i = 1; i < n; i++) {
        //如果数组后面的元素大于数组前面的元素
        if (array.get(i) > array.get(i - 1))
          throw new Error("error. array element is not (big - small) sort.");
      }

      console.log("removeMax test completed.");
      this.show("removeMax test completed.");
    }

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
