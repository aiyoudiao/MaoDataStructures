// main 函数
class Main {
  constructor () {

    this.alterLine("MyArray Area");

    let ma = new MyArray();
    for (let i = 1; i <= 10 ; i++) {
        ma.add(i);
    }

    /*
    * Array: size = 10，capacity = 20
    * [1,2,3,4,5,6,7,8,9,10]
    */
    console.log(ma.toString());

    /*
     * Array: size = 11，capacity = 20
     * [1,2,3,4,5,6,7,8,99999,9,10]
     */
    ma.insert(8, 9999);
    console.log(ma.toString());

    /*
     * Array: size = 10，capacity = 20
     * [1,2,3,4,5,6,7,8,9,10]
     */
    ma.remove(8);
    console.log(ma.toString());

    /*
     * Array: size = 11，capacity = 20
     * [1,2,3,4,5,6,7,8,9,10,9999]
     */
    ma.push(9999);
    console.log(ma.toString());
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