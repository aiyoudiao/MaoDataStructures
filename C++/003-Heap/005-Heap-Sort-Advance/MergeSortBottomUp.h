//
// Created by LENOVO on 2018/11/28.
//

#ifndef INC_002_SORTING_ADVANCE_MERGESORTBOTTOMUP_H
#define INC_002_SORTING_ADVANCE_MERGESORTBOTTOMUP_H

#include <iostream>

#include "InsertionSort.h"
#include "MergeSort.h"

using namespace std;

// 自底向上的归并排序
template <typename T>
void mergeSortBU (T arr[], int n) {

    // 没有处理越界问题的时候的代码
//    // 不断的增加size的大小，直到这个size等于n，
//    for (int size = 1; size <= n ; size += size) {
//        // 每次跨过两个size的区域，因为这两个size区域要进行合并操作
//        for (int i = 0; i < n; i += size + size) {
//            __merge(arr, i, i + size - 1, i + size + size - 1);
//        }
//    }


//    // 方式一
//    // 不断的增加size的大小，直到这个size等于n，
//    for (int size = 1; size <= n ; size += size) {
//        // 每次跨过两个size的区域，因为这两个size区域要进行合并操作
//        for (int i = 0; i + size < n; i += size + size) {
//            __merge(arr, i, i + size - 1, min(i + size + size - 1, n - 1));
//        }
//    }

    // 优化版
    // 不断的增加size的大小，直到这个size等于n，
    for (int size = 1; size <= n ; size += size) {
        // 每次跨过两个size的区域，因为这两个size区域要进行合并操作
        for (int i = 0; i + size < n; i += size + size) {
            int r = min(i + size + size - 1, n - 1);
            int l = i;
            if ( r - l <= 15) { // 优化 一
                insertionSort(arr, i, r);
                continue;
            }

            // 优化二
            if (arr[l + size - 1] > arr[l + size])  // 归并之前的判断
                __merge(arr, l, l + size - 1, r);
        }
    }
}
#endif //INC_002_SORTING_ADVANCE_MERGESORTBOTTOMUP_H
