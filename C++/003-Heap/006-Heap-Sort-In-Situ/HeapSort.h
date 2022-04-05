//
// Created by LENOVO on 2018/12/2.
//

#ifndef INC_003_HEAP_HEAPSORT_H
#define INC_003_HEAP_HEAPSORT_H

#include "MaxHeap.h"
// 堆排序
template <typename T>
void heapSort (T arr[], int n) {
    MaxHeap<T> maxHeap = MaxHeap<T>(n);

    // 将数组中的元素存到堆中
    for (int i = 0; i < n; i ++)
        maxHeap.insert(arr[i]);

    // 将堆中的元素放入数组中
    for (int i = n - 1; i >= 0; i --)
        arr[i] = maxHeap.extractMax();
}

// 堆排序2 heapify
template <typename T>
void heapSort2 (T arr[], int n) {
    MaxHeap<T> maxHeap = MaxHeap<T>(arr, n);
//
//    // 将数组中的元素存到堆中
//    for (int i = 0; i < n; i ++)
//        maxHeap.insert(arr[i]);

    // 将堆中的元素放入数组中
    for (int i = n - 1; i >= 0; i --)
        arr[i] = maxHeap.extractMax();
}
#endif //INC_003_HEAP_HEAPSORT_H
