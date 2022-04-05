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


// parent(i) = (i - 1) / 2; leftChild(i) = i * 2 + 1; rightChild = i * 2 + 2;
// 堆的下沉操作  辅助函数
template <typename T>
// n 为数组中元素个数， i 为 要进行下沉的堆元素的索引 , 数组索引从0开始，所以最后一个位置的元素的索引是 n - 1
void __shiftDown(T arr[], int n, int i) {

    // (2 * i + 1 < n) 至少要有左孩子，
    // 堆中节点是从左向右的方向排列的，堆是完全二叉树。
    while (2 * i + 1 < n) {
        int max = 2 * i + 1; // 默认最大值索引为 左孩子，左孩子 + 1就是右孩子
        // 查看右孩子是否存在 并且 左孩子值小于右孩子
        if (max + 1 < n && arr[max] < arr[max + 1])
            max += 1; // 切换为右孩子
        // 当前i位置的元素大于等于原节点的左右孩子中最大的元素的值
        // 循环可以结束了，因为当前位置就是合适的
        if (arr[i] >= arr[max])
            break;
        swap(arr[i], arr[max]);
        i = max;
    }
}
// 堆的原地排序：性能最好
template <typename T>
void heapSortInSitu (T arr[], int n) {
    // 最后一个叶子节点的索引
    int last = n - 1;

    // 对原数组进行 heapify操作
    for (int i = (n - 1) / 2; i >= 0; i --) {
        // 数组对象 内部元素的个数 以及当前的遍历到的非叶子节点索引值
        // 对每一个非叶子节点进行下沉操作，从而维护堆的性质
        __shiftDown(arr, n, i);
    }

    // 开始进行 让堆尾的元素与堆顶的元素进行交换，
    // 也就是不断的将最大值放到最后面，从而完成排序
    for (int i = n - 1; i > 0; i --) {
        // 头尾进行交换，最大值放到了最后面
        swap(arr[0], arr[i]);

        // 让堆顶的元素进行下沉操作
        __shiftDown(arr, i, 0);
    }
}

#endif //INC_003_HEAP_HEAPSORT_H
