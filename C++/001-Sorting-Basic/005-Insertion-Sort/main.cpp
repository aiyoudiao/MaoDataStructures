#include <iostream>
#include <algorithm>
#include <string>
// 老的标准 要使用这个swap方法，
// 那么可以引入algorithm这个标准库

// 使用双引号的方式进行引用
#include "Student.h"
#include "SortTestHelper.h"
#include "SelectionSort.h"

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
    
    // 方式三
    for (int i = 1; i < n; ++i)
        for (int j = i; j > 0 && arr[j] < arr[j - 1]; --j)
           swap(arr[j], arr[j - 1]);
}

int main() {
    int n = 10000;
    int *arr = SortTestHelper::generateRandomArray(n, 0, n);
    int *clonedArr = SortTestHelper::copyIntArray(arr, n);

    // SelectionSort.h没有声明命名空间，所以引入之后可以直接使用里面的方法
    SortTestHelper::testSort("Selection Sort", selectionSort, arr, n);
    SortTestHelper::testSort("Insertion Sort", insertionSort, clonedArr, n);
    // Selection Sort ：0.187 s
    // Insertion Sort ：0.344 s

    // 释放数组的空间，如果不释放就会出现内存泄漏的问题。
    delete[] arr;
    delete[] clonedArr;

    return 0;
}