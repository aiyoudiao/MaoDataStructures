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

    int i = l, j = mid + 1;

    // 遍历临时数组中的内容
    for (int k = l; k <=  r; ++k) {
        // 先确定索引合法性
        if (i > mid) {
            arr[k] = aux[j - l];
            j ++;
        } else if (j > r) {
            arr[k] = aux[i - l];
            i ++;
        }
        else if (aux[i - l] < aux[j - l]) {
            arr[k] = aux[i - l];
            i ++;
        } else {
            arr[k] = aux[j - l];
            j ++;
        }
    }
}

// 递归使用归并排序，对arr[l..l]的范围进行排序 前闭后闭这个区间范围。
template<typename T>
void __mergeSort (T arr[], int l, int r) {

    if (l >= r)
        return;

//    int mid = (l + r) / 2 可能会出现整型溢出
    int mid = l + (r - l) / 2;

    __mergeSort(arr, l, mid);
    __mergeSort(arr, mid + 1, r);

    // 这一次merge操作之后就完成了整个排序的过程。
    __merge(arr, l, mid, r);
}

template<typename T>
void mergeSort (T arr[], int n) {
    // 在c++中不要使用__来命名，因为编译器内部使用了大量的__，所以可能产生命名冲突
    // 这里是方便 显眼一点，__表示私有
    __mergeSort(arr, 0, n - 1);
}

int main() {

    int n = 50000;
//    int *arr = SortTestHelper::generateNearlyOrderedArray(n, 100);
    int *arr = SortTestHelper::generateRandomArray(n, 0, n);
    int *clonedArr = SortTestHelper::copyIntArray(arr, n);
    int *clonedArr2 = SortTestHelper::copyIntArray(arr, n);
    cout<<"Test for random array, size = "<<n<<", random range [0, "<<n<<"]"<<endl;

    // Selection Sort ：4.421 s
    // Insertion Sort ：2.313 s
    // Merge Sort ：0.016 s
    SortTestHelper::testSort("Selection Sort", selectionSort, arr, n);
    SortTestHelper::testSort("Insertion Sort", insertionSort, clonedArr, n);
    SortTestHelper::testSort("Merge Sort", mergeSort, clonedArr2, n);

    // 释放数组的空间，如果不释放就会出现内存泄漏的问题。
    delete[] arr;
    delete[] clonedArr;
    delete[] clonedArr2;

    return 0;
}