//
// Created by LENOVO on 2018/11/28.
//

#ifndef INC_002_SORTING_ADVANCE_MERGESORT_H
#define INC_002_SORTING_ADVANCE_MERGESORT_H

#include <iostream>
#include <algorithm>

#include "InsertionSort.h"

using namespace std;

// 将 arr[l...mid] 和 arr[mid+1...r] 两部分进行合并。
template<typename T>
void __merge (T arr[], int l, int mid, int r) {

    // 辅助空间
    T aux[r - l + 1];
    for (int i = l; i <= r ; ++i)
        aux[i - l] = arr[i];

    // 两部分数组的头部指针
    int i = l, j = mid + 1;

    // 遍历一遍数组中的内容
    for (int k = l; k <=  r; ++k) {
        // 左边头部指针不能大于mid
        if (i > mid) {
            arr[k] = aux[j - l];
            j ++;
        } else if (j > r) { // 右边头部指针不能大于 r
            arr[k] = aux[i - l];
            i ++;
        }
        else if (aux[i - l] < aux[j - l]) { // 正常情况下 左边头部指针与右边头部指针进行对比
            arr[k] = aux[i - l];
            i ++; // 那边头部指针的元素进入了数组中就将那边头部指针向后移动一位。
        } else {
            arr[k] = aux[j - l];
            j ++;
        }
    }
}

// 递归使用归并排序，对arr[l..l]的范围进行排序 前闭后闭这个区间范围。
template<typename T>
void __mergeSort (T arr[], int l, int r) {

//    if (l >= r)
//        return;

    if (r - l <= 15) { // 优化
        insertionSort(arr, l, r);
        return;
    }

//    int mid = (l + r) / 2 可能会出现整型溢出
    int mid = l + (r - l) / 2;

    __mergeSort(arr, l, mid);
    __mergeSort(arr, mid + 1, r);

    if (arr[mid] > arr[mid + 1]) // 优化操作
        __merge(arr, l, mid, r);
}

// 自顶向下的递归的归并排序
template<typename T>
void mergeSort (T arr[], int n) {
    // 在c++中不要使用__来命名，因为编译器内部使用了大量的__，所以可能产生命名冲突
    // 这里是方便 显眼一点，__表示私有
    __mergeSort(arr, 0, n - 1);
}
#endif //INC_002_SORTING_ADVANCE_MERGESORT_H
