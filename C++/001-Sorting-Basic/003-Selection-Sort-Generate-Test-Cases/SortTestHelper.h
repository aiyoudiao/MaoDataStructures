//
// Created by LENOVO on 2018/11/27.
//

#ifndef INC_001_SORTING_BASIC_SORTTESTHELPER_H
#define INC_001_SORTING_BASIC_SORTTESTHELPER_H

#include <iostream>
#include <ctime>
#include <cassert>

using namespace std;

// 将这些测试函数放入一个新的命名空间中
// 方便使用 ，SortTestHelper 辅助 排序函数的测试
namespace SortTestHelper {
    // 返回一个随机生成有n个元素的数组  随机范围 rangeL 至 rangeR 这个范围是前闭后闭的
    int* generateRandomArray (int n, int rangeL, int rangeR) {
        // 这两个值要符合要求，不然就不执行下面的代码，并且报错
        assert(rangeL <= rangeR);

        int *arr = new int[n];

        // 设置随机种子 将当前的时间作为随机数的种子 来进行随机种子设置
        srand(time(NULL));
        for (int i = 0; i < n; ++i) {
            // 使用rand方法进行随机整数的设置
            // 最后机上 rangeL 这样的一个偏移 就实现了生成rangeL 至 rangeR这个范围的随机数
            // 这方式是一个标准的方式。
            arr[i] = rand() % (rangeL - rangeR + 1) + rangeL;
        }
        return arr;
    }

    template<typename T>
    void printArray (T arr[], int n) {
        for (int i = 0; i < n; i++)
            cout<<arr[i]<<" ";
        cout<<endl;

        return;
    }
}
#endif //INC_001_SORTING_BASIC_SORTTESTHELPER_H
