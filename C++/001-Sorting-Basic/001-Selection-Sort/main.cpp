#include <iostream>
#include <algorithm>

// 老的标准 要使用这个swap方法，
// 那么可以引入algorithm这个标准库

using namespace std;

void selectionSrot (int arr[], int n) {
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
int main() {
    int a[10] = {10,9,8,7,6,5,4,3,2,1};
    selectionSrot(a, 10);
    for (int i = 0; i < 10; i++)
        cout<<a[i]<<" ";
    cout<<endl;

    return 0;
}