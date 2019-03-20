// main 函数
class Main {
  constructor () {
    this.alterLine("MyBinarySearchTree Remove Node Area");
    {
      let n = 100;

      let tree = new MyBinarySearchTree();
      let array = new MyArray(n);

      let random = Math.random;

      for (var i = 0; i < n; i++) {
        tree.add(n * n * n * random());
        array.add(tree.removeMin());
      }

      // 数组中的元素从小到大排序的
      console.log(array.toString());

      for (var i = 0; i < n; i++) {
        tree.remove(array.get(i));
      }

      console.log("removeMin test "+ (tree.isEmpty() ? "completed." : "no completed."));
      this.show("removeMin test "+ (tree.isEmpty() ? "completed." : "no completed."));
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
