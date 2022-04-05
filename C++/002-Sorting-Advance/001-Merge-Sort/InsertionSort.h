//
// Created by LENOVO on 2018/11/28.
//

#ifndef INC_001_SORTING_BASIC_INSERTIONSORT_H
#define INC_001_SORTING_BASIC_INSERTIONSORT_H

#include <iostream>
#include <algorithm>

using namespace std;

template<typename T>
// 模板函数 也就是泛型的定义方式
// 插入排序
void insertionSort (T arr[], int n) {
////    // 方式一
//    for (int i = 0; i < n - 1; ++i) {
//        for (int j = i + 1; j >= 0; --j) {
//            if (arr[j] < arr[j - 1])
//                swap(arr[j], arr[j - 1]);
//            else
//                break;
//        }
//    }

//    // 方式二
//    for (int i = 1; i < n; ++i) {
//
//        // 寻找元素arr[i]合适的位置
//        for (int j = i; j > 0; --j) {
//            // 判断： 当前位置元素是否比前面一个元素要小
//            if (arr[j] < arr[j - 1])
//                swap(arr[j], arr[j - 1]);
//            else // 走到这里就说明 已经插入到合适的位置了，那么就可以放心的进行下一次循环了。
//                break;
//        }
//    }

//    // 方式三
//    for (int i = 1; i < n; ++i)
//        for (int j = i; j > 0 && arr[j] < arr[j - 1]; --j)
//           swap(arr[j], arr[j - 1]);

    // 方式四
    for (int i = 1; i < n; i ++) {
        // 寻找元素arr[i]合适的插入位置
        T element = arr[i];
        int j;// 保存元素element应该插入的位置
        for (j = i; j > 0 && arr[j - 1] > element ; j --)
            arr[j] = arr[j - 1];
        arr[j] = element;
    }
}

#endif //INC_001_SORTING_BASIC_INSERTIONSORT_H
