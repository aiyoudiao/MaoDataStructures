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

    // 拷贝一个int型的数组
    int* copyIntArray (int arr[], int n) {
        int* newArr = new int[n];
        // 头指针 + 尾指针
        copy(arr, arr + n, newArr);
        return newArr;
    }

    // 打印数组
    template<typename T>
    void printArray (T arr[], int n) {
        for (int i = 0; i < n; i++)
            cout<<arr[i]<<" ";
        cout<<endl;

        return;
    }

    // 测试排序是否成功 从小到大排序的正确性
    template<typename T>
    bool isSorted (T arr[], int n) {
        // 这次遍历如果全部合格 就说明排序正确
        for (int i = 1; i < n; ++i)
            if (arr[i -1] > arr[i])
                return false;

        return true;
    }

    // 测试排序算法
    template<typename T>
    void testSort (string sortName, void(*sort)(T[], int), T arr[], int n) {
        // 获取起始时间
        clock_t startTime = clock();

        // 进行一次排序
        sort(arr, n);

        // 获取结束时间
        clock_t endTime = clock();

        // 放在这里 在性能测试后 再检测是否合格 ，不合格就会自动中断
        assert(isSorted(arr, n));

        // double(endTime - startTime) / CLOCKS_PER_SEC中CLOCKS_PER_SEC 表示一个宏，
        // 也就是每一秒钟所运行的时钟周期的个数， 而endTime - startTime 表示运行了多少个时钟周期
        // 最后结果是 秒
        cout << sortName <<" ：" << double(endTime - startTime) / CLOCKS_PER_SEC << " s" << endl;
    }
}
#endif //INC_001_SORTING_BASIC_SORTTESTHELPER_H
