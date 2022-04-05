#include <iostream>
#include <algorithm>
#include <string>
// 老的标准 要使用这个swap方法，
// 那么可以引入algorithm这个标准库

// 使用双引号的方式进行引用
#include "SortTestHelper.h"
#include "SelectionSort.h"
#include "InsertionSort.h"
#include "MergeSort.h"

using namespace std;

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

int main() {

    int n = 100000;
    int *arr = SortTestHelper::generateRandomArray(n, 0, n);
    int *clonedArr = SortTestHelper::copyIntArray(arr, n);
    int *clonedArr2 = SortTestHelper::copyIntArray(arr, n);
    cout<<"Test for random array, size = "<<n<<", random range [0, "<<n<<"]"<<endl;

//    Insertion Sort ：9.046 s
//    Merge Sort ：0.032 s
//    Merge Sort Bottom Up ：0.015 s
    SortTestHelper::testSort("Insertion Sort", insertionSort, arr, n);
    SortTestHelper::testSort("Merge Sort", mergeSort, clonedArr, n);
    SortTestHelper::testSort("Merge Sort Bottom Up", mergeSortBU, clonedArr2, n);

    // 释放数组的空间，如果不释放就会出现内存泄漏的问题。
    delete[] arr;
    delete[] clonedArr;
    delete[] clonedArr2;

    int *array = SortTestHelper::generateNearlyOrderedArray(n, 5000);
    int *clonedArray = SortTestHelper::copyIntArray(array, n);
    int *clonedArray2 = SortTestHelper::copyIntArray(array, n);
    cout<<"Test for nearly ordered, size = "<<n<<", range [0, "<<n<<"]"<<endl;

//    Insertion Sort ：1.235 s
//    Merge Sort ：0.015 s
//    Merge Sort Bottom Up ：0.016 s
    SortTestHelper::testSort("Insertion Sort", insertionSort, array, n);
    SortTestHelper::testSort("Merge Sort", mergeSort, clonedArray, n);
    SortTestHelper::testSort("Merge Sort Bottom Up", mergeSortBU, clonedArray2, n);

    // 释放数组的空间，如果不释放就会出现内存泄漏的问题。
    delete[] array;
    delete[] clonedArray;
    delete[] clonedArray2;

    return 0;
}