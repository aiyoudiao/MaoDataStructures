//
// Created by LENOVO on 2018/11/27.
//

#ifndef INC_001_SORTING_BASIC_SELECTIONSORT_H
#define INC_001_SORTING_BASIC_SELECTIONSORT_H

#include <iostream>
#include <algorithm>

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

#endif //INC_001_SORTING_BASIC_SELECTIONSORT_H
