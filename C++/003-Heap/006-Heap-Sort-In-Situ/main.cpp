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
#include "HeapSort.h"


using namespace std;

// parent(i) = (i - 1) / 2; leftChild(i) = i * 2 + 1; rightChild = i * 2 + 2;
// 堆的下沉操作  辅助函数
template <typename T>
// n 为数组中元素个数， i 为 要进行下沉的堆元素的索引 , 数组索引从0开始，所以最后一个位置的元素的索引是 n - 1
void __shiftDown(T arr[], int n, int i) {

    // (2 * i + 1 < n) 至少要有左孩子，
    // 堆中节点是从左向右的方向排列的，堆是完全二叉树。
    while (2 * i + 1 < n) {
        int max = 2 * i + 1; // 默认最大值索引为 左孩子，左孩子 + 1就是右孩子
        // 查看右孩子是否存在 并且 左孩子值小于右孩子
        if (max + 1 < n && arr[max] < arr[max + 1])
            max += 1; // 切换为右孩子
        // 当前i位置的元素大于等于原节点的左右孩子中最大的元素的值
        // 循环可以结束了，因为当前位置就是合适的
        if (arr[i] >= arr[max])
            break;
        swap(arr[i], arr[max]);
        i = max;
    }
}
// 堆的原地排序
template <typename T>
void heapSortInSitu (T arr[], int n) {
    // 最后一个叶子节点的索引
    int last = n - 1;

    // 对原数组进行 heapify操作
    for (int i = (n - 1) / 2; i >= 0; i --) {
        // 数组对象 内部元素的个数 以及当前的遍历到的非叶子节点索引值
        // 对每一个非叶子节点进行下沉操作，从而维护堆的性质
        __shiftDown(arr, n, i);
    }

    // 开始进行 让堆尾的元素与堆顶的元素进行交换，
    // 也就是不断的将最大值放到最后面，从而完成排序
    for (int i = n - 1; i > 0; i --) {
        // 头尾进行交换，最大值放到了最后面
        swap(arr[0], arr[i]);

        // 让堆顶的元素进行下沉操作
        __shiftDown(arr, i, 0);
    }
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
    int *clonedArr7 = SortTestHelper::copyIntArray(arr, n);
    cout<<"Test for random array, size = "<<n<<", random range [0, "<<n<<"]"<<endl;

//    Merge Sort ：0.172 s
//    Merge Sort Bottom Up ：0.203 s
//    Quick Sort2 ：0.156 s
//    Quick Sort3Warys ：0.282 s
//    Heap Sort ：0.468 s
//    Heap Sort2 ：0.36 s
//    Heap Sort In Situ ：0.297 s
    SortTestHelper::testSort("Merge Sort", mergeSort, arr, n);
    SortTestHelper::testSort("Merge Sort Bottom Up", mergeSortBU, clonedArr, n);
//    SortTestHelper::testSort("Quick Sort", quickSort, clonedArr2, n);
    SortTestHelper::testSort("Quick Sort2", quickSort2, clonedArr3, n);
    SortTestHelper::testSort("Quick Sort3Warys", quickSort3Ways, clonedArr4, n);
    SortTestHelper::testSort("Heap Sort", heapSort, clonedArr5, n);
    SortTestHelper::testSort("Heap Sort2", heapSort2, clonedArr6, n);
    SortTestHelper::testSort("Heap Sort In Situ", heapSortInSitu, clonedArr7, n);

    // 释放数组的空间，如果不释放就会出现内存泄漏的问题。
    delete[] arr;
    delete[] clonedArr;
//    delete[] clonedArr2;
    delete[] clonedArr3;
    delete[] clonedArr4;
    delete[] clonedArr5;
    delete[] clonedArr6;
    delete[] clonedArr7;
    cout<<endl;

    int *array = SortTestHelper::generateNearlyOrderedArray(n, 100);
    int *clonedArray = SortTestHelper::copyIntArray(array, n);
//    int *clonedArray2 = SortTestHelper::copyIntArray(array, n);
    int *clonedArray3 = SortTestHelper::copyIntArray(array, n);
    int *clonedArray4 = SortTestHelper::copyIntArray(array, n);
    int *clonedArray5= SortTestHelper::copyIntArray(array, n);
    int *clonedArray6= SortTestHelper::copyIntArray(array, n);
    int *clonedArray7= SortTestHelper::copyIntArray(array, n);
    cout<<"Test for nearly ordered, size = "<<n<<", range [0, "<<n<<"]"<<endl;

//    Merge Sort ：0.047 s
//    Merge Sort Bottom Up ：0.047 s
//    Quick Sort2 ：0.032 s
//    Quick Sort3Ways ：0.171 s
//    Heap Sort ：0.313 s
//    Heap Sort2 ：0.219 s
//    Heap Sort In Situ ：0.203 s
    SortTestHelper::testSort("Merge Sort", mergeSort, array, n);
    SortTestHelper::testSort("Merge Sort Bottom Up", mergeSortBU, clonedArray, n);
//    SortTestHelper::testSort("Quick Sort", quickSort, clonedArray2, n);
    SortTestHelper::testSort("Quick Sort2", quickSort2, clonedArray3, n);
    SortTestHelper::testSort("Quick Sort3Ways", quickSort3Ways, clonedArray4, n);
    SortTestHelper::testSort("Heap Sort", heapSort, clonedArray5, n);
    SortTestHelper::testSort("Heap Sort2", heapSort2, clonedArray6, n);
    SortTestHelper::testSort("Heap Sort In Situ", heapSortInSitu, clonedArray7, n);

    // 释放数组的空间，如果不释放就会出现内存泄漏的问题。
    delete[] array;
    delete[] clonedArray;
//    delete[] clonedArray2;
    delete[] clonedArray3;
    delete[] clonedArray4;
    delete[] clonedArray5;
    delete[] clonedArray6;
    delete[] clonedArray7;
    cout<<endl;

    int swapTimes = 10;
    int *arrayThree = SortTestHelper::generateRandomArray(n, 0, swapTimes);
    int *clonedArrayThree = SortTestHelper::copyIntArray(arrayThree, n);
//    int *clonedArrayThree2 = SortTestHelper::copyIntArray(arrayThree, n);
    int *clonedArrayThree3 = SortTestHelper::copyIntArray(arrayThree, n);
    int *clonedArrayThree4 = SortTestHelper::copyIntArray(arrayThree, n);
    int *clonedArrayThree5 = SortTestHelper::copyIntArray(arrayThree, n);
    int *clonedArrayThree6 = SortTestHelper::copyIntArray(arrayThree, n);
    int *clonedArrayThree7 = SortTestHelper::copyIntArray(arrayThree, n);
    cout<<"Test for random repeat array, size = "<<n<<", range [0, "<<swapTimes<<"]"<<endl;

//    Merge Sort ：0.125 s
//    Merge Sort Bottom Up ：0.11 s
//    Quick Sort2 ：0.078 s
//    Quick Sort3Ways ：0.016 s
//    Heap Sort ：0.188 s
//    Heap Sort2 ：0.203 s
//    Heap Sort In situ ：0.187 s
    SortTestHelper::testSort("Merge Sort", mergeSort, arrayThree, n);
    SortTestHelper::testSort("Merge Sort Bottom Up", mergeSortBU, clonedArrayThree, n);
//    SortTestHelper::testSort("Quick Sort", quickSort, clonedArrayThree2, n);
    SortTestHelper::testSort("Quick Sort2", quickSort2, clonedArrayThree3, n);
    SortTestHelper::testSort("Quick Sort3Ways", quickSort3Ways, clonedArrayThree4, n);
    SortTestHelper::testSort("Heap Sort", heapSort, clonedArrayThree5, n);
    SortTestHelper::testSort("Heap Sort2", heapSort2, clonedArrayThree6, n);
    SortTestHelper::testSort("Heap Sort In situ", heapSortInSitu, clonedArrayThree7, n);

    // 释放数组的空间，如果不释放就会出现内存泄漏的问题。
    delete[] arrayThree;
    delete[] clonedArrayThree;
//    delete[] clonedArrayThree2;
    delete[] clonedArrayThree3;
    delete[] clonedArrayThree4;
    delete[] clonedArrayThree5;
    delete[] clonedArrayThree6;
    delete[] clonedArrayThree7;
    cout<<endl;

    return 0;
}