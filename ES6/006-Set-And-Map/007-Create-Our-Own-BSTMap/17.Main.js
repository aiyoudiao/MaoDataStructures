// main 函数
class Main {
  constructor () {
   this.alterLine("MyLinkedListMap Area");
    {
      let n = 5;
      let map = new MyLinkedListMap();
      let array = new MyArray();

      let random = Math.random;
      let temp = null;
      let result = null;
      for (var i = 0; i < n; i++) {
        temp = random();
        result = n * n * n * temp;
        array.add(result);
        array.add(result);
        array.add(result);
        array.add(result);
      }

      console.log(array.toString());

      for (var i = 0; i < array.getSize(); i++) {
        result = array.get(i);
        if (map.contains(result))
          map.add(result, map.get(result) + 1);
        else
          map.add(result, 1);
      }

      console.log(map.toString());

      for (var i = 0; i < array.getSize(); i++) {
        result = array.get(i);
        map.remove(result);
      }

      console.log(map.toString());

    }
   
    this.alterLine("MyBinarySearchTreeMap Area");
    {
      let n = 5;
      let map = new MyBinarySearchTreeMap();
      let array = new MyArray();

      let random = Math.random;
      let temp = null;
      let result = null;
      for (var i = 0; i < n; i++) {
        temp = random();
        result = n * n * n * temp;
        array.add(result);
        array.add(result);
        array.add(result);
        array.add(result);
      }

      console.log(array.toString());

      for (var i = 0; i < array.getSize(); i++) {
        result = array.get(i);
        if (map.contains(result))
          map.add(result, map.get(result) + 1);
        else
          map.add(result, 1);
      }

      console.log(map.toString());

      for (var i = 0; i < array.getSize(); i++) {
        result = array.get(i);
        map.remove(result);
      }

      console.log(map.toString());
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
