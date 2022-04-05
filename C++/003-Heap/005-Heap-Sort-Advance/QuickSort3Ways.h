//
// Created by LENOVO on 2018/12/2.
//

#ifndef INC_003_HEAP_QUICKSORT3WAYS_H
#define INC_003_HEAP_QUICKSORT3WAYS_H
#include <iostream>
#include <algorithm>
#include <string>

// 使用双引号的方式进行引用
#include "InsertionSort.h"

using namespace std;

// 对 arr[l...r]部分的元素进行快速排序
template <typename T>
void __quickSort3Ways (T arr[], int l, int r) {

//    if (l >= r)
//        return;
    if (r - l <= 15) { // 优化一：在合适时机使用插入排序进行优化
        insertionSort(arr, l ,r);
        return;
    }

    //生成一个 从[l, r]之间的一个索引，这个索引是前闭后闭的
    // 之后只需要让随机生成的这个索引的元素和 当前最左侧的那个元素进行一下交换即可
    // 那么之后使用的标定元素就是 这个随机生成的索引位置的元素
    swap(arr[rand() % (r - l + 1) + l], arr[l]); // 优化二

    T v = arr[l];

    int lt = l; // arr[l+1...lt] < v
    int gt = r + 1; // arr[gt...r] > v
    int i = l + 1; // arr[lt+1...i] == v

    while (i < gt) {
        // 整个过程有三种情况
        if (arr[i] < v) { // arr[l+1...lt] < v
            swap(arr[i], arr[lt + 1]);
            lt ++;
            i ++;
        } else if (arr[i] > v) { // arr[gt...r] > v
            swap(arr[i], arr[gt - 1]);
            gt --;
        } else { // arr[lt+1...i] == v
            i ++;
        }
    }

    // 将标定值放到等于v的第一个元素
    swap(arr[l], arr[lt]);

    __quickSort3Ways(arr, l, lt - 1);
    __quickSort3Ways(arr, gt, r);
}

template <typename T>
void quickSort3Ways (T arr[], int n) {

    srand(time(NULL));
    __quickSort3Ways(arr, 0, n - 1);
}

#endif //INC_003_HEAP_QUICKSORT3WAYS_H
