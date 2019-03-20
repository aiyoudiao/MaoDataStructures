// main 函数
class Main {
  constructor () {
    let ma = new MyArray(20);
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
     * [1,200,2,3,4,5,6,7,8,9,10]
     */
    ma.insert(1, 200);
    console.log(ma.toString());

    /*
     * Array: size = 12，capacity = 20
     * [-1,1,200,2,3,4,5,6,7,8,9,10]
     */
    ma.unshift(-1);
    console.log(ma.toString());

    /*
     * Array: size = 13，capacity = 20
     * [-1,1,200,2,3,4,5,6,7,8,9,10,9999]
     */
    ma.push(9999);
    console.log(ma.toString());

    /*
     * 8888
     */
    ma.set(5, 8888);
    console.log(ma.get(5));
    this.show(ma.get(5));

    /*
     * Array: size = 13，capacity = 20
     * [-1,1,200,2,3,8888,5,6,7,8,9,10,9999]
     * true
     * 6
     */
    console.log(ma.toString());
    this.show(ma.contain(5));
    this.show(ma.find(5));

    /*
     * Array: size = 12，capacity = 20
     * [-1,1,200,2,3,8888,6,7,8,9,10,9999]
     */
    ma.remove(ma.find(5));
    console.log(ma.toString());

    /*
     * -1
     * 9999
     * Array: size = 10，capacity = 20
     * [1,200,2,3,8888,6,7,8,9,10]
     */

    this.show(ma.shift());
    this.show(ma.pop());
    console.log(ma.toString());

    /*
     * Array: size = 9，capacity = 20
     * [1,200,2,3,6,7,8,9,10]
     */
    ma.removeElement(8888);
    console.log(ma.toString());

    /*
     * Array: size = 3，capacity = 20
     * [9,10,11]
     * Array: size = 12，capacity = 20
     * [1,200,2,3,6,7,8,9,10,123456,123456,123456]
     */
    ma.add(123456);
    ma.add(123456);
    ma.add(123456);
    this.show(ma.findAll(123456));
    console.log(ma.toString());

    /*
     * Array: size = 9，capacity = 20
     * [1,200,2,3,6,7,8,9,10]
     */
    ma.removeAllElement(123456);
    console.log(ma.toString());

  }

  // 将内容显示在页面上
  show (content) {
    document.body.innerHTML += `${content}<br /><br />`;
  }
}

window.onload = function () {
  // 执行主函数
  new Main();
}
