#include <iostream>
#include <algorithm>
#include <string>
// 老的标准 要使用这个swap方法，
// 那么可以引入algorithm这个标准库

using namespace std;

// 二分查找法，在有序的数组arr中，查找target
// 如果找到target，返回相应的索引index
// 如果没有找到targe，就会返回 -1
template<typename T>
int binarySearch (T arr[], int n, T target) {

    // 在 arr[l...r]之中查找target
    int l = 0, r = n - 1;
    while (l <= r) {

        int mid = (r - l) / 2 + l;
        if (arr[mid] == target) // 找到了
            return mid;

        if (arr[mid] > target)
            // 下一次在 arr[l...mid - 1]中进行查找
            r = mid - 1;
        else  // arr[mid] < target
            // 下一次再 arr[mid + 1...r]中进行查找
            l = mid + 1;
    }

    //到这里就没有找到
    return -1;
}

int main() {
    return 0;
}