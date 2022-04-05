#include <iostream>
#include <algorithm>
#include <string>
// 使用双引号的方式进行引用
#include "Student.h"
#include "SortTestHelper.h"

// 老的标准 要使用这个swap方法，
// 那么可以引入algorithm这个标准库

using namespace std;
template<typename T>
// 模板函数 也就是泛型的定义方式

// 选择排序
void selectionSort (T arr[], int n) {
    for (int i = 0; i < n; i ++) {

        // 寻找[i, n] 区间里的最小值
        int minIndex = i;
        for (int j = i + 1; j < n; j ++)
            if (arr[j] < arr[minIndex])
                minIndex = j;
        
        // 交换数组中两个位置的变量
        // swap是c++ 标准库中内置的函数
        // 这个函数在 c++11标准中 std这个空间中
        swap(arr[i], arr[minIndex]);
    }
}
int main() {
    int n = 10000;
    int *arr = SortTestHelper::generateRandomArray(n, 0, n);
//    selectionSort(arr, n);
//    SortTestHelper::printArray(arr, n);

    SortTestHelper::testSort("Selection Sort", selectionSort, arr, n);

    // 释放数组的空间，如果不释放就会出现内存泄漏的问题。
    delete[] arr;

    return 0;
}