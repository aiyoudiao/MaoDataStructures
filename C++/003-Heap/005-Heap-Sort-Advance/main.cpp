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
#include "QuickSort3Ways.h"
#include "MaxHeap.h"

using namespace std;

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

int main() {
    int n = 500000;
    int *arr = SortTestHelper::generateRandomArray(n, 0, n);
    int *clonedArr = SortTestHelper::copyIntArray(arr, n);
//    int *clonedArr2 = SortTestHelper::copyIntArray(arr, n);
    int *clonedArr3 = SortTestHelper::copyIntArray(arr, n);
    int *clonedArr4 = SortTestHelper::copyIntArray(arr, n);
    int *clonedArr5 = SortTestHelper::copyIntArray(arr, n);
    int *clonedArr6 = SortTestHelper::copyIntArray(arr, n);
    cout<<"Test for random array, size = "<<n<<", random range [0, "<<n<<"]"<<endl;

//    Merge Sort ：0.156 s
//    Merge Sort Bottom Up ：0.157 s
//    Quick Sort2 ：0.093 s
//    Quick Sort3Warys ：0.172 s
//    Heap Sort ：0.266 s
//    Heap Sort2 ：0.25 s
    SortTestHelper::testSort("Merge Sort", mergeSort, arr, n);
    SortTestHelper::testSort("Merge Sort Bottom Up", mergeSortBU, clonedArr, n);
//    SortTestHelper::testSort("Quick Sort", quickSort, clonedArr2, n);
    SortTestHelper::testSort("Quick Sort2", quickSort2, clonedArr3, n);
    SortTestHelper::testSort("Quick Sort3Warys", quickSort3Ways, clonedArr4, n);
    SortTestHelper::testSort("Heap Sort", heapSort, clonedArr5, n);
    SortTestHelper::testSort("Heap Sort2", heapSort2, clonedArr6, n);

    // 释放数组的空间，如果不释放就会出现内存泄漏的问题。
    delete[] arr;
    delete[] clonedArr;
//    delete[] clonedArr2;
    delete[] clonedArr3;
    delete[] clonedArr4;
    delete[] clonedArr5;
    delete[] clonedArr6;
    cout<<endl;

    int *array = SortTestHelper::generateNearlyOrderedArray(n, 100);
    int *clonedArray = SortTestHelper::copyIntArray(array, n);
//    int *clonedArray2 = SortTestHelper::copyIntArray(array, n);
    int *clonedArray3 = SortTestHelper::copyIntArray(array, n);
    int *clonedArray4 = SortTestHelper::copyIntArray(array, n);
    int *clonedArray5= SortTestHelper::copyIntArray(array, n);
    int *clonedArray6= SortTestHelper::copyIntArray(array, n);
    cout<<"Test for nearly ordered, size = "<<n<<", range [0, "<<n<<"]"<<endl;

//    Merge Sort ：0.047 s
//    Merge Sort Bottom Up ：0.047 s
//    Quick Sort2 ：0.046 s
//    Quick Sort3Ways ：0.141 s
//    Heap Sort ：0.281 s
//    Heap Sort2 ：0.188 s
    SortTestHelper::testSort("Merge Sort", mergeSort, array, n);
    SortTestHelper::testSort("Merge Sort Bottom Up", mergeSortBU, clonedArray, n);
//    SortTestHelper::testSort("Quick Sort", quickSort, clonedArray2, n);
    SortTestHelper::testSort("Quick Sort2", quickSort2, clonedArray3, n);
    SortTestHelper::testSort("Quick Sort3Ways", quickSort3Ways, clonedArray4, n);
    SortTestHelper::testSort("Heap Sort", heapSort, clonedArray5, n);
    SortTestHelper::testSort("Heap Sort2", heapSort2, clonedArray6, n);

    // 释放数组的空间，如果不释放就会出现内存泄漏的问题。
    delete[] array;
    delete[] clonedArray;
//    delete[] clonedArray2;
    delete[] clonedArray3;
    delete[] clonedArray4;
    delete[] clonedArray5;
    delete[] clonedArray6;
    cout<<endl;

    int swapTimes = 10;
    int *arrayThree = SortTestHelper::generateRandomArray(n, 0, swapTimes);
    int *clonedArrayThree = SortTestHelper::copyIntArray(arrayThree, n);
//    int *clonedArrayThree2 = SortTestHelper::copyIntArray(arrayThree, n);
    int *clonedArrayThree3 = SortTestHelper::copyIntArray(arrayThree, n);
    int *clonedArrayThree4 = SortTestHelper::copyIntArray(arrayThree, n);
    int *clonedArrayThree5 = SortTestHelper::copyIntArray(arrayThree, n);
    int *clonedArrayThree6 = SortTestHelper::copyIntArray(arrayThree, n);
    cout<<"Test for random repeat array, size = "<<n<<", range [0, "<<swapTimes<<"]"<<endl;

//    Merge Sort ：0.079 s
//    Merge Sort Bottom Up ：0.109 s
//    Quick Sort2 ：0.062 s
//    Quick Sort3Ways ：0.016 s
//    Heap Sort ：0.188 s
//    Heap Sort2 ：0.171 s
    SortTestHelper::testSort("Merge Sort", mergeSort, arrayThree, n);
    SortTestHelper::testSort("Merge Sort Bottom Up", mergeSortBU, clonedArrayThree, n);
//    SortTestHelper::testSort("Quick Sort", quickSort, clonedArrayThree2, n);
    SortTestHelper::testSort("Quick Sort2", quickSort2, clonedArrayThree3, n);
    SortTestHelper::testSort("Quick Sort3Ways", quickSort3Ways, clonedArrayThree4, n);
    SortTestHelper::testSort("Heap Sort", heapSort, clonedArrayThree5, n);
    SortTestHelper::testSort("Heap Sort2", heapSort2, clonedArrayThree6, n);

    // 释放数组的空间，如果不释放就会出现内存泄漏的问题。
    delete[] arrayThree;
    delete[] clonedArrayThree;
//    delete[] clonedArrayThree2;
    delete[] clonedArrayThree3;
    delete[] clonedArrayThree4;
    delete[] clonedArrayThree5;
    delete[] clonedArrayThree6;
    cout<<endl;

    return 0;
}