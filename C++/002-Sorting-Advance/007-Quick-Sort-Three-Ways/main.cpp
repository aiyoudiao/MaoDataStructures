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
#include "QuickSort.h"
#include "QucikSortTwo.h"

using namespace std;

// 对 arr[l...r]部分的元素进行快速排序
template <typename T>
void __quickSort3Ways (T arr[], int l, int r) {

//    if (l >= r)
//        return;
    if (r - l <= 15) { // 优化一：在合适时机使用插入排序进行优化
        insertionSort(arr, l ,r);
        return;
    }

    //生成一个 从[l, r]之间的一个索引，这个索引是前闭后闭的
    // 之后只需要让随机生成的这个索引的元素和 当前最左侧的那个元素进行一下交换即可
    // 那么之后使用的标定元素就是 这个随机生成的索引位置的元素
    swap(arr[rand() % (r - l + 1) + l], arr[l]); // 优化二

    T v = arr[l];

    int lt = l; // arr[l+1...lt] < v
    int gt = r + 1; // arr[gt...r] > v
    int i = l + 1; // arr[lt+1...i] == v

    while (i < gt) {
        // 整个过程有三种情况
        if (arr[i] < v) { // arr[l+1...lt] < v
            swap(arr[i], arr[lt + 1]);
            lt ++;
            i ++;
        } else if (arr[i] > v) { // arr[gt...r] > v
            swap(arr[i], arr[gt - 1]);
            gt --;
        } else { // arr[lt+1...i] == v
            i ++;
        }
    }

    // 将标定值放到等于v的第一个元素
    swap(arr[l], arr[lt]);

    __quickSort3Ways(arr, l, lt - 1);
    __quickSort3Ways(arr, gt, r);
}

template <typename T>
void quickSort3Ways (T arr[], int n) {

    srand(time(NULL));
    __quickSort3Ways(arr, 0, n - 1);
}

int main() {

    int n = 200000;
    int *arr = SortTestHelper::generateRandomArray(n, 0, n);
    int *clonedArr = SortTestHelper::copyIntArray(arr, n);
    int *clonedArr2 = SortTestHelper::copyIntArray(arr, n);
    int *clonedArr3 = SortTestHelper::copyIntArray(arr, n);
    int *clonedArr4 = SortTestHelper::copyIntArray(arr, n);
    cout<<"Test for random array, size = "<<n<<", random range [0, "<<n<<"]"<<endl;

//    Merge Sort ：0.063 s
//    Merge Sort Bottom Up ：0.093 s
//    Quick Sort ：0.063 s
//    Quick Sort2 ：0.047 s
//    Quick Sort3Warys ：0.094 s
    SortTestHelper::testSort("Merge Sort", mergeSort, arr, n);
    SortTestHelper::testSort("Merge Sort Bottom Up", mergeSortBU, clonedArr, n);
    SortTestHelper::testSort("Quick Sort", quickSort, clonedArr2, n);
    SortTestHelper::testSort("Quick Sort2", quickSort2, clonedArr3, n);
    SortTestHelper::testSort("Quick Sort3Warys", quickSort3Ways, clonedArr4, n);

    // 释放数组的空间，如果不释放就会出现内存泄漏的问题。
    delete[] arr;
    delete[] clonedArr;
    delete[] clonedArr2;
    delete[] clonedArr3;
    delete[] clonedArr4;
    cout<<endl;

    int *array = SortTestHelper::generateNearlyOrderedArray(n, 100);
    int *clonedArray = SortTestHelper::copyIntArray(array, n);
    int *clonedArray2 = SortTestHelper::copyIntArray(array, n);
    int *clonedArray3 = SortTestHelper::copyIntArray(array, n);
    int *clonedArray4 = SortTestHelper::copyIntArray(array, n);
    cout<<"Test for nearly ordered, size = "<<n<<", range [0, "<<n<<"]"<<endl;

//    Merge Sort ：0.031 s
//    Merge Sort Bottom Up ：0.031 s
//    Quick Sort ：0.047 s
//    Quick Sort2 ：0.016 s
//    Quick Sort3Ways ：0.078 s
    SortTestHelper::testSort("Merge Sort", mergeSort, array, n);
    SortTestHelper::testSort("Merge Sort Bottom Up", mergeSortBU, clonedArray, n);
    SortTestHelper::testSort("Quick Sort", quickSort, clonedArray2, n);
    SortTestHelper::testSort("Quick Sort2", quickSort2, clonedArray3, n);
    SortTestHelper::testSort("Quick Sort3Ways", quickSort3Ways, clonedArray4, n);

    // 释放数组的空间，如果不释放就会出现内存泄漏的问题。
    delete[] array;
    delete[] clonedArray;
    delete[] clonedArray2;
    delete[] clonedArray3;
    delete[] clonedArray4;
    cout<<endl;

    int swapTimes = 10;
    int *arrayThree = SortTestHelper::generateRandomArray(n, 0, swapTimes);
    int *clonedArrayThree = SortTestHelper::copyIntArray(arrayThree, n);
    int *clonedArrayThree2 = SortTestHelper::copyIntArray(arrayThree, n);
    int *clonedArrayThree3 = SortTestHelper::copyIntArray(arrayThree, n);
    int *clonedArrayThree4 = SortTestHelper::copyIntArray(arrayThree, n);
    cout<<"Test for random repeat array, size = "<<n<<", range [0, "<<swapTimes<<"]"<<endl;

//    Merge Sort ：0.031 s
//    Merge Sort Bottom Up ：0.062 s
//    Quick Sort ：7.188 s
//    Quick Sort2 ：0.032 s
//    Quick Sort3Ways ：0.001 s
    SortTestHelper::testSort("Merge Sort", mergeSort, arrayThree, n);
    SortTestHelper::testSort("Merge Sort Bottom Up", mergeSortBU, clonedArrayThree, n);
    SortTestHelper::testSort("Quick Sort", quickSort, clonedArrayThree2, n);
    SortTestHelper::testSort("Quick Sort2", quickSort2, clonedArrayThree3, n);
    SortTestHelper::testSort("Quick Sort3Ways", quickSort3Ways, clonedArrayThree4, n);

    // 释放数组的空间，如果不释放就会出现内存泄漏的问题。
    delete[] arrayThree;
    delete[] clonedArrayThree;
    delete[] clonedArrayThree2;
    delete[] clonedArrayThree3;
    delete[] clonedArrayThree4;
    cout<<endl;

    return 0;
}