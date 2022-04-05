//
// Created by LENOVO on 2018/11/28.
//
#ifndef INC_002_SORTING_ADVANCE_QUICKSORT_H
#define INC_002_SORTING_ADVANCE_QUICKSORT_H

#include <iostream>
#include <algorithm>
#include <ctime>

#include "InsertionSort.h"

using namespace std;

// 对 arr[l...r]部分的元素进行partition操作
// 返回p，使得arr[l...p-1] < arr[p]; arr[p+1...r] > arr[p]
template <typename T>
int __partition (T arr[], int l, int r) {

    //生成一个 从[l, r]之间的一个索引，这个索引是前闭后闭的
    // 之后只需要让随机生成的这个索引的元素和 当前最左侧的那个元素进行一下交换即可
    // 那么之后使用的标定元素就是 这个随机生成的索引位置的元素
    swap(arr[rand() % (r - l + 1) + l], arr[l]); // 优化二

    T v = arr[l];

    // arr[l+1...j] < v ; arr[j+1...i) > v
    int j = l;
    for (int i = l + 1; i <= r; i ++) {
        if (arr[i] < v) {
            swap(arr[j + 1], arr[i]);
            j ++;
        }
    }

    swap(arr[l], arr[j]);

    return j;
}

// 对 arr[l...r]部分的元素进行快速排序
template <typename T>
void __quickSort (T arr[], int l, int r) {

//    if (l >= r)
//        return;
    if (r - l <= 15) { // 优化一：在合适时机使用插入排序进行优化
        insertionSort(arr, l ,r);
        return;
    }

    // 这个操作会返回一个索引值
    int p = __partition(arr, l, r);
    __quickSort(arr, l, p - 1);
    __quickSort(arr, p + 1, r);
}

template <typename T>
void quickSort (T arr[], int n) {

    srand(time(NULL));
    __quickSort(arr, 0, n - 1);
}

#endif //INC_002_SORTING_ADVANCE_QUICKSORT_H
