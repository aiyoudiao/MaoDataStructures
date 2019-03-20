// main 函数
class Main {
  constructor () {
      this.alterLine("AVLTree Area");
      // 千级别
      const openCount = 100; // 操作数
      const rank = 10000000;

      // 生成同一份测试数据的辅助代码
      const random = Math.random;
      const array = new Array(openCount);

      // 生成同一份测试数据
      for (var i = 0; i < openCount; i++)
          array[i] = Math.floor(random() * rank);

      // 创建AVL树实例
      const avl = new MyAVLTree();

      for (const value of array)
        avl.add(value);

      // 输出当前这棵avl树是否是一个二分搜索树
      this.show("Is Binary Search Tree : " + avl.isBanarySearchTree());
      console.log("Is Binary Search Tree : " + avl.isBanarySearchTree());
      
      // 输出当前这棵avl树是否是一个平衡二叉树
      this.show("Is Balanced : " + avl.isBalanced());
      console.log("Is Balanced : " + avl.isBalanced());

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
