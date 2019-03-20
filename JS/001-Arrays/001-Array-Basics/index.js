/*
* @Author: LENOVO
* @Date:   2018-10-19 14:51:45
* @Last Modified by:   LENOVO
* @Last Modified time: 2018-10-19 15:03:12
*/

'use strict';

// 输出
console.log("Array");

// 定义数组
let arr = new Array(10);

for (var i = 0; i < arr.length; i++) {
  arr[i] = i;
}

// 定义数组
let scores = new Array(100, 99, 98);

// 遍历输出
for (var i = 0; i < scores.length; i++) {
  console.log(scores[i]);
}

// 修改数组中某个元素
scores[1] = 60;

// foreach 遍历数组
for (let index in scores) {
    console.log(scores[index]);
}