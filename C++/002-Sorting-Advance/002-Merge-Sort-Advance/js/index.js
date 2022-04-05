/*
* @Author: LENOVO
* @Date:   2018-11-28 14:51:45
* @Last Modified by:   LENOVO
* @Last Modified time: 2018-11-30 23:14:08
*/

'use strict';

// main 函数
class Main {
  constructor () {

    /////////////////////////////////////////////////////////////
    // 创建性能测试对象                                       ///
    const performanceTest = new PerformanceTest();         ///
    // 创建一个算法对象                                    ///
    const sortAlgorithms = new SortAlgorithms();        ///
    // 创建一个排序测试辅助对象                          ///
    const sortTestHeplper = new SortTestHelper();     ///
    // 指定当前this对象                               ///
    const that = this;                              ///
    //////////////////////////////////////////////////

    {
      // 测试选择排序
      function selectionSortTest (selectionSortVersion) {
        const n = 10;
        // 生成一个随机数组
        const arr = sortTestHeplper.generateRandomArrayByLengthAndReapetArea(n, 0, 100000);
        // 打印排序前的数组
        sortTestHeplper.printArray(arr, (info) => {
          that.show(info);
          console.log(info);
        });
        // 选择排序
        selectionSortVersion(arr);
        // 打印排序后的数组
        sortTestHeplper.printArray(arr, (info) => {
          that.show(info);
          console.log(info);
        });
      }

      // that.alterLine("Seletion Sort Area");
      // // // selectionSortTest((sortAlgorithms.selectionSort).bind(sortAlgorithms));
      // selectionSortTest((arr) => sortAlgorithms.selectionSort(arr));

      // that.alterLine("Seletion Sort2 Area");
      // selectionSortTest((arr) => sortAlgorithms.selectionSort2(arr));
      
      // 测试选择排序
      function insertionSortTest (insertionSortVersion) {
        const n = 10;
        // 生成一个随机数组
        const arr = sortTestHeplper.generateRandomArrayByLengthAndReapetArea(n, 0, 100000);
        // 打印排序前的数组
        sortTestHeplper.printArray(arr, (info) => {
          that.show(info);
          console.log(info);
        });
        // 选择排序
        insertionSortVersion(arr);
        // 打印排序后的数组
        sortTestHeplper.printArray(arr, (info) => {
          that.show(info);
          console.log(info);
        });
      }

      // that.alterLine("Insertion Sort 1 Area");
      // insertionSortTest((arr) => sortAlgorithms.insertionSort(arr));

      // that.alterLine("Insertion Sort 2 Area");
      // insertionSortTest((arr) => sortAlgorithms.insertionSort2(arr));

      // that.alterLine("Insertion Sort 3 Area");
      // insertionSortTest((arr) => sortAlgorithms.insertionSort3(arr));

      // that.alterLine("Insertion Sort 4 Area");
      // insertionSortTest((arr) => sortAlgorithms.insertionSort4(arr));

      // 测试冒泡排序
      function bubbleSortTest (bubbleSortVersion) {
        const n = 10;
        // 生成一个随机数组
        const arr = sortTestHeplper.generateRandomArrayByLengthAndReapetArea(n, 0, 100000);
        // 打印排序前的数组
        sortTestHeplper.printArray(arr, (info) => {
          that.show(info);
          console.log(info);
        });
        // 冒泡排序
        bubbleSortVersion(arr);
        // 打印排序后的数组
        sortTestHeplper.printArray(arr, (info) => {
          that.show(info);
          console.log(info);
        });
      }

      // that.alterLine("Bubble Sort 1 Area");
      // bubbleSortTest((arr) => sortAlgorithms.bubbleSort(arr));

      // that.alterLine("Bubble Sort 2 Area");
      // bubbleSortTest((arr) => sortAlgorithms.bubbleSort2(arr));

      // that.alterLine("Bubble Sort 3 Area");
      // bubbleSortTest((arr) => sortAlgorithms.bubbleSort3(arr));
      
      // 测试归并排序
      function mergeSortTest (mergeSortVersion) {
        const n = 20;
        // 生成一个随机数组
        const arr = sortTestHeplper.generateRandomArrayByLengthAndReapetArea(n, 0, 100000);
        // 打印排序前的数组
        sortTestHeplper.printArray(arr, (info) => {
          that.show(info);
          console.log(info);
        });
        // 归并排序
        mergeSortVersion(arr);

        // 检测排序是否成功
        that.show("isSorted :" + sortTestHeplper.isSorted(arr));
        console.log("isSorted :" + sortTestHeplper.isSorted(arr));

        // 打印排序后的数组
        sortTestHeplper.printArray(arr, (info) => {
          that.show(info);
          console.log(info);
        });
      }

      // that.alterLine("Merge Sort 1 Area");
      // mergeSortTest((arr) => sortAlgorithms.mergeSort(arr));

      // that.alterLine("Merge Sort 2 Area");
      // mergeSortTest((arr) => sortAlgorithms.mergeSort2(arr));
    }

    {
        // 测试排序算法的性能
        function testSortPerformance (sortVersion, array) {
          // 性能测试
          const info = performanceTest.testSort(array, sortVersion);

          // 返回测试信息
          return info;
        }
        const n = 2000000;
        // 完全随机
        const array = sortTestHeplper.generateRandomArrayByLengthAndReapetArea(n, 0, 1000000);
        // 近乎有序的数组
        const swapTimes = 0;
        const nearlyArray = sortTestHeplper.generateNearlyOrderedArray(n, swapTimes);
        // 大量重复元素的数组
        const repeat = 20;
        const repeatArray = sortTestHeplper.generateRandomArrayByLengthAndReapetArea(n, 0, repeat);

        // 根据不同类型的数组来测试性能
        function testArrayPerformance (arrayVersion) {
          // that.alterLine("Seletion Sort Area");
          // const seletionSortInfo = testSortPerformance(sortAlgorithms.selectionSort, arrayVersion);
          // that.show(seletionSortInfo);
          // that.log(seletionSortInfo);

          // that.alterLine("Seletion Sort2 Area");
          // const seletionSortInfo2 = testSortPerformance(sortAlgorithms.selectionSort2, arrayVersion);
          // that.show(seletionSortInfo2);
          // that.log(seletionSortInfo2);

          // that.alterLine("Insertion Sort 1 Area");
          // const insertionSort1Info = testSortPerformance(sortAlgorithms.insertionSort, arrayVersion);
          // that.show(insertionSort1Info);
          // that.log(insertionSort1Info);

          // that.alterLine("Insertion Sort 2 Area");
          // const insertionSort2Info = testSortPerformance(sortAlgorithms.insertionSort2, arrayVersion);
          // that.show(insertionSort2Info);
          // that.log(insertionSort2Info);

          // that.alterLine("Insertion Sort 3 Area");
          // const insertionSort3Info = testSortPerformance(sortAlgorithms.insertionSort3, arrayVersion);
          // that.show(insertionSort3Info);
          // that.log(insertionSort3Info);

          // that.alterLine("Insertion Sort 4 Area");
          // const insertionSort4Info = testSortPerformance(sortAlgorithms.insertionSort4, arrayVersion);
          // that.show(insertionSort4Info);
          // that.log(insertionSort4Info);

          // that.alterLine("Bubble Sort 1 Area");
          // const bubbleSort1Info = testSortPerformance(sortAlgorithms.bubbleSort, arrayVersion);
          // that.show(bubbleSort1Info);
          // that.log(bubbleSort1Info);

          // that.alterLine("Bubble Sort 2 Area");
          // const bubbleSort2Info = testSortPerformance(sortAlgorithms.bubbleSort2, arrayVersion);
          // that.show(bubbleSort2Info);
          // that.log(bubbleSort2Info);

          // that.alterLine("Bubble Sort 3 Area");
          // const bubbleSort3Info = testSortPerformance(sortAlgorithms.bubbleSort3, arrayVersion);
          // that.show(bubbleSort3Info);
          // that.log(bubbleSort3Info);

          that.alterLine("Shell Sort 1 Area");
          const shellSort1Info = testSortPerformance(sortAlgorithms.shellSort, arrayVersion);
          that.show(shellSort1Info);
          that.log(shellSort1Info);

          that.alterLine("Merge Sort 1 Area");
          const mergeSort1Info = testSortPerformance(sortAlgorithms.mergeSort, arrayVersion);
          that.show(mergeSort1Info);
          that.log(mergeSort1Info);

          that.alterLine("Merge Sort 3 Area");
          const mergeSort3Info = testSortPerformance(sortAlgorithms.mergeSort3, arrayVersion);
          that.show(mergeSort3Info);
          that.log(mergeSort3Info);
        }

        that.alertLine("All Random Array Area");
        testArrayPerformance(array);

        that.alertLine("Nearly Ordered Area");
        testArrayPerformance(nearlyArray);

        that.alertLine("Reapet Array Area");
        testArrayPerformance(repeatArray);
    }

    {
        // 希尔排序测试
        // const n = 20;
        // // 完全随机
        // const array = sortTestHeplper.generateRandomArrayByLengthAndReapetArea(n, 0, 100);

        // sortAlgorithms.shellSort2(array);


        // // 近乎有序的数组
        // const swapTimes = 100;
        // const nearlyArray = sortTestHeplper.generateNearlyOrderedArray(n, swapTimes);
        // // 大量重复元素的数组
        // const repeat = 10;
        // const repeatArray = sortTestHeplper.generateRandomArrayByLengthAndReapetArea(n, 0, repeat);
    }

    {
        // const n = 20000;
        // // 完全随机
        // const array = sortTestHeplper.generateRandomArrayByLengthAndReapetArea(n, 0, 1000000);
        // // 近乎有序的数组
        // const swapTimes = 0;
        // const nearlyArray = sortTestHeplper.generateNearlyOrderedArray(n, swapTimes);
        // // 大量重复元素的数组
        // const repeat = 20;
        // const repeatArray = sortTestHeplper.generateRandomArrayByLengthAndReapetArea(n, 0, repeat);
    }
  }

  // 将内容显示在页面上
  show (content) {
    document.body.innerHTML += `${content}<br /><br />`;
  }

  // 将内容显示在控制台上
  log (content) {
    console.log(content + "\r\n\r\n");
  }

  // 展示分割线
  alterLine (title) {
    let line = `--------------------${title}----------------------`;
    console.log(line);
    document.body.innerHTML += `${line}<br />`;
  }

  // 重点分割线
  alertLine (title) {
    let line = `********************${title}**********************`;
    console.log(line);
    document.body.innerHTML += `${line}<br /><br />`;
  }
}

// 排序算法
class SortAlgorithms {
  constructor () {
    this.sortTestHeplper = new SortTestHelper();
    this.swap = this.sortTestHeplper.swap;
  }

  // 选择排序
  selectionSort (array) {
    const len = array.length;

    for (let i = 0; i < len; i ++) {

      let minIndex = i;
      for (let j = i + 1; j < len; j ++)
        if (array[j] < array[minIndex])
          minIndex = j;

      this.swap(array, i, minIndex);
    } // for
  }

  // 选择排序 优化 从只找最小值的索引 到同时找最大值和最小值索引
  selectionSort2 (array) {
    const len = array.length;

    // 定义两边元素的指针
    let left = 0;
    let right = len - 1;

    // 只要左边的指针没有超过 右边的指针
    // 那么就证明它们没有相遇
    // 相遇就代表不用重复寻找了
    while (left < right) {
      // 设置两个最大值和最小值的默认索引
      let minIndex = left;
      let maxIndex = right;

      // 在每一轮查找都要保证 array[minIndex] <= array[maxIndex]
      if (array[minIndex] > array[maxIndex])
        this.swap(array, minIndex, maxIndex);

      // 从左到右搜索
      for (let i = left + 1; i < right; i ++) {
        if (array[i] < array[minIndex])
          minIndex = i;
        else if (array[i] > array[maxIndex])
          maxIndex = i;
        else {
          // array[minIndex] == array[maxIndex] 就不需要管，
          // 因为只维护了左右两边的顺序性，中间的部分并没有维护顺序性
        }
      }
      // 左边指针指向最小值，右边指针指向最大值
      this.swap(array, left, minIndex);
      this.swap(array, right, maxIndex);

      // 维护一下左右两个指针，让下一次查找左右各往中间进一位。
      left ++;
      right --;
    }
  }

  // 插入排序
  insertionSort (array) {
    const len = array.length;

    for (let i = 1; i < len; i++) {

      for (let j = i; j > 0; j--) {
        if (array[j] < array[j - 1])
          this.swap(array, j, j - 1);
        else
          break;
      }
    }
  }

  // 插入排序2 优化内循环的判断，直接放入循环条件中
  insertionSort2 (array) {
    const len = array.length;

    for (let i = 1; i < len; i++)
      for (let j = i; j > 0 && array[j] < array[j - 1]; j--)
        this.swap(array, j, j - 1);
  }

  // 插入排序3 优化 交换两个索引位置的元素这个操作
  insertionSort3 (array) {
    const len = array.length;

    for (let i = 1; i < len; i++) {
      // 存一下当前的值
      const current = array[i];
      // 在外面声明索引，以便在内轮循环下面进行赋值操作
      let j;
      for (j = i; j > 0 && array[j - 1] > current ; j--) {
         // 只要比current大的元素 都向后移动一位，
         // j 索引 会变成  比current大的元素的原索引 (j - 1)
          array[j] = array[j - 1];
      }

      // 插入时 直接覆盖，没有关系，因为原来的元素以后挪到后一位去了。
      array[j] = current;
    }
  }

  // 插入排序4 优化循环操作， 将for循环改成 while循环
  insertionSort4 (array) {
    const len = array.length;

    for (let i = 1; i < len; i++) {
      // 存一下当前的值
      const current = array[i];
      // 在外面声明索引，以便在内轮循环下面进行赋值操作
      let j = i;
      while (j > 0 && array[j - 1] > current)
        array[j] = array[-- j];// 让前面的元素向后移动一位，j索引会变成原来前面元素的索引

      // 插入时 直接覆盖
      array[j] = current;
    }
  }

  // 插入排序 对数组片段 进行插入排序 -
  // 这个方法是给其它 O(nlogn) 级别的函数做辅助函数来使用的。
  insertionSortByFragment (array, left, right) {
    // 指定排序范围
    for (let i = left + 1; i <= right; i++) {
        // 存一下值
        const current = array[i];
        let j;
        // 判断一下 是否需要进行 数组位置的移动
        for (j = i; j > left && array[j - 1] > current; j --)
          array[j] = array[j - 1]; // 元素位置后移，空出待插入的位置
        array[j] = current; // 直接覆盖，这里的覆盖就是插入，因为原位置的元素向后移动了一位
    }
  }

  // 冒泡排序
  bubbleSort (array) {
    const len = array.length;

    // 相邻的两个元素进行对比，最终将大的元素按照顺序放到后面，
    // 慢慢上后面的元素有顺序性
    for (let i = 0; i < len; i ++)
      for (let j = 1; j < len - i; j ++)
        if (array[j - 1] > array[j])
          this.swap(array, j - 1, j);
  }

  // 冒泡排序 优化冒泡排序 设置一个标识 用来确定是否还有必要继续冒泡
  bubbleSort2 (array) {
    const len = array.length;
    let isSwaped;

    // 相邻的两个元素进行对比，最终将大的元素按照顺序放到后面，
    // 慢慢上后面的元素有顺序性
    for (let i = 0; i < len; i ++) {
      // 默认为false，内循环中有一次交换就说明 还有必要继续冒泡
      isSwaped = false;
      for (let j = 1; j < len - i; j ++)
        if (array[j - 1] > array[j]) {
          this.swap(array, j - 1, j);
          isSwaped = true;
        }

      // 如果上次循环一次都没有交换，那么就没有必要继续冒泡
      if (!isSwaped)
        break;
    }
  }

  // 冒泡排序 优化冒泡排序 修改成do-while 设置一个定位标识 用来最后一次交换的位置的索引
  bubbleSort3 (array) {
    let len = array.length;
    let newLen = len;

    do {
      newLen = 0;

      for (let j = 1; j < len; j ++)
        if (array[j - 1] > array[j]) {
          this.swap(array, j - 1, j);
          // 记录最后一次交换位置，这次交换位置之后的所有元素在下一轮扫描中均不考虑
          newLen = j;
        }
      len = newLen;

    } while(newLen > 0);
  }

  // 希尔排序
  shellSort (array) {
    let len = array.length;
    let h = 1;

    while ( h < Math.floor(len / 3))
      h = 3 * h + 1;

    while ( h >= 1) {

      for (let i = h; i < len; i ++) {
        let current = array[i];
        let j;
        for (j = i; j >= h && array[j - h] > current; j -= h)
          array[j] = array[j - h];

        array[j] = current;
      }

      h = Math.floor(h / 3);
    }
  }

  // 希尔排序2
  shellSort2 (array) {
    let len = array.length;
    let h = 1;
    document.body.innerHTML += `函数内 shellSort2 --->当前 len: ${len}<br />`;
    while ( h < Math.floor(len / 3)) {
      h = 3 * h + 1;
      document.body.innerHTML += `外循环 while --->当前 h: ${h}<br />`;
    } // 外循环 while
    document.body.innerHTML += "外循环 while ---> 当前数组：[ " + array +" ]<br />";

    while ( h >= 1) { // h只要不等于0 就会继续进行循环
      document.body.innerHTML += `内循环 while --->当前 判断条件 ${h}(h) >= 1<br />`;
      document.body.innerHTML += `内循环 while --->当前 h: ${h}<br />`;
      document.body.innerHTML += "内循环 while ---> 当前数组：[ " + array +" ]<br /><br />";
      for (let i = h; i < len; i ++) { // 跨度是1， h值越小 for1 循环次数就越多
        document.body.innerHTML += `内循环 for1 ---> 当前 判断条件 ${i}(i) < ${len}(len); ${i}(i) ++<br />`;
        document.body.innerHTML += `内循环 for1 --->当前i：${i} --- 当前 h: ${h} --- 当前len: ${len} <br />`;
        document.body.innerHTML += "内循环 for1 ---> 当前数组：[ " + array +" ]<br />";
        document.body.innerHTML += `内循环 for1 ---> 当前 i: ${i} <br />`;
        let current = array[i];
        let j;
        // 跨度是h， 也就是h值越小 for2 循环次数越多，随着i的增大 循环次数也会变多，
        // 但随着遍历的次数增多，数组就越来越有序了， 那么就会很难满足array[j - h] > current
        for (j = i; j >= h && array[j - h] > current; j -= h) {
          document.body.innerHTML += `内循环 for2 ---> 当前 判断条件 ${j}(j) > ${h}(h) && ${array[j-h]}(array[j-h]) > ${current}(current) ; ${j}(j) -= ${h}(h)<br />`;
          document.body.innerHTML += `内循环 for2 ---> 当前 j: ${j} --- 当前 j-h: ${j-h} --- 当前 h: ${h} <br />`;
          document.body.innerHTML += `内循环 for2 ---> array[${j}] = array[${j-h}]<br />`;
          document.body.innerHTML += `内循环 for2 ---> ${array[j]} = ${array[j-h]}<br />`;
          array[j] = array[j - h];
          document.body.innerHTML += "内循环 for2 ---> 当前数组：[ " + array +" ]<br />";
        } // 内循环 for2
        document.body.innerHTML += `内循环 for1 ---> array[${j}] = current <br />`;
        document.body.innerHTML += `内循环 for1 ---> ${array[j]} = ${current}<br />`;
        array[j] = current;
        document.body.innerHTML += "内循环 for1 ---> 当前数组：[ " + array +" ]<br /><br />";
      } // 内循环 for1

      h = Math.floor(h / 3);
      document.body.innerHTML += `内循环 while ---> 当前 h: ${h}<br />`;
    } // 内循环 while
    document.body.innerHTML += "外循环 while ---> 当前数组：[ " + array +" ]<br />";
  }

  // 归并排序 会浪费O(2n)的空间 对空间进行了压缩处理
  mergeSort (array) {
    const len = array.length;
    this.recursiveMergeSort(array, 0, len - 1);
  }

  // 归并排序 辅助函数 -
  recursiveMergeSort (array, left, right) {
    // 不能越界
    if (left >= right)
      return;

    // 获取中间部分的索引
    const middle = Math.floor(( left + right) / 2);//Math.floor((right - left) / 2) + left;

    // 对左边的部分进行归并排序
    this.recursiveMergeSort(array, left, middle);
    // 对右边的部分进行归并排序
    this.recursiveMergeSort(array, middle + 1, right);
    // 左右都排序完毕后，进行合并操作
    this.merge(array, left, middle, right);
  }

  // 归并排序 合并操作 -
  merge (array, left, middle, right) {
    // 会对数组的空间进行压缩处理，如过不进行压缩处理 就像merge2 一样

    // 创建的数组  长度为 右边界 + 1 减去 左边界
    const tempArray = new Array(right - left + 1);
    // 从左边界遍历到右边界，也就是拷贝一份 两个边界中的原数组中的元素
    for (let i = left; i < right + 1; i++) {
      tempArray[i - left] = array[i];
    }
 
    // i 指向数组的左边界起始点
    let i = left;
    // j 指向中间部分向右偏移一位 也就是有边界的起始点
    let j = middle + 1;

    // 从左边界遍历到右边界，
    // 也就是从模板数组中查找元素，
    // 判断合适的条件对原数组进行修改
    for (let k = left; k <= right; k++) {
      // 左边界指针 超过了中间的范围，要去右边界了
      if (i > middle) {
        array[k] = tempArray[j - left];
        j ++;
      
      // 右边界指针超过了有边界的极限了
      } else if (j > right) {
        array[k] = tempArray[i - left];
        i ++;

      // 左边界指针 i 对应的值 是否小于 右边界指针 j 对应的值
      } else if (tempArray[i - left] < tempArray[j - left]) {
        array[k] = tempArray[i - left];
        i ++;

      // 左边界指针 i 对应的值 是否大于等于 有边界指针 j 对应的值
      } else { // if (tempArray[i - left] >= tempArray[j - left])
        array[k] = tempArray[j - left];
        j ++;
      } // else
    } // for
  } // merge

  // 归并排序2  // 对比看源码时 思路比较清晰 不建议使用这个方法 -
  // 会多浪费 (nlogn)的空间，没有对空间进行压缩处理
  mergeSort2 (array) {
    const len = array.length;
    this.recursiveMergeSort(array, 0, len - 1);
  }

  // 归并排序2 辅助函数 -
  recursiveMergeSort2 (array, left, right) {
    // 不能越界
    if (left >= right)
      return;

    // 获取中间部分的索引
    const middle = Math.floor(( left + right) / 2);//Math.floor((right - left) / 2) + left;

    // 对左边的部分进行归并排序
    this.recursiveMergeSort(array, left, middle);
    // 对右边的部分进行归并排序
    this.recursiveMergeSort(array, middle + 1, right);
    // 左右都排序完毕后，进行合并操作
    this.merge(array, left, middle, right);
  }

  // 归并排序2 合并操作 -
  merge2 (array, left, middle, right) {

    // 创建的数组  长度为 右边界 + 1 减去 左边界
    const tempArray = new Array(array.length);
    // 从左边界遍历到右边界，也就是拷贝一份 两个边界中的原数组中的元素
    for (let i = left; i < right + 1; i++) {
      tempArray[i] = array[i];
      console.log(`当前 i = ${i} left = ${left}`);
    }

    // i 指向数组的左边界起始点
    let i = left;
    // j 指向中间部分向右偏移一位 也就是有边界的起始点
    let j = middle + 1;

    // 从左边界遍历到右边界，
    // 也就是从模板数组中查找元素，
    // 判断合适的条件对原数组进行修改
    for (let k = left; k <= right; k++) {
      // 左边界指针 超过了中间的范围，要去右边界了
      if (i > middle) {
        array[k] = tempArray[j];
        j ++;
      
      // 右边界指针超过了有边界的极限了
      } else if (j > right) {
        array[k] = tempArray[i];
        i ++;

      // 左边界指针 i 对应的值 是否小于 右边界指针 j 对应的值
      } else if (tempArray[i] < tempArray[j]) {
        array[k] = tempArray[i];
        i ++;

      // 左边界指针 i 对应的值 是否大于等于 有边界指针 j 对应的值
      } else { // if (tempArray[i - left] >= tempArray[j - left])
        array[k] = tempArray[j];
        j ++;
      } // else
    } // for
  } // merge

  // 归并排序 优化版： 
  // 优化一 当元素过少时 对数组片段 进行插入排序的 优化操作
  // 优化二 左右部分交界处的两个元素是有序，说明两部分的元素都是有序，那么无序合并
  mergeSort3 (array) {
    const len = array.length;
    this.recursiveMergeSort(array, 0, len - 1);
  }

  // 归并排序 辅助函数 -
  recursiveMergeSort3 (array, left, right) {
    // 当这个边界内的元素个数 小于等于 15，
    // 那么就可以使用插入排序来提高性能
    if (right - left <= 15) {
      // left +1 是为了 insertionSortByFragmen
      this.insertionSortByFragment(array, left, right);
      return;
    }

    // 获取中间部分的索引
    const middle = Math.floor(( left + right) / 2);//Math.floor((right - left) / 2) + left;

    // 对左边的部分进行归并排序
    this.recursiveMergeSort(array, left, middle);
    // 对右边的部分进行归并排序
    this.recursiveMergeSort(array, middle + 1, right);

    // 如果 左右两部分的交界处的两个元素是有序的，那本次无需合并，否则就要执行合并操作了
    if (array[middle - 1] <= array[middle])
      return;

    // 左右都排序完毕后，进行合并操作
    this.merge(array, left, middle, right);
  }

  // 归并排序 合并操作 -
  merge3 (array, left, middle, right) {
    // 会对数组的空间进行压缩处理，如过不进行压缩处理 就像merge2 一样

    // 创建的数组  长度为 右边界 + 1 减去 左边界
    const tempArray = new Array(right - left + 1);
    // 从左边界遍历到右边界，也就是拷贝一份 两个边界中的原数组中的元素
    for (let i = left; i < right + 1; i++) {
      tempArray[i - left] = array[i];
    }
 
    // i 指向数组的左边界起始点
    let i = left;
    // j 指向中间部分向右偏移一位 也就是有边界的起始点
    let j = middle + 1;

    // 从左边界遍历到右边界，
    // 也就是从模板数组中查找元素，
    // 判断合适的条件对原数组进行修改
    for (let k = left; k <= right; k++) {
      // 左边界指针 超过了中间的范围，要去右边界了
      if (i > middle) {
        array[k] = tempArray[j - left];
        j ++;
      
      // 右边界指针超过了有边界的极限了
      } else if (j > right) {
        array[k] = tempArray[i - left];
        i ++;

      // 左边界指针 i 对应的值 是否小于 右边界指针 j 对应的值
      } else if (tempArray[i - left] < tempArray[j - left]) {
        array[k] = tempArray[i - left];
        i ++;

      // 左边界指针 i 对应的值 是否大于等于 有边界指针 j 对应的值
      } else { // if (tempArray[i - left] >= tempArray[j - left])
        array[k] = tempArray[j - left];
        j ++;
      } // else
    } // for
  } // merge


}

// 性能测试
class PerformanceTest {
  constructor () {
    this.sortTestHelper = new SortTestHelper();
    this.sortAlgorithms = new SortAlgorithms();
  }

  // 对比堆 主要对比 使用heapify 与 不使用heapify时的性能
  testHeap (heap, array, isHeapify) {
    const startTime = Date.now();

    // 是否支持 heapify
    if (isHeapify)
      heap.heapify(array);
    else {
      for (const element of array)
        heap.add(element);
    }

    console.log("heap size:" + heap.size() + "\r\n");
    document.body.innerHTML += ("heap size:" + heap.size() + "<br /><br />");

    // 使用数组取值
    let arr = new Array(heap.size());
    for (let i = 0; i < arr.length ; i++)
      arr[i] = heap.extractMax();

    console.log(
      "Array size:" + arr.length + "，heap size:" + heap.size() + "\r\n");
    document.body.innerHTML += (
      "Array size:" + arr.length + "，heap size:" + heap.size() + "<br /><br />");

    // 检验一下是否符合要求
    for (let i = 1; i < arr.length; i++)
      if (arr[i - 1] < arr[i]) throw new Error("error.");

    console.log(
      "test heap completed." + "\r\n");
    document.body.innerHTML += ("test heap completed." + "<br /><br />");

    const endTime = Date.now();
    return this.calcTime(endTime - startTime);
  }

  // 计算运行的时间，转换为 天-小时-分钟-秒-毫秒
  calcTime (result) {

    //获取距离的天数
    var day = Math.floor(result / (24 * 60 * 60 * 1000));

    //获取距离的小时数
    var hours = Math.floor(result / ( 60 * 60 * 1000) % 24);


    //获取距离的分钟数
    var minutes = Math.floor(result / (60 * 1000) % 60);

    //获取距离的秒数
    var seconds = Math.floor(result / 1000 % 60);

    //获取距离的毫秒数
    var milliSeconds = Math.floor(result % 1000);

    // 计算时间
    day = day < 10 ? "0" + day : day;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    milliSeconds = milliSeconds < 100 ?
      (milliSeconds < 10 ? "00" + milliSeconds : "0" + milliSeconds) : milliSeconds;
  
    // 输出耗时字符串
    result = day + "天" + hours + "小时" + minutes + "分" +
     seconds + "秒" + milliSeconds + "毫秒" + 
     "  <<<<============>>>>  总毫秒数：" + result;

    return result;
  }

  // 自定义对比
  testCustomFn (fn) {
    let startTime = Date.now();

    fn();

    let endTime = Date.now();

    return this.calcTime(endTime - startTime);
  }

  // 测试排序算法的性能
  testSort (array, sortMethod) {
    const newArray = this.sortTestHelper.cloneArray(array);
    const sort = sortMethod.bind(this.sortAlgorithms);
    return this.testCustomFn(() => {
      sort(newArray);
      if (!this.sortTestHelper.isSorted(newArray))
        throw new Error("sort bad.");
    });
  }
}

// 排序测试
class SortTestHelper {
  constructor () {}

  // 生成随机数  前提： 指定范围内生成 有效随机整数 -
  generateRandomByBound (min, max) {
    // // 获取 1 - 10 之间的 整数
    // const randomNumber = Math.floor(Math.random() * 10) + 1; 

    // // 获取 1 - min 之间的 整数
    // const randomNumber2 = Math.floor(Math.random() * min) + 1;
    
    // 获取 min - max 之间的值
    // const result = Math.floor(Math.random() * (max + 1 - min)) + min;

    return Math.floor(Math.random() * (max + 1 - min)) + min;
  }

  // 生成随机重复元素数组 前提：指定数组长度范围 并且 指定 数组元素范围
  generateRandomArrayByLengthAndReapetArea (length, rangeLeft, rangeRight) {
    const data = new Array(length);

    for (var i = 0; i < length; i++)
      data[i] = this.generateRandomByBound(rangeLeft, rangeRight);

    return data;
  }

  // 生成随机数组  前提：指点数组长度范围
  generateRandomArrayByLength (length) {
    const data = this.generateRandomArrayByLengthAndReapetArea(length, 0, length);

    return data;
  }

  // 交换两个数组元素的位置 -
  swap (array, indexA, indexB) {
    const temp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = temp;
  }

  // 生成近乎有序的数组 前提：指定数组长度范围 并且 指定随机数组元素 交换次数
  generateNearlyOrderedArray (length, swapTimes) {
    const data = new Array(length);
    for (let i = 0; i < length; i++)
      data[i] = i;
    
    const random = this.generateRandomByBound;
    let indexA, indexB;
    for (let i = 0; i < swapTimes; i++) {
      indexA = random(0, length - 1);
      indexB = random(0, length - 1);
      this.swap(data, indexA, indexB);
    }

    return data;
  }

  // 判断一个数组是否是有序 是否是升序 从小到大
  isSorted (array, isAsc = true) {
    if (isAsc) {
      // 升序 从小到大
      for (var i = 1; i < array.length; i++)
        if (array[i - 1] > array[i])
          return false;
      return true;

    } else {
      // 倒序  从大到小
      for (var i = 1; i < array.length; i++)
        if (array[i - 1] < array[i])
          return false;
      return true;

    }
  }

  // 克隆一份一模一样的数组
  cloneArray (array) {
    const newArray = new Array(array.length);
    for (let i = 0; i < newArray.length; i ++)
      newArray[i] = array[i];

    return newArray;
  }

  // 打印数组中的内容  指定打印的风格
  printArray (array, style) {
    let info = "";
    info += "[ "
    for (var i = 0; i < array.length - 1; i++) {
      info += array[i];
      info += ", ";
    }

    if (array.length - 1 >= 0)
      info += array[array.length - 1];
    else
      info += "empty.";

    info += " ]";

    style(info);
  }
}

// 链表节点类
class ListNode {
  constructor (val) {
    this.val = val;
    this.next = null;
  }

  // 将一个数组对象 转换为一个链表 并且追加到当前节点上
  appendToLinkedListNode (array) {

    let head = null;
    if (this.val === null) { // 头部添加
      head = this;
      head.val = array[0];
      head.next = null;
    } else { // 插入式
      head = new ListNode(array[0]);
      head.next = this.next;
      this.next = head;
    }

    // 添加节点的方式  头部添加、尾部添加、中间插入

    // 尾部添加节点的方式
    for (var i = 1; i < array.length; i++) {
      head.next = new ListNode(array[i]);
      head = head.next;
    }
  }

  // 输出链表中的信息
  // @Override toString 2018-10-21-jwl
  // toString () {
  //   let arrInfo = `ListNode: \n`;
  //   arrInfo += `data = front  [`;
  //   let node = this;
  //   while (node.next !== null) {
  //     arrInfo += `${node.val}->`;
  //     node = node.next;
  //   }    
  //   arrInfo += `${node.val}->`;
  //   arrInfo += "NULL] tail";

  //   // 在页面上展示
  //   document.body.innerHTML += `${arrInfo}<br /><br /> `;

  //   return arrInfo;
  // }

  toString () {
    let arrInfo = `ListNode = `;
    arrInfo += `front  [`;
    let node = this;
    while (node.next !== null) {
      arrInfo += `${node.val}->`;
      node = node.next;
    }
    arrInfo += `${node.val}->`;
    arrInfo += "NULL] tail";

    return arrInfo;
  }
}

// 递归基础类
class Calc {
  constructor () {}

  // 递归求和
  sum (array, cur = 0) {

    // 解决最基本的问题
    if (cur === array.length) {
      return 0;
    }

    // 化归思想
    // 将原问题分解为性质相同的小问题
    // 将众多小问题的答案构建出原问题的答案
    return array[cur] + this.sum(array, cur + 1);

  }
  // 尾递归求和
  tailSum (array, cur = 0, result = 0) {

    // 解决最基本的问题
    if (cur === array.length) {
      return result; // 这里是上面的sum不一样，这里直接返回最终计算结果
    }

    // 化归思想 ： 将原问题分解为性质相同的小问题，使用小问题的解构建出原问题的解。
    // 减少或者复用程序调用系统栈： 将运算操作一次性执行完毕，然后再执行子函数。
    return this.tailSum(array, cur + 1, result + array[cur]);
  }
}

// 答题
class Solution {

  // leetcode 20. 有效的括号
  isValid (s) {
    
    /**
     * @param {string} s
     * @return {boolean}
     */
    var isValid = function(s) {
        let stack = [];

        // 以遍历的方式进行匹配操作
        for (let i = 0; i < s.length; i++) {

          // 是否是正括号
          switch (s[i]) {
            case '{' :
            case '[' : 
            case '(' : 
              stack.push(s[i]);
            break;
            default:
              break;
          }
          // 是否是反括号
          switch (s[i]) {
            case '}' :
              if (stack.length === 0 || stack.pop() !== '{') {
                console.log("valid error. not parentheses. in");
                return false;
              }
            break;
            case ']' :

              if (stack.length === 0 || stack.pop() !== '[') {
                console.log("valid error. not parentheses. in");
                return false;
              }
            break;
            case ')' : 
              if (stack.length === 0 || stack.pop() !== '(') {
                console.log("valid error. not parentheses. in");
                return false;
              }
            break;
            default:
            break;
          }
        }

        // 是否全部匹配成功
        if (stack.length === 0) {
          return true;
        } else {
          console.log("valid error. not parentheses. out");
          return false;
        }
    }

    return isValid(s);
  }

  // leetcode 203. 移除链表元素
  removeElements (head, val) {

    /**
     * Definition for singly-linked list.
     * function ListNode(val) {
     *     this.val = val;
     *     this.next = null;
     * }
     */
    /**
     * @param {ListNode} head
     * @param {number} val
     * @return {ListNode}
     */
    var removeElements = function(head, val) {
    
      // 对头步进行特殊处理
      while(head !== null && head.val === val) {
        head = head.next;
      }

      // 处理后的头部如果为null 那直接返回
      if (head === null) {
        return null;
      }

      // 因为头部已经做了特殊处理， head即不为null 并且 head.val不等于null
      // 那么可以直接从 head的下一个节点开始判断。
      let prev = head;
      while(prev.next !== null) {
        if (prev.next.val === val) {
          let delNode = prev.next;
          prev.next = delNode.next;
          delNode = null;
        } else {
          prev = prev.next;
        }
      }

      return head;
    };
    
    var removeElements = function(head, val) {
      
      if (head === null) {
        return null;
      }

      let dummyHead = new ListNode(0);
      dummyHead.next = head;
      let cur = dummyHead;
      while (cur.next !== null) {
        if (cur.next.val === val) {
          cur.next = cur.next.next;
        } else {
          cur = cur.next;
        }
      }
      return dummyHead.next;
    };

    // 递归求解三种方式
    var removeElements = function(head, val) {

      // 解决最基本的问题
      if (head === null) {
        return null;
      }

      // 第一种解决方式
      //   let node = removeElements(head.next, val);

      //   if (head.val === val) {
      //     head = node;
      //   } else {
      //     head.next = node;
      //   }

      //   return head;
      
      // 第二种解决方式    
      // if (head.val === val) {
      //   head = removeElements(head.next, val);
      // } else {
      //   head.next = removeElements(head.next, val);
      // }
      // return head;
        
      // 第三种方式
      head.next = removeElements(head.next, val);
      if (head.val === val) {
        return head.next;
      } else {
        return head;
      }
    }

    // 尾递归的方式 失败 没有到达那个程度
    // var removeElements = function(head, val, node = null) {
    //   if (head === null) {
    //     return node;
    //   }


    //   return removeElements(head.next, val , node = head);

    // }
    
    // 深入理解递归过程
    var removeElements = function(head, val, depth = 0) {

      // 首次输出 开始调用函数
      let depthString = generateDepathString(depth);
      let info =  depthString + "Call: remove " + val + " in " + head;
      show(info);

      if (head === null) {
        // 第二次输出  解决最基本的问题时
        info = depthString + "Return ：" + head;
        show(info);

        return null;
      }

      let result = removeElements(head.next, val, depth + 1);

      // 第三次输出 将原问题分解为小问题
      info = depthString + "After： remove " + val + " ：" + result;
      show(info);

      let ret = null;
      if (head.val === val) {
        ret = result;
      } else {
        head.next = result;
        ret = head;
      }

      // 第四次输出 求出小问题的解
      info = depthString + "Return ：" + ret;
      show(info);

      return ret;
    }

    // 辅助函数 生成递归深度字符串
    function generateDepathString (depth) {
      let arrInfo = ``;
      for (var i = 0; i < depth; i++) {
        arrInfo += `-- `;// -- 表示深度，--相同则代表在同一递归深度
      }
      return arrInfo;
    }

    // 辅助函数 输出内容 到页面和控制台上
    function show (content) {
      document.body.innerHTML += `${content}<br /><br />`;
      console.log(content);
    }

    return removeElements(head, val);
  }

  // leetcode 804. 唯一摩尔斯密码词
  uniqueMorseRepresentations (words) {

    /**
     * @param {string[]} words
     * @return {number}
     * 使用自己的二分搜索树来实现
     */
    var uniqueMorseRepresentations = function(words) {
        // 摩斯码
        const codes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
        
        const myBinarySearchTreeSet = new MyBinarySearchTreeSet();
        let content = "";
        // 获取起始字符的aceii码，
        // 从而可以求出某个单词的每一个字符在字母表中占的位置索引，
        // 根据这些位置索引就可以在摩斯表中找到相应的摩斯码，
        // 一个单词就是一组摩斯码，然后使用set添加，就可以直接实现去重的操作了
        const start = "a".charCodeAt(0);
        for (const word of words) {
          for (const w of word) 
            content += codes[w.charCodeAt(0) - start];

          myBinarySearchTreeSet.add(content);
          content = "";
        }

        return myBinarySearchTreeSet.getSize();
    };

    /**
     * @param {string[]} words
     * @return {number}
     * 使用系统内置的Set集合类
     */
    var uniqueMorseRepresentations = function(words) {
        // 摩斯码
        const codes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
        
        const set = new Set();
        let content = "";
        // 获取起始字符的aceii码，
        // 从而可以求出某个单词的每一个字符在字母表中占的位置索引，
        // 根据这些位置索引就可以在摩斯表中找到相应的摩斯码，
        // 一个单词就是一组摩斯码，然后使用set添加，就可以直接实现去重的操作了
        const start = "a".charCodeAt(0);
        for (const word of words) {
          for (const w of word) 
            content += codes[w.charCodeAt(0) - start];

          set.add(content);
          content = "";
        }

        return set.size;
    };

    return uniqueMorseRepresentations(words);
  }

  // leetcode 349. 两个数组的交集
  intersection (nums1, nums2) {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    var intersection = function(nums1, nums2) {
        let set = new Set();
        let arr = [];

        for (const num of nums1)
          set.add(num);

        for (const num of nums2) {
          if (set.has(num)) {
            arr.push(num);
            set.delete(num);
          }
        }

        return arr;
    };

    return intersection(nums1, nums2);
  }

  // leetcode 350.两个数组的交集 II
  intersect (nums1, nums2) {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    var intersect = function(nums1, nums2) {
      let map = new Map();
      let arr = [];

      for (const num of nums1) {
        if (map.has(num))
          map.set(num, map.get(num) + 1);
        else
          map.set(num, 1);
      }

      for (const num of nums2) {
        if (map.has(num)) {
          arr.push(num);
          let result = map.get(num) - 1;
          map.set(num, result);

          if (result === 0)
            map.delete(num);
        }
      }

      return arr;
    };

    return intersect(nums1, nums2);
  }

  // leetcode 347. 前K个高频元素
  topKFrequent (nums, k) {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     * 原版
     */
    var topKFrequent = function(nums, k) {
        let map = new Map();
        // 统计 数组中每一个元素出现频率
        for (const num of nums) {
          if (map.has(num))
            map.set(num, map.get(num) + 1);
          else
            map.set(num, 1);
        }

        // 优先队列：使用的时候指定优先级比较的方式
        let queue = new MyPriorityQueue();
        // 变更优先队列中的定义优先级的方法
        queue.updateCompare((elementA, elementB) => {
          // 原的比较算法是 值越大 优先级越大
          // 现在改为 值越小 优先级越大
          if (elementA.value < elementB.value)
            return 1;
          else if (elementA.value > elementB.value)
            return -1;
          else
            return 0;
        });

        for (const key of map.keys()) {
          if (queue.getSize() < k)
            queue.enqueue({"key": key, "value": map.get(key)});
          else if (map.get(key) > queue.getFront().value) {
            queue.replaceFront({"key": key, "value": map.get(key)});
            // queue.dequeue();
            // queue.enqueue({"key": key, "value": map.get(key)});
          }
        }

        let result = [];
        for (var i = 0; i < k; i++) {
          result.push(queue.dequeue().key);
        }
        return result;
    };

    // 精简版
    var topKFrequent = function(nums, k) {
        let map = new Map();
        // 统计 数组中每一个元素出现频率
        for (const num of nums) {
          if (map.has(num))
            map.set(num, map.get(num) + 1);
          else
            map.set(num, 1);
        }

        // 优先队列：使用的时候指定优先级比较的方式
        let queue = new MyPriorityQueue();
        // 变更优先队列中的定义优先级的方法
        queue.updateCompare((keyA, keyB) => {
          // 原的比较算法是 值越大 优先级越大
          // 现在改为 值越小 优先级越大
          if (map.get(keyA) < map.get(keyB))
            return 1;
          else if (map.get(keyA) > map.get(keyB))
            return -1;
          else
            return 0;
        });

        for (const key of map.keys()) {
          if (queue.getSize() < k)
            queue.enqueue(key);
          else if (map.get(key) > map.get(queue.getFront())) {
            queue.replaceFront(key);
          }
        }

        let result = [];
        for (var i = 0; i < k; i++) {
          result.push(queue.dequeue());
        }
        return result;
    };

    return topKFrequent (nums, k);
  }

  // leetcode 303. 区域和检索-数组不可变
  NumArray (nums) {
    /**
     * @param {number[]} nums
     * 处理方式一：对原数组进行预处理操作
     */
    var NumArray = function(nums) {
        if (nums.length > 0) {
          this.data = new Array(nums.length + 1);
          this.data[0] = 0;
          for (var i = 0; i < nums.length; i++) {
            this.data[i + 1] = this.data[i] + nums[i];
          }
        }
    };

    /** 
     * @param {number} i 
     * @param {number} j
     * @return {number}
     */
    NumArray.prototype.sumRange = function(i, j) {
        return this.data[j + 1] - this.data[i];
    };

    /** 
     * Your NumArray object will be instantiated and called as such:
     * var obj = Object.create(NumArray).createNew(nums)
     * var param_1 = obj.sumRange(i,j)
     */
    
    /**
     * @param {number[]} nums
     * 处理方式二：使用线段树
     */
    var NumArray = function(nums) {
        if (nums.length > 0) {
          this.mySegmentTree = new MySegmentTree(nums);
        }
    };

    /** 
     * @param {number} i 
     * @param {number} j
     * @return {number}
     */
    NumArray.prototype.sumRange = function(i, j) {
        return this.mySegmentTree.query(i, j)
    };

    return new NumArray(nums);
  }

  // leetcode 307. 区域和检索 - 数组可修改
  NumArray2 (nums) {
    /**
     * @param {number[]} nums
     * 方式一：对原数组进行预处理操作
     */
    var NumArray = function(nums) {
        // 克隆一份原数组
        this.data = new Array(nums.length);
        for (var i = 0; i < nums.length; i++) {
          this.data[i] = nums[i]
        }

        if (nums.length > 0) {
          this.sum = new Array(nums.length + 1);
          this.sum[0] = 0;
          for (let i = 0; i < nums.length; i++)
            this.sum[i + 1] = this.sum[i] + nums[i];
        }
    };

    /** 
     * @param {number} i 
     * @param {number} val
     * @return {void}
     */
    NumArray.prototype.update = function(i, val) {
        this.data[i] = val;
        
        for (let j = 0; j < this.data.length; j++)
            this.sum[j + 1] = this.sum[j] + this.data[j];
    };

    /** 
     * @param {number} i 
     * @param {number} j
     * @return {number}
     */
    NumArray.prototype.sumRange = function(i, j) {
        return this.sum[j + 1] - this.sum[i];
    };

    /** 
     * Your NumArray object will be instantiated and called as such:
     * var obj = Object.create(NumArray).createNew(nums)
     * obj.update(i,val)
     * var param_2 = obj.sumRange(i,j)
     */
    
    /**
     * @param {number[]} nums
     * 方式二：对原数组进行预处理操作
     */
    var NumArray = function(nums) {
      this.tree = new MySegmentTree(nums);
    };

    /** 
     * @param {number} i 
     * @param {number} val
     * @return {void}
     */
    NumArray.prototype.update = function(i, val) {
      this.tree.set(i, val);
    };

    /** 
     * @param {number} i 
     * @param {number} j
     * @return {number}
     */
    NumArray.prototype.sumRange = function(i, j) {
        return this.tree.query(i, j);
    };

    return new NumArray(nums);
  }

  // leetcode 208.实现 Trie (前缀树)
  Trie () {

    // 数组版的Trie 静态Trie
    function ArrayTrie () {
      // TrieNode
      var TrieNode = function (isWord = false) {
        this.isWord = isWord;
        this.next = new Array(26);
      }

      /**
       * Initialize your data structure here.
       */
      var Trie = function() {
          this.root = new TrieNode();
      };

      /**
       * Inserts a word into the trie. 
       * @param {string} word
       * @return {void}
       */
      Trie.prototype.insert = function(word) {
          // 指定游标
          let cur = this.root;

          for (const c of word) {
            const index = c.charCodeAt(0) - 97;
            const array = cur.next;
            if (array[index] === null || array[index] === undefined)
              array[index] = new TrieNode();
            cur = array[index];
          }

          if (!cur.isWord)
            cur.isWord = true;
      };

      /**
       * Returns if the word is in the trie. 
       * @param {string} word
       * @return {boolean}
       */
      Trie.prototype.search = function(word) {
          // 指定游标
          let cur = this.root;

          for (const c of word) {
            const index = c.charCodeAt(0) - 97;
            const array = cur.next;
            if (array[index] === null || array[index] === undefined)
              return false;
            cur = array[index];
          }

          return cur.isWord;
      };

      /**
       * Returns if there is any word in the trie that starts with the given prefix. 
       * @param {string} prefix
       * @return {boolean}
       */
      Trie.prototype.startsWith = function(prefix) {
          // 指定游标
          let cur = this.root;

          for (const c of prefix) {
            const index = c.charCodeAt(0) - 97;
            const array = cur.next;
            if (array[index] === null || array[index] === undefined)
              return false;
            cur = array[index];
          }

          return true;
      };

      /** 
       * Your Trie object will be instantiated and called as such:
       * var obj = Object.create(Trie).createNew()
       * obj.insert(word)
       * var param_2 = obj.search(word)
       * var param_3 = obj.startsWith(prefix)
       */
      
      return new Trie();
    }

    // 映射版的Trie 动态Trie
    function MapTrie () {

      // TrieNode
      var TrieNode = function (isWord = false) {
        this.isWord = isWord;
        this.next = new Map();
      }
      /**
       * Initialize your data structure here.
       */
      var Trie = function() {
          this.root = new TrieNode();
      };

      /**
       * Inserts a word into the trie. 
       * @param {string} word
       * @return {void}
       */
      Trie.prototype.insert = function(word) {
          // 指定游标
          let cur = this.root;

          for (const c of word) {
            const map = cur.next;
            if (!map.has(c))
              map.set(c, new TrieNode());
            cur = map.get(c);
          }

          if (!cur.isWord)
            cur.isWord = true;
      };

      /**
       * Returns if the word is in the trie. 
       * @param {string} word
       * @return {boolean}
       */
      Trie.prototype.search = function(word) {
          // 指定游标
          let cur = this.root;

          for (const c of word) {
            const map = cur.next;
            if (!map.has(c))
              return false;
            cur = map.get(c);
          }

          return cur.isWord;          
      };

      /**
       * Returns if there is any word in the trie that starts with the given prefix. 
       * @param {string} prefix
       * @return {boolean}
       */
      Trie.prototype.startsWith = function(prefix) {
          // 指定游标
          let cur = this.root;

          for (const c of prefix) {
            const map = cur.next;
            if (!map.has(c))
              return false;
            cur = map.get(c);
          }
          
          return true;    
      };

      /** 
       * Your Trie object will be instantiated and called as such:
       * var obj = Object.create(Trie).createNew()
       * obj.insert(word)
       * var param_2 = obj.search(word)
       * var param_3 = obj.startsWith(prefix)
       */
      
      return new Trie();
    }

    // return new ArrayTrie();
    return new MapTrie();
  }

  // leetcode 211.添加与搜索单词 - 数据结构设计
  WordDictionary () {

    // 数组版
    function ArrayWordDictionary() {
      // TrieNode
      var TrieNode = function () {
        this.isWord = false;
        this.next = new Array(26);
      }

      /**
       * Initialize your data structure here.
       */
      var WordDictionary = function() {
          this.root = new TrieNode();
      };

      /**
       * Adds a word into the data structure. 
       * @param {string} word
       * @return {void}
       */
      WordDictionary.prototype.addWord = function(word) {
          // 指定游标
          let cur = this.root;

          for (const c of word) {
            const index = c.charCodeAt(0) - 97;
            const array = cur.next;
            if (!array[index])
              array[index] = new TrieNode();
            cur = array[index];
          }

          if (!cur.isWord)
            cur.isWord = true;      
      };

      /**
       * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
       * @param {string} word
       * @return {boolean}
       */
      WordDictionary.prototype.search = function(word) {
         return this.recursiveMatch(this.root, word, 0);
      };

      // 递归搜索
      WordDictionary.prototype.recursiveMatch = function (node, word, index) {
        if (index === word.length)
          return node.isWord;

        const letterChar = word[index];

        if (letterChar !== ".") {
          const i = letterChar.charCodeAt(0) - 97;

          if (!node.next[i])
            return false;
          return this.recursiveMatch(node.next[i], word, index + 1);
        } else {
          for (const next of node.next) {
            if (next === undefined)
              continue;
            if (this.recursiveMatch(next, word, index + 1))
              return true;
          }
          return false;
        }
      }

      /** 
       * Your WordDictionary object will be instantiated and called as such:
       * var obj = Object.create(WordDictionary).createNew()
       * obj.addWord(word)
       * var param_2 = obj.search(word)
       */
      return new WordDictionary();
    }

    // 映射版
    function MapWordDictionary() {
      // TrieNode
      var TrieNode = function (isWord = false) {
        this.isWord = isWord;
        this.next = new Map();
      }
      /**
       * Initialize your data structure here.
       */
      var WordDictionary = function() {
          this.root = new TrieNode();
      };

      /**
       * Adds a word into the data structure. 
       * @param {string} word
       * @return {void}
       */
      WordDictionary.prototype.addWord = function(word) {
          let cur = this.root;

          for (const c of word) {
            if (!cur.next.has(c))
              cur.next.set(c, new TrieNode());
            cur = cur.next.get(c);
          }

          if (!cur.isWord)
            cur.isWord = true;
      };

      /**
       * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
       * @param {string} word
       * @return {boolean}
       */
      WordDictionary.prototype.search = function(word) {
          return this.recursiveMatch(this.root, word, 0);
      };
      WordDictionary.prototype.recursiveMatch = function(node, word, index) {
          if (index === word.length)
            return node.isWord;

          const letterChar = word[index];
          if (letterChar !== ".") {
            const map = node.next;
            if (!map.has(letterChar))
              return false;
            return this.recursiveMatch(map.get(letterChar), word, index + 1);
          } else {
            const map = node.next;
            const keys = map.keys();
            for (const key of keys)
              if (this.recursiveMatch(map.get(key), word, index + 1))
                return true;
            return false;
          }
      };

      /** 
       * Your WordDictionary object will be instantiated and called as such:
       * var obj = Object.create(WordDictionary).createNew()
       * obj.addWord(word)
       * var param_2 = obj.search(word)
       */
      return new WordDictionary();
    }

    // return new ArrayWordDictionary();
    return new MapWordDictionary();
  }

  // leetcode 677. 键值映射
  MapSum () {

    // 数组版
    function ArrayVersion () {
      var TrieNode = function (value) {
        this.value = value;
        this.next = new Array(26);
      }

      /**
       * Initialize your data structure here.
       */
      var MapSum = function() {
          this.root = new TrieNode(0);
      };

      /** 
       * @param {string} key 
       * @param {number} val
       * @return {void}
       */
      MapSum.prototype.insert = function(key, val) {
          this.__insert(this.root, key, val, 0);
      };
      MapSum.prototype.__insert = function(node, word, value, index) {
          if (index === word.length) {
            node.value = value;
            return;
          }

          const array = node.next;
          const i = word[index].charCodeAt(0) - 97;
          if (!array[i])
            array[i] = new TrieNode(0);
          this.__insert(array[i], word, value, index + 1);
      };

      /** 
       * @param {string} prefix
       * @return {number}
       */
      MapSum.prototype.sum = function(prefix) {
        // 先进行前缀匹配
        let cur = this.root;
        for (const c of prefix) {
          const index = c.charCodeAt(0) - 97;
          if (!cur.next[index])
            return 0;
          cur = cur.next[index];
        }

        // 前缀匹配成功之后 进行剩余单词的匹配 求和
        return this.__sum(cur)
      };

      MapSum.prototype.__sum = function(node) {
        let result = node.value || 0;

        for (const next of node.next) {
          if (!next)
            continue;
          result += this.__sum(next);
        }

        return result;
      };

      /** 
       * Your MapSum object will be instantiated and called as such:
       * var obj = Object.create(MapSum).createNew()
       * obj.insert(key,val)
       * var param_2 = obj.sum(prefix)
       */
      
      return new MapSum();
    }

    // 映射版
    function MapVersion () {
      var TrieNode = function (value) {
        this.value = value;
        this.next = new Map();
      }
      /**
       * Initialize your data structure here.
       */
      var MapSum = function() {
          this.root = new TrieNode();
      };

      /** 
       * @param {string} key 
       * @param {number} val
       * @return {void}
       */
      MapSum.prototype.insert = function(key, val) {
          let cur = this.root;

          for (const c of key) {
            const map = cur.next;
            if (!map.has(c))
              map.set(c, new TrieNode());
            cur = map.get(c);
          }

          cur.value = val;
      };


      /** 
       * @param {string} prefix
       * @return {number}
       */
      MapSum.prototype.sum = function(prefix) {
          // 先处理前缀部分
          let cur = this.root;

          for (const c of prefix) {
            const map = cur.next;
            if (!map.has(c))
              return 0;
            cur = map.get(c);
          }
          
          return this.__sum(cur);
      };
      MapSum.prototype.__sum = function(node) {
          let result = node.value || 0;

          const map = node.next;
          const keys = map.keys();
          for (const key of keys)
            result += this.__sum(map.get(key));

          return result;
      };



      /** 
       * Your MapSum object will be instantiated and called as such:
       * var obj = Object.create(MapSum).createNew()
       * obj.insert(key,val)
       * var param_2 = obj.sum(prefix)
       */
      return new MapSum();
    }

    // return new ArrayVersion();
    return new MapVersion();
  }

  // leetcode 387. 字符串中的第一个唯一字符
  firstUniqChar (s) {
    /**
     * @param {string} s
     * @return {number}
     */
    var firstUniqChar = function(s) {
        const hashTable = new Array(26);

        for (var i = 0; i < hashTable.length; i++)
          hashTable[i] = 0;

        for (const c of s)
          hashTable[c.charCodeAt(0) - 97] ++;

        for (var i = 0; i < hashTable.length; i++)
          if (hashTable[s[i].charCodeAt(0) - 97] === 1)
            return i;

        return -1;
    };
    /**
     * @param {string} s
     * @return {number}
     */
    var firstUniqChar = function(s) {
      const hashTable = new Array(26);
      const letterTable = {};

      for (var i = 0; i < hashTable.length; i++) {
         letterTable[String.fromCharCode(i + 97)] = i;
         hashTable[i] = 0;
      }
        
      for (const c of s)
        hashTable[letterTable[c]] ++;
      
      for (var i = 0; i < s.length; i++) 
        if (hashTable[letterTable[s[i]]] === 1)
          return i;

      return -1;
    };

    return firstUniqChar(s);
  }
}

// Student
class Student {
  constructor (grade, classId, studentName, studentScore) {
    this.name = studentName;
    this.score = studentScore;
    this.grade = grade;
    this.classId = classId;
  }

  //@Override hashCode 2018-11-25-jwl
  hashCode () {
    // 选择进制
    const B = 31;

    // 计算hash值
    let hash = 0;
    hash = hash * B + this.getCode(this.name.toLowerCase());
    hash = hash * B + this.getCode(this.score);
    hash = hash * B + this.getCode(this.grade);
    hash = hash * B + this.getCode(this.classId);

    // 返回hash值
    return hash;
  }

  //@Override equals 2018-11-25-jwl
  equals (obj) {
    // 三重判断
    if (!obj)
      return false;
    if (this === obj)
      return true;
    if (this.valueOf() !== obj.valueOf())
      return false;

    // 对属性进行判断
    return this.name === obj.name && this.score === obj.score &&
           this.grade === obj.grade && this.classId === obj.classId;
  }

  // 拆分字符生成数字 -
  getCode (s) {
    
    s = s + "";
    let result = 0;
    // 遍历字符 计算结果
    for (const c of s)
      result += c.charCodeAt(0);

    // 返回结果
    return result;
  }

  //@Override toString 2018-10-19-jwl
  toString () {
    let studentInfo = `Student(name: ${this.name}, score: ${this.score})`;
    return studentInfo;
  }
}

// 页面加载完毕
window.onload = function () {
  // 执行主函数
  new Main();
}
