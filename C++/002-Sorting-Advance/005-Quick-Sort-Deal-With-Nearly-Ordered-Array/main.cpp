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
#include "MergeSortBottomUp.h"

using namespace std;

// 对 arr[l...r]部分的元素进行partition操作
// 返回p，使得arr[l...p-1] < arr[p]; arr[p+1...r] > arr[p]
template <typename T>
int __partition (T arr[], int l, int r) {

    //生成一个 从[l, r]之间的一个索引，这个索引是前闭后闭的
    // 之后只需要让随机生成的这个索引的元素和 当前最左侧的那个元素进行一下交换即可
    // 那么之后使用的标定元素就是 这个随机生成的索引位置的元素
    swap(arr[rand() % (r - l + 1) + l], arr[l]); // 优化二

    T v = arr[l];

    // arr[l+1...j] < v ; arr[j+1...i) > v
    int j = l;
    for (int i = l + 1; i <= r; i ++) {
        if (arr[i] < v) {
            swap(arr[j + 1], arr[i]);
            j ++;
        }
    }

    swap(arr[l], arr[j]);

    return j;
}

// 对 arr[l...r]部分的元素进行快速排序
template <typename T>
void __quickSort (T arr[], int l, int r) {

//    if (l >= r)
//        return;
    if (r - l <= 15) { // 优化一：在合适时机使用插入排序进行优化
        insertionSort(arr, l ,r);
        return;
    }


    // 这个操作会返回一个索引值
    int p = __partition(arr, l, r);
    __quickSort(arr, l, p - 1);
    __quickSort(arr, p + 1, r);
}

template <typename T>
void quickSort (T arr[], int n) {

    srand(time(NULL));
    __quickSort(arr, 0, n - 1);
}

int main() {

    int n = 500000;
    int *arr = SortTestHelper::generateRandomArray(n, 0, n);
    int *clonedArr = SortTestHelper::copyIntArray(arr, n);
    int *clonedArr2 = SortTestHelper::copyIntArray(arr, n);
    cout<<"Test for random array, size = "<<n<<", random range [0, "<<n<<"]"<<endl;

//    Merge Sort ：0.187 s
//    Merge Sort Bottom Up ：0.156 s
//    Quick Sort ：0.203 s
    SortTestHelper::testSort("Merge Sort", mergeSort, arr, n);
    SortTestHelper::testSort("Merge Sort Bottom Up", mergeSortBU, clonedArr, n);
    SortTestHelper::testSort("Quick Sort", quickSort, clonedArr2, n);

    // 释放数组的空间，如果不释放就会出现内存泄漏的问题。
    delete[] arr;
    delete[] clonedArr;
    delete[] clonedArr2;

    int *array = SortTestHelper::generateNearlyOrderedArray(n, 100);
    int *clonedArray = SortTestHelper::copyIntArray(array, n);
    int *clonedArray2 = SortTestHelper::copyIntArray(array, n);
    cout<<"Test for nearly ordered, size = "<<n<<", range [0, "<<n<<"]"<<endl;

//    Merge Sort ：0.063 s
//    Merge Sort Bottom Up ：0.062 s
//    Quick Sort ：0.125 s
    SortTestHelper::testSort("Merge Sort", mergeSort, array, n);
    SortTestHelper::testSort("Merge Sort Bottom Up", mergeSortBU, clonedArray, n);
    SortTestHelper::testSort("Quick Sort", quickSort, clonedArray2, n);

    // 释放数组的空间，如果不释放就会出现内存泄漏的问题。
    delete[] array;
    delete[] clonedArray;
    delete[] clonedArray2;

    return 0;
}