// main 函数
class Main {
  constructor () {
    this.alterLine("MyLinkedSet Area");
    {
      let n = 100;
      let set = new MyLinkedListSet();

      let random = Math.random;
      let temp = null;
      for (var i = 0; i < n; i++) {
        temp = random();
        set.add(n * n * n * temp);
        set.add(n * n * n * temp);
        set.add(n * n * n * temp);
        set.add(n * n * n * temp);
        set.add(n * n * n * temp);
        set.add(n * n * n * temp);
        set.add(n * n * n * temp);
      }

      console.log(set.getSize());
      this.show(set.getSize());

      let array = new MyArray(n);
      set.each((element) => {
        console.log(element);
        this.show(element);
        array.add(element);
      });

      for (var i = 0; i < array.getSize(); i++) {
        set.remove(array.get(i));
      }

      console.log(set.getSize());
      this.show(set.getSize());
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
