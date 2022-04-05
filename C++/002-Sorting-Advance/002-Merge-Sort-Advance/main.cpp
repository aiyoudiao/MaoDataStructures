#include <iostream>
#include <algorithm>
#include <string>
// 老的标准 要使用这个swap方法，
// 那么可以引入algorithm这个标准库

// 使用双引号的方式进行引用
#include "SortTestHelper.h"
#include "SelectionSort.h"
#include "InsertionSort.h"

using namespace std;

// 将 arr[l...mid] 和 arr[mid+1...r] 两部分进行合并。
template<typename T>
void __merge (T arr[], int l, int mid, int r) {

    // 辅助空间
    T aux[r - l + 1];
    for (int i = l; i <= r ; ++i)
        aux[i - l] = arr[i];

    // 两部分数组的头部指针
    int i = l, j = mid + 1;

    // 遍历一遍数组中的内容
    for (int k = l; k <=  r; ++k) {
        // 左边头部指针不能大于mid
        if (i > mid) {
            arr[k] = aux[j - l];
            j ++;
        } else if (j > r) { // 右边头部指针不能大于 r
            arr[k] = aux[i - l];
            i ++;
        }
        else if (aux[i - l] < aux[j - l]) { // 正常情况下 左边头部指针与右边头部指针进行对比
            arr[k] = aux[i - l];
            i ++; // 那边头部指针的元素进入了数组中就将那边头部指针向后移动一位。
        } else {
            arr[k] = aux[j - l];
            j ++;
        }
    }
}

// 递归使用归并排序，对arr[l..l]的范围进行排序 前闭后闭这个区间范围。
template<typename T>
void __mergeSort (T arr[], int l, int r) {

//    if (l >= r)
//        return;

    if (r - l <= 15) { // 优化
        insertionSort(arr, l, r);
        return;
    }


//    int mid = (l + r) / 2 可能会出现整型溢出
    int mid = l + (r - l) / 2;

    __mergeSort(arr, l, mid);
    __mergeSort(arr, mid + 1, r);

    if (arr[mid] > arr[mid + 1]) // 优化操作
        __merge(arr, l, mid, r);
}

template<typename T>
void mergeSort (T arr[], int n) {
    // 在c++中不要使用__来命名，因为编译器内部使用了大量的__，所以可能产生命名冲突
    // 这里是方便 显眼一点，__表示私有
    __mergeSort(arr, 0, n - 1);
}

int main() {

    int n = 100000;
    int *arr = SortTestHelper::generateRandomArray(n, 0, n);
    int *clonedArr = SortTestHelper::copyIntArray(arr, n);
    cout<<"Test for random array, size = "<<n<<", random range [0, "<<n<<"]"<<endl;

//    Insertion Sort ：9.421 s
//    Merge Sort ：0.016 s
    SortTestHelper::testSort("Insertion Sort", insertionSort, arr, n);
    SortTestHelper::testSort("Merge Sort", mergeSort, clonedArr, n);

    // 释放数组的空间，如果不释放就会出现内存泄漏的问题。
    delete[] arr;
    delete[] clonedArr;

    int *array = SortTestHelper::generateNearlyOrderedArray(n, 5000);
    int *clonedArray = SortTestHelper::copyIntArray(array, n);
    cout<<"Test for nearly ordered, size = "<<n<<", range [0, "<<n<<"]"<<endl;

//    Insertion Sort ：1.172 s
//    Merge Sort ：0.016 s
    SortTestHelper::testSort("Insertion Sort", insertionSort, array, n);
    SortTestHelper::testSort("Merge Sort", mergeSort, clonedArray, n);

    // 释放数组的空间，如果不释放就会出现内存泄漏的问题。
    delete[] array;
    delete[] clonedArray;

    return 0;
}