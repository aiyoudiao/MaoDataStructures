#include <iostream>
#include <algorithm>
#include <string>
// 老的标准 要使用这个swap方法，
// 那么可以引入algorithm这个标准库

// 使用双引号的方式进行引用
#include "Student.h"
#include "SortTestHelper.h"
#include "SelectionSort.h"
#include "InsertionSort.h"

int main() {
//    int n = 10000;
//    int *arr = SortTestHelper::generateRandomArray(n, 0, n);
//    int *clonedArr = SortTestHelper::copyIntArray(arr, n);
//
//    // SelectionSort.h没有声明命名空间，所以引入之后可以直接使用里面的方法
//    SortTestHelper::testSort("Selection Sort", selectionSort, arr, n);
//    SortTestHelper::testSort("Insertion Sort", insertionSort, clonedArr, n);
//    // Selection Sort ：0.171 s
//    // Insertion Sort ：0.094 s
//
//    // 释放数组的空间，如果不释放就会出现内存泄漏的问题。
//    delete[] arr;
//    delete[] clonedArr;

    int n = 100000;
    int *arr = SortTestHelper::generateNearlyOrderedArray(n, 100);
    int *clonedArr = SortTestHelper::copyIntArray(arr, n);

    // SelectionSort.h没有声明命名空间，所以引入之后可以直接使用里面的方法
    SortTestHelper::testSort("Selection Sort", selectionSort, arr, n);
    SortTestHelper::testSort("Insertion Sort", insertionSort, clonedArr, n);
    // Selection Sort ：15.968 s
    // Insertion Sort ：0.032 s

    // 释放数组的空间，如果不释放就会出现内存泄漏的问题。
    delete[] arr;
    delete[] clonedArr;

    return 0;
}